declare module 'liquid-gl' {
  interface Lens { destroy(): void; }
  interface Options {
    target: string; snapshot?: string; engine?: string; resolution?: number;
    refraction?: number; bevelDepth?: number; bevelWidth?: number; frost?: number;
    aberration?: number; magnify?: number; shadow?: boolean; specular?: boolean;
    tilt?: boolean; draggable?: boolean; interaction?: string; tint?: string;
    reveal?: string; on?: { init?: () => void };
  }
  export default function liquidGL(options: Options): Lens | Lens[];
}
