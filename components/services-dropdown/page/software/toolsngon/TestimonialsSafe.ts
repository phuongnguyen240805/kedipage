'use client';

import React from 'react';

const REVIEW_IDS = [1, 2, 3, 4, 5, 6, 7] as const;
const STAR_KEYS = ['star1', 'star2', 'star3', 'star4', 'star5', 'star6'] as const;

function VerifiedBadge() {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 20,
      height: 20,
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      stroke: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'lucide lucide-badge-check',
      'aria-hidden': true,
    },
    React.createElement('path', {
      d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
    }),
    React.createElement('path', {
      d: 'm9 12 2 2 4-4',
      fill: 'none',
      stroke: 'white',
      strokeWidth: 1,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}

function ReviewCard({ item }: { item: number }) {
  return React.createElement(
    'div',
    { className: 'flex flex-col gap-4 p-6 bg-white rounded-2xl' },
    React.createElement(
      'div',
      { className: 'flex items-center' },
      STAR_KEYS.map((star) =>
        React.createElement(
          'span',
          { key: star, className: 'tools-star', 'aria-hidden': true },
          '★',
        ),
      ),
    ),
    React.createElement(
      'p',
      { className: 'text-slate-900 dark:text-slate-200 text-left' },
      'Đây là lời đánh giá mẫu sẽ được thay thế bằng nội dung thật.',
    ),
    React.createElement(
      'div',
      { className: 'flex items-center justify-start' },
      React.createElement(
        'div',
        { className: 'h-12 w-12 rounded-full overflow-hidden' },
        React.createElement('div', {
          className: 'tools-avatar-placeholder h-full w-full',
          'aria-hidden': true,
        }),
      ),
      React.createElement(
        'p',
        { className: 'text-slate-900 dark:text-slate-200 text-left ml-4 mr-1' },
        `Khách hàng ${item}`,
      ),
      React.createElement('div', { className: 'text-blue-500' }, React.createElement(VerifiedBadge)),
    ),
  );
}

export default function TestimonialsSafe() {
  return React.createElement(
    'section',
    { className: 'py-16 relative container mx-auto' },
    React.createElement(
      'div',
      { className: 'mx-auto text-center flex items-center justify-center flex-col' },
      React.createElement(
        'p',
        { className: 'text-4xl dark:text-slate-200 text-slate-900 text-center mb-2' },
        'Khách hàng của chúng tôi nói gì?',
      ),
      React.createElement('div', {
        className: 'tools-rating-visual mb-12',
        'aria-hidden': true,
      }),
      React.createElement(
        'div',
        { className: 'w-full relative' },
        React.createElement(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0' },
          REVIEW_IDS.map((item) => React.createElement(ReviewCard, { item, key: item })),
        ),
      ),
    ),
  );
}
