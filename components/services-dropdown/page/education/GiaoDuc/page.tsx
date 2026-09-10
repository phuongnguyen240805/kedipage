'use client';

import { lazy, Suspense } from 'react';

const LandingPage1GD = lazy(() => import('./LandingPageGD1'));
const LandingPage2GD = lazy(() => import('./LandingPageGD2'));
const LandingPage3GD = lazy(() => import('./LandingPage3GD'));
const LandingPage4GD = lazy(() => import('./LandingPage4GD'));
const LandingPage5GD = lazy(() => import('./LandingPage5GD'));
const LandingPage6GD = lazy(() => import('./LandingPage6GD'));
const LandingPage7GD = lazy(() => import('./LandingPage7GD'));
const LandingPage8GD = lazy(() => import('./LandingPage8GD'));
const LandingPage9GD = lazy(() => import('./LandingPage9GD'));

// Fallback siêu nhẹ — không CSS, không component phức tạp
const MinimalFallback = () => null;

export default function PageGiaoDuc() {
  return (
    <>
    
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage1GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage2GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage3GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage4GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage5GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage6GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage7GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage8GD />
      </Suspense>
      <Suspense fallback={<MinimalFallback />}>
        <LandingPage9GD />
      </Suspense>
    </>
  );
}
