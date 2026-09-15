"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
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

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        // Bạn cũng có thể thêm className nếu cần chỉnh thêm CSS
        // className="absolute top-0 left-0 -z-10" 
      />
    );
  }

  return null;
};

export default ParticlesBackground;