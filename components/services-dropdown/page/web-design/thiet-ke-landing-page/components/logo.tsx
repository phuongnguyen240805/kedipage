"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

interface LogoProps {
  onLoadingComplete?: () => void;
}

const IntroBox = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 198, 41, 0.12), transparent 32%),
    #081f40;
`;

const Container = styled(motion.div)`
  position: absolute;
  z-index: 51;
  width: fit-content;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
  }

  img {
    width: 7.2rem;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    img {
      width: 6rem;
    }
  }
`;

const Badge = styled(motion.span)`
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 0.42rem 0.72rem;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
`;

const containerVariants: Variants = {
  hidden: {
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    scale: 1.25,
  },
  visible: {
    top: "1.25rem",
    left: "1.5rem",
    x: "0%",
    y: "0%",
    scale: 1,
    transition: {
      duration: 0.78,
      delay: 0.95,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const markVariants: Variants = {
  hidden: { opacity: 0, scale: 0.86, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08, ease: [0.19, 1, 0.22, 1] },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: 0.35, ease: [0.19, 1, 0.22, 1] },
  },
};

const Logo: React.FC<LogoProps> = ({ onLoadingComplete }) => {
  const [isIntroDone, setIsIntroDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsIntroDone(true);
      onLoadingComplete?.();
    }, 1750);

    return () => window.clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isIntroDone && (
          <IntroBox
            key="kedi-landing-intro"
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
          />
        )}
      </AnimatePresence>

      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/" aria-label="Về trang chủ KEDI">
          <motion.img
            variants={markVariants}
            src="https://assets.kedi.media/images/521d6ee8430017434c68-380.webp"
            alt="KEDI"
          />
          <Badge variants={badgeVariants}>Landing Page</Badge>
        </Link>
      </Container>
    </>
  );
};

export default Logo;
