"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

// Thêm Interface để nhận hàm callback từ Home
interface LogoProps {
  onLoadingComplete?: () => void;
}

// Styled Components cho lớp màn đen
const IntroBox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  position: absolute;
  z-index: 51;
  width: fit-content;
  display: flex;
  align-items: flex-end;

  a {
    display: flex;
    align-items: flex-end;
    text-decoration: none;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    path {
      stroke: #fff;
      stroke-width: 0.5px;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: 1.5rem;
  color: #fff;
  padding-bottom: 0.5rem;
  font-family: "Sirin Stencil", sans-serif;
  white-space: nowrap;
`;

// Animation Variants
const containerVariants: Variants = {
  hidden: {
    top: "50%", // Để 50% cho chuẩn giữa màn hình khi bắt đầu
    left: "50%",
    x: "-50%",
    y: "-50%",
    scale: 2,
  },
  visible: {
    top: "1rem",
    left: "2rem", // Chỉnh lên 2rem hoặc 3rem để dịch qua phải một chút như bạn muốn
    x: "0%",
    y: "0%",
    scale: 1,
    transition: { duration: 2, delay: 4, ease: [0.76, 0, 0.24, 1] },
  },
};

const pathVariants: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, delay: 0.5, ease: "easeInOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: -5,
    transition: { duration: 2, delay: 3, ease: "easeInOut" },
  },
};

const Logo: React.FC<LogoProps> = ({ onLoadingComplete }) => {
  const [isIntroDone, setIsIntroDone] = useState(false);

  useEffect(() => {
    // 1. Sau 6 giây: Đánh dấu intro xong để màn đen trượt lên
    const timer = setTimeout(() => {
      setIsIntroDone(true);
      // 2. Gọi hàm callback để báo cho CoverVideo bắt đầu chạy
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isIntroDone && (
          <IntroBox
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            }}
          />
        )}
      </AnimatePresence>

      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <motion.path
              variants={pathVariants}
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </svg>
          <Text variants={textVariants}>Thiết Kế Web</Text>
        </Link>
      </Container>
    </>
  );
};

export default Logo;
