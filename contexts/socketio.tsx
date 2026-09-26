"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};
export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  // SETUP SOCKET.IO
  useEffect(() => {
    const fallbackUsername = generateRandomCursor().name;
    let username = fallbackUsername;

    try {
      username = window.localStorage.getItem("username") || fallbackUsername;
    } catch (error) {
      // Một số WebView / privacy mode có thể chặn localStorage.
      console.warn("[socket] localStorage unavailable", error);
    }

    const wsUrl = process.env.NEXT_PUBLIC_WS_URL;
    if (!wsUrl) {
      console.warn("[socket] NEXT_PUBLIC_WS_URL is not configured; realtime disabled");
      return;
    }

    let socketInstance: Socket;

    try {
      socketInstance = io(wsUrl, {
        query: { username },
      });
    } catch (error) {
      console.error("[socket] failed to initialize Socket.IO", error);
      return;
    }

    setSocket(socketInstance);

    socketInstance.on("connect", () => {});
    socketInstance.on("connect_error", (error) => {
      console.warn("[socket] connection error", error.message);
    });
    socketInstance.on("msgs-receive-init", (initialMessages: Message[]) => {
      setMsgs(initialMessages);
    });
    socketInstance.on("msg-receive", (message: Message) => {
      setMsgs((current) => [...current, message]);
    });

    return () => {
      socketInstance.removeAllListeners();
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, users, setUsers, msgs }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
