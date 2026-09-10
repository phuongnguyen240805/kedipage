// components/agency-card-props.tsx
import Link from 'next/link';
import Image from 'next/image';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
    url: string;
    avatar: string;
  };
  excerpt?: string;
}

interface AgencyCardPropsSectionProps {
  title?: string;
  posts: BlogPost[];
  className?: string;
}

export default function AgencyCardPropsSection({
  title,
  posts,
  className = '',
}: AgencyCardPropsSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.featuredImage.src}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-gray-600 text-sm">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              Không có bài viết nào.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
