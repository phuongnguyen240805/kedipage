import { fetchArticlesSafe } from './services/kedi-api'; 
import ActivitiesList from './activities-list'; // Nhớ import file vừa tạo ở trên

// --- GIỮ NGUYÊN MOCK DATA CŨ CỦA BẠN Ở ĐÂY ---
const MOCK_DATA: any[] = [ 
 {
    id: 101,
    documentId: 'mock-1',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 phút trước
    content_json: [
      {
        author: 'KEDI Media',
        title: 'Chào mừng năm mới 2026',
        content: '<p>Tết đến xuân về, KEDI Media xin chúc tất cả quý khách hàng và đối tác một năm mới An Khang Thịnh Vượng, Vạn Sự Như Ý! Năm nay chúng tôi sẽ tập trung vào các giải pháp AI đột phá.</p>',
      }
    ],
    images: {
      data: [
        { url: 'https://assets.kedi.media/images/9952436c6ff5c8bfedf2-1000.webp' }
      ]
    }
  },
  {
    id: 102,
    documentId: 'mock-2',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 giờ trước
    content_json: [
      {
        author: 'Team Account',
        title: 'Tổng kết quý 4',
        content: '<p>Buổi tổng kết Quý 4 không chỉ là lúc nhìn lại hành trình đã đi qua, mà còn là dịp để ghi nhận nỗ lực của từng thành viên. Khép lại năm 2025 với nhiều dấu ấn đáng nhớ, chúc toàn team Account giữ vững tinh thần!</p>',
      }
    ],
    images: {
      data: [
        { url: 'https://assets.kedi.media/images/2554232b6153ef1a6b85-1000.webp' },
        { url: 'https://assets.kedi.media/images/74d1cce10f98cd9002f1-1000.webp' }
      ]
    }
  },
  {
    id: 103,
    documentId: 'mock-3',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 ngày trước
    content_json: [
      {
        author: 'KEDI Media',
        title: 'Teambuilding Đà Nẵng',
        content: '<p>Chuyến đi Đà Nẵng 3 ngày 2 đêm đã kết thúc nhưng dư âm vẫn còn mãi. Cảm ơn ban tổ chức đã tạo ra một sân chơi tuyệt vời để anh em gắn kết. Cùng xem lại những khoảnh khắc "lầy lội" nhất nhé!</p>',
      }
    ],
    images: {
      data: [
        { url: 'https://assets.kedi.media/images/185f3cc662712b9f12aa-1000.webp' },
        { url: 'https://assets.kedi.media/images/f8dfc4830ff4f6e26ef5-1000.webp' },
        { url: 'https://assets.kedi.media/images/281e04d3d7ce76cd12da-1000.webp' },
        { url: 'https://assets.kedi.media/images/e4fe311ca790128107e2-1000.webp' }
      ]
    }
  },
  {
    id: 104,
    documentId: 'mock-4',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 ngày trước
    content_json: [
      {
        author: 'Anh Chu Chí Khanh',
        title: 'Chia sẻ về Marketing',
        content: '<p>Phim doanh nghiệp vẫn là yếu tố quan trọng để ghi dấu ấn trong tâm trí khách hàng. Một buổi gặp gỡ và học hỏi cực kỳ chất lượng cùng anh em Production House.</p>',
      }
    ],
    images: {
      data: [
        { url: 'https://assets.kedi.media/images/62651f38ee725286ee2a-1000.webp' }
      ]
    }
  },
  {
    id: 105,
    documentId: 'mock-5',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 ngày trước
    content_json: [
      {
        author: 'Tuyển dụng KEDI',
        title: 'Thông báo tuyển dụng',
        content: '<p>🔥 GÓC TÌM ĐỒNG ĐỘI 🔥<br>KEDI đang tìm kiếm 05 bạn Frontend Developer (React/Next.js) gia nhập biệt đội siêu anh hùng. Môi trường trẻ trung, trà sữa miễn phí mỗi ngày!</p>',
      }
    ],
    // Bài viết này không có ảnh để test giao diện text only
    images: { data: [] }
  }
];

export default async function ActivitiesMasonry() {
  const { articles: realArticles } = await fetchArticlesSafe();

  let articles = realArticles.length > 0 ? realArticles : MOCK_DATA;

  // --- TRICK ĐỂ TEST: Nhân bản dữ liệu lên nhiều lần ---
  // Nếu dữ liệu ít hơn 10 bài, ta nhân bản lên 10 lần để có 50 bài test nút "Xem thêm"
  if (articles.length < 10) {
    articles = [
      ...articles, ...articles, ...articles, ...articles, ...articles,
      ...articles, ...articles, ...articles, ...articles, ...articles
    ];
  }

  if (!articles.length) return <p className="text-center text-gray-500">Chưa có bài viết nào.</p>;

  // Truyền cục dữ liệu to đùng (50 bài) sang cho Client xử lý
  return <ActivitiesList initialArticles={articles} />;
}