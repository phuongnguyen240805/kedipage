"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let mounted = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        if (mounted) setInit(true);
      })
      .catch((error) => {
        // Background effect là optional; lỗi engine không được làm hỏng app.
        console.warn("[particles] engine initialization failed", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      // --- THÊM ĐOẠN NÀY ĐỂ ĐẨY RA SAU ---
      fullScreen: {
        enable: true, // Bật chế độ toàn màn hình (fixed position)
        zIndex: -1,   // Đẩy lùi về sau nội dung (số âm)
      },
      // ------------------------------------
      background: {
        color: { value: "#0B2D5B" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 1,
              color: "#FFC629",
              width: 3,
            },
          },
          bubble: {
            distance: 200,
            size: 8,
            duration: 0.3,
            opacity: 0.8,
            color: "#FFC629",
          },
        },
      },
      particles: {
        color: { value: "#FFC629" },
        links: {
          color: "#FFC629",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true },
          value: 100,
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const cursorOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        // Above redesigned section backgrounds (z-20/z-30), below ElasticCursor (z-100).
        zIndex: 90,
      },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
        },
        modes: {
          grab: {
            distance: 190,
            links: {
              opacity: 0.95,
              color: "#FFC629",
              width: 2,
            },
          },
          bubble: {
            distance: 170,
            size: 8,
            duration: 0.25,
            opacity: 1,
            color: "#FFC629",
          },
        },
      },
      particles: {
        color: { value: "#FFC629" },
        links: {
          color: "#FFC629",
          distance: 155,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.42,
          direction: "none",
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true },
          value: 90,
        },
        opacity: {
          value: { min: 0.18, max: 0.46 },
        },
        size: {
          value: { min: 1.2, max: 2.7 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Particles
          id="tsparticles-cursor"
          options={cursorOptions}
          className="pointer-events-none"
        />
      </>
    );
  }

  return null;
};

export default ParticlesBackground;