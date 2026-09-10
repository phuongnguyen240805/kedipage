export function formatTimeAgo(dateString: string | undefined | null) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Vừa xong';
  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) return `${minutes} phút trước`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} ngày trước`;
  
  return date.toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function getImagesFromArticle(article: any): string[] {
  const imgs: string[] = [];
  
  // 1. Lấy từ field images chính (nếu có)
  if (Array.isArray(article.images?.data)) {
    article.images.data.forEach((img: any) => {
      const url = img.attributes?.url || img.url;
      if (url) imgs.push(url);
    });
  } 
  
  // 2. Quét trong content_json
  if (Array.isArray(article.content_json)) {
     article.content_json.forEach((block: any) => {
        if (block.type === 'image' && block.url) {
            imgs.push(block.url);
        }
        // Một số cấu trúc Strapi lồng ảnh trong mảng images của block
        if (block.images && Array.isArray(block.images)) {
             block.images.forEach((u: string) => imgs.push(u));
        }
     });
  }

  // Fallback ảnh rỗng để test layout (Xóa khi chạy thật)
  // if (imgs.length === 0) return ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x800'];

  return imgs;
}