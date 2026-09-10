import { fetchArticlesSafe } from './services/mona-api'; 
import ActivitiesList from './activities-list'; // Nhớ import file vừa tạo ở trên

// --- GIỮ NGUYÊN MOCK DATA CŨ CỦA BẠN Ở ĐÂY ---
const MOCK_DATA: any[] = [ 
 {
    id: 101,
    documentId: 'mock-1',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 phút trước
    content_json: [
      {
        author: 'MONA Media',
        title: 'Chào mừng năm mới 2026',
        content: '<p>Tết đến xuân về, MONA Media xin chúc tất cả quý khách hàng và đối tác một năm mới An Khang Thịnh Vượng, Vạn Sự Như Ý! Năm nay chúng tôi sẽ tập trung vào các giải pháp AI đột phá.</p>',
      }
    ],
    images: {
      data: [
        { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop' }
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
        { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' },
        { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop' }
      ]
    }
  },
  {
    id: 103,
    documentId: 'mock-3',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 ngày trước
    content_json: [
      {
        author: 'MONA Media',
        title: 'Teambuilding Đà Nẵng',
        content: '<p>Chuyến đi Đà Nẵng 3 ngày 2 đêm đã kết thúc nhưng dư âm vẫn còn mãi. Cảm ơn ban tổ chức đã tạo ra một sân chơi tuyệt vời để anh em gắn kết. Cùng xem lại những khoảnh khắc "lầy lội" nhất nhé!</p>',
      }
    ],
    images: {
      data: [
        { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop' },
        { url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop' },
        { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop' },
        { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop' }
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
        { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop' }
      ]
    }
  },
  {
    id: 105,
    documentId: 'mock-5',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 ngày trước
    content_json: [
      {
        author: 'Tuyển dụng MONA',
        title: 'Thông báo tuyển dụng',
        content: '<p>🔥 GÓC TÌM ĐỒNG ĐỘI 🔥<br>MONA đang tìm kiếm 05 bạn Frontend Developer (React/Next.js) gia nhập biệt đội siêu anh hùng. Môi trường trẻ trung, trà sữa miễn phí mỗi ngày!</p>',
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