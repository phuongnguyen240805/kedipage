'use client'; // 👈 QUAN TRỌNG: Bắt buộc có dòng này

import { useState } from 'react';
import { getArticleContent } from './services/mona-api'; 
import { formatTimeAgo, getImagesFromArticle } from './utils/helpers'; 
import Boderyelow from '../ui/boder-yelow';


// --- COPY LẠI COMPONENT CON (BlueCheck, ImageGrid) VÀO ĐÂY HOẶC IMPORT ---
const BlueCheck = () => (
  <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ImageGrid = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) return null;
  if (images.length === 1) return <img src={images[0]} alt="Post" className="w-full h-auto rounded-lg object-cover mt-3 border border-gray-100" />;
  if (images.length === 2) return <div className="grid grid-cols-2 gap-1 mt-3">{images.map((img, idx) => <img key={idx} src={img} alt="" className="w-full h-48 object-cover rounded-lg border border-gray-100" />)}</div>;
  return (
    <div className="grid grid-cols-2 gap-1 mt-3 relative">
      <img src={images[0]} alt="" className="col-span-2 w-full h-48 object-cover rounded-lg border border-gray-100" />
      {images.slice(1, 3).map((img, idx) => <img key={idx} src={img} alt="" className="w-full h-32 object-cover rounded-lg border border-gray-100" />)}
      {images.length > 3 && <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs font-bold">+{images.length - 3}</div>}
    </div>
  );
};

// --- COMPONENT CHÍNH ---
export default function ActivitiesList({ initialArticles }: { initialArticles: any[] }) {
  // Mặc định hiển thị 6 bài (để test cho dễ thấy nút), thực tế bạn sửa thành 20
  const [displayCount, setDisplayCount] = useState(6); 

  const visibleArticles = initialArticles.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 6); // Bấm thì hiện thêm 6 bài
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold text-white mb-8">Bản tin Mona hôm nay</h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {visibleArticles.map((article, index) => {
          // Thêm index vào key để tránh lỗi trùng key khi nhân bản dữ liệu test
          const { content, publishDate, author } = getArticleContent(article);
          const images = getImagesFromArticle(article);
          const timeAgo = formatTimeAgo(publishDate || article.createdAt);
          const cleanContent = content.replace(/<[^>]+>/g, '');

          return (
            // 1. Thẻ DIV ngoài cùng giữ key và layout (break-inside-avoid)
            <div key={`${article.id}-${index}`} className="break-inside-avoid mb-6">
              
              {/* 2. Bọc Boderyelow ở đây */}
              <Boderyelow>
                
                {/* 3. Nội dung Card gốc nằm bên trong */}
                <div className="bg-[#EAF4FA] rounded-xl p-5 transition-all hover:shadow-md border border-transparent hover:border-blue-100">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 shadow-sm flex-shrink-0">{author.charAt(0).toUpperCase()}</div>
                    <div>
                      <div className="flex items-center"><span className="font-bold text-gray-900 text-sm">{author}</span><BlueCheck /></div>
                      <div className="flex items-center text-xs text-gray-500 mt-0.5"><span>{timeAgo}</span></div>
                    </div>
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-2">
                    {cleanContent.length > 250 ? `${cleanContent.substring(0, 250)}...` : cleanContent}
                  </div>
                  <ImageGrid images={images} />
                </div>

              </Boderyelow>
            </div>
          );
        })}
      </div>

      {/* NÚT XEM THÊM */}
      {displayCount < initialArticles.length && (
        <div className="flex justify-center mt-10 pb-10">
          <button onClick={handleLoadMore} className="px-8 py-3 bg-white border border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-sm">
            Xem thêm các hoạt động khác ({initialArticles.length - displayCount} bài nữa)
          </button>
        </div>
      )}
    </div>
  );
}