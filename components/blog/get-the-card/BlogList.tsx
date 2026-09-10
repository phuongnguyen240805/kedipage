// components/BlogList.tsx
import {
  fetchArticles,
  getArticleContent,
  StrapiArticle,
} from '@/lib/strapiApi';
import Link from 'next/link';
import { Suspense } from 'react';

interface BlogListProps {
  page?: number;
  perPage?: number;
  showTitle?: boolean;
  basePath?: string;
}

function Skeleton() {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-100 rounded"></div>
        ))}
      </div>
    </div>
  );
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default async function BlogList({
  page = 1,
  perPage = 20,
  showTitle = true,
  basePath = '/blog',
}: BlogListProps) {
  try {
    console.log('🔍 BlogList: Fetching articles...');
    const { articles: allArticles } = await fetchArticles();
    console.log('📦 BlogList: Total articles:', allArticles.length);

    const validArticles = allArticles
      .filter((article: StrapiArticle) => {
        const { content } = getArticleContent(article);
        const hasRealContent =
          content &&
          content.trim() !== '' &&
          content !==
            'Bài viết đang được cập nhật nội dung. Vui lòng quay lại sau!' &&
          content !== 'Chưa có nội dung chi tiết.';
        const hasDate = article.publishedAt || article.createdAt;
        return hasDate && hasRealContent;
      })
      .sort((a, b) => {
        const dateA = Date.parse(a.publishedAt ?? a.createdAt ?? '') || 0;
        const dateB = Date.parse(b.publishedAt ?? b.createdAt ?? '') || 0;
        return dateB - dateA;
      })
      .map((article: StrapiArticle) => {
        const { title, content } = getArticleContent(article);
        return {
          id: article.id,
          documentId: article.documentId,
          title,
          slug: article.documentId || article.slug || generateSlug(title), // Ưu tiên documentId hoặc slug
          publishedAt: article.publishedAt || article.createdAt,
          excerpt: content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          contentLength: content.length,
        };
      });

    console.log(
      '✅ BlogList: Valid articles after filtering:',
      validArticles.length
    );

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = validArticles.slice(startIndex, endIndex);
    const hasNextPage = endIndex < validArticles.length;

    return (
      <Suspense fallback={<Skeleton />}>
        <div className="p-8 max-w-4xl mx-auto">
          {showTitle && (
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Bài viết</h1>
              <p className="text-gray-600">
                Hiển thị {paginatedPosts.length} trên tổng{' '}
                {validArticles.length} bài viết
                {page > 1 && ` (Trang ${page})`}
              </p>
            </div>
          )}
          <div className="space-y-6 mb-8">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <Link
                    href={`${basePath}/${post.slug}`}
                    className="block group"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          📅{' '}
                          {new Date(post.publishedAt ?? 0).toLocaleDateString(
                            'vi-VN',
                            {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          📝 {post.contentLength} ký tự
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          ID: {post.id}
                        </span>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          Đọc tiếp →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {page > 1
                    ? 'Không có bài viết nào ở trang này'
                    : 'Chưa có bài viết nào'}
                </h3>
                <p className="text-gray-600">
                  {page > 1
                    ? 'Vui lòng quay lại trang trước đó.'
                    : 'Hãy quay lại sau để xem cập nhật mới nhất!'}
                </p>
                {page > 1 && (
                  <Link
                    href={`${basePath}?page=${page - 1}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ← Quay lại trang {page - 1}
                  </Link>
                )}
              </div>
            )}
          </div>
          {(hasNextPage || page > 1) && (
            <div className="mt-8 flex items-center justify-between">
              {page > 1 && (
                <Link
                  href={`${basePath}?page=${page - 1}`}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  ← Trang trước
                </Link>
              )}
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-600">
                  Trang {page} / {Math.ceil(validArticles.length / perPage)}
                </span>
              </div>
              {hasNextPage && (
                <Link
                  href={`${basePath}?page=${page + 1}`}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Trang tiếp →
                </Link>
              )}
            </div>
          )}
        </div>
      </Suspense>
    );
  } catch (error) {
    console.error('❌ Error fetching articles in BlogList:', error);
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Bài viết</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="mb-4">
            <svg
              className="w-12 h-12 text-red-400 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Lỗi tải dữ liệu
          </h3>
          <p className="text-red-700 mb-4">
            Không thể tải danh sách bài viết. Vui lòng thử lại sau.
          </p>
        </div>
      </div>
    );
  }
}

export const revalidate = 300;
