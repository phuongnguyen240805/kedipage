'use client';

import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent } from 'react';

export const KEDI_MOTION_EASE = [0.22, 1, 0.36, 1] as const;

type PointerTiltOptions = {
  maxRotate?: number;
  maxShift?: number;
  stiffness?: number;
  damping?: number;
};

/**
 * Shared pointer-driven 3D motion for KEDI interactive product scenes.
 * Keeps the motion language consistent and gives every scene the same
 * reduced-motion behavior without coupling visuals to page data.
 */
export function usePointerTilt({
  maxRotate = 5,
  maxShift = 12,
  stiffness = 105,
  damping = 22,
}: PointerTiltOptions = {}) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness, damping, mass: 0.55 });
  const smoothY = useSpring(pointerY, { stiffness, damping, mass: 0.55 });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxRotate, maxRotate]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxRotate, -maxRotate]);
  const shiftX = useTransform(smoothX, [-0.5, 0.5], [-maxShift, maxShift]);
  const shiftY = useTransform(smoothY, [-0.5, 0.5], [-maxShift * 0.7, maxShift * 0.7]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const box = event.currentTarget.getBoundingClientRect();
    if (!box.width || !box.height) return;

    pointerX.set((event.clientX - box.left) / box.width - 0.5);
    pointerY.set((event.clientY - box.top) / box.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return {
    reduceMotion,
    rotateX,
    rotateY,
    shiftX,
    shiftY,
    handlePointerMove,
    resetPointer,
  };
}
