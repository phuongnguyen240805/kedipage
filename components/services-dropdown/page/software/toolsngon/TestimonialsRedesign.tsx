'use client';

/**
 * Visual-only replacement for the legacy Tools Ngon testimonial component.
 * Visible copy is preserved; missing local placeholder assets are replaced by
 * CSS primitives supplied by the shared vertical visual signature.
 */
export default function TestimonialsRedesign() {
  return (
    <section className="py-16 relative container mx-auto">
      <div className="mx-auto text-center flex items-center justify-center flex-col">
        <p className="text-4xl dark:text-slate-200 text-slate-900 text-center mb-2">
          Khách hàng của chúng tôi nói gì?
        </p>

        <div className="tools-rating-visual mb-12" aria-hidden="true" />

        <div className="w-full relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="flex flex-col gap-4 p-6 bg-white rounded-2xl"
              >
                <div className="flex items-center">
                  {['star1', 'star2', 'star3', 'star4', 'star5', 'star6'].map(
                    (star) => (
                      <span key={star} className="tools-star" aria-hidden="true">
                        ★
                      </span>
                    )
                  )}
                </div>

                <p className="text-slate-900 dark:text-slate-200 text-left">
                  Đây là lời đánh giá mẫu sẽ được thay thế bằng nội dung thật.
                </p>

                <div className="flex items-center justify-start">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <div
                      className="tools-avatar-placeholder h-full w-full"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-slate-900 dark:text-slate-200 text-left ml-4 mr-1">
                    Khách hàng {item}
                  </p>

                  <div className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-badge-check"
                      aria-hidden="true"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
