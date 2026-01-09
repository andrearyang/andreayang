import HeadObject from '../components/head';
import Footer from '../components/foot';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeadObject>
        <title>Blog | Andrea Yang</title>
      </HeadObject>
      
      <div className="flex flex-col items-center px-6 py-12 flex-1">
        <div className="max-w-3xl w-full">
          <h1 className="text-black font-bold text-5xl sm:text-6xl mb-4">
            a bryophyte's log
          </h1>
          
          <p className="text-black text-lg mb-12 leading-relaxed">
            musings, thoughts, and explorations on ai/ml, biology, education, self-improvement, rationality, and advocacy. and honestly everything in between, too.
          </p>

          <div className="space-y-12">
            {allPostsData.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-black font-bold text-2xl sm:text-3xl mb-2 group-hover:text-dark-green transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <time className="text-gray-600 text-sm mb-3 block">
                  {post.date}
                </time>
                
                <p className="text-black text-base leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 text-dark-green font-medium hover:underline decoration-2 underline-offset-4"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}