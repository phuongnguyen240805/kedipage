'use client';

import React from 'react';

export default function DownloadSection() {
  return (
    <section className="py-16 relative container mx-auto px-4 lg:px-0">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-200 mb-8">
          Tải <span className="text-blue-500">Tools Ngon</span> về thiết bị của
          bạn
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Hỗ trợ tất cả trình duyệt phổ biến như Chrome, Edge và Brave.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Chrome Extension */}
          <a
            href="https://chrome.google.com/webstore/detail/toolsngon-extension/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-6 h-6 mr-2"
              aria-hidden="true"
            >
              <title>Google Chrome logo</title>
              <path
                fill="#4285F4"
                d="M43.6,20.5H24v7.1h11.2c-1.6,4.6-6.1,7.9-11.2,7.9c-6.6,0-12-5.4-12-12s5.4-12,12-12c3,0,5.7,1.1,7.8,2.9
              l5.6-5.6C33.6,5.5,29.1,4,24,4C12.9,4,4,12.9,4,24s8.9,20,20,20c10.6,0,19.4-8,19.9-18.2v-0.7C44,23.2,43.8,21.8,43.6,20.5z"
              />
              <path
                fill="#34A853"
                d="M6.3,14.6l5.9,4.3c1.6-3.8,5.4-6.4,9.8-6.4c3,0,5.7,1.1,7.8,2.9l5.6-5.6C33.6,5.5,29.1,4,24,4
              C15.3,4,7.9,9.4,6.3,14.6z"
              />
              <path
                fill="#FBBC05"
                d="M24,44c5.1,0,9.7-2,13-5.2l-6-4.9c-2,1.5-4.5,2.4-7,2.4c-5.1,0-9.6-3.3-11.2-7.9l-5.9,4.5
              C10.6,38.6,16.9,44,24,44z"
              />
              <path
                fill="#EA4335"
                d="M43.6,20.5H24v7.1h11.2c-0.7,1.8-1.8,3.4-3.1,4.7c0,0,0,0,0,0l6,4.9c-0.4,0.4,6.5-5,6.5-14.2
              C44,22.3,43.8,21.3,43.6,20.5z"
              />
            </svg>
            Cài đặt trên Chrome
          </a>

          {/* Windows Download */}
          <a
            href="https://toolsngon.com/download/windows"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-slate-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <title>Windows logo</title>
              <path d="M3 4.998L10.5 4v7H3V4.998zM10.5 13v7L3 19.002V13h7.5zM11.5 4l9.5-.998v8.996h-9.5V4zM21 13v6.002L11.5 20v-7H21z" />
            </svg>
            Tải bản Windows
          </a>
        </div>
      </div>
    </section>
  );
}
