import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostSlugs, getPostData } from '../../lib/posts';
import HeadObject from '../../components/head';
import Footer from '../../components/foot';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const mdxSource = await serialize(postData.content);
  
  return {
    props: {
      ...postData,
      mdxSource,
    },
  };
}

export default function Post({ title, date, tags, mdxSource }) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeadObject>
        <title>{title} | Andrea Yang</title>
      </HeadObject>
      
      <div className="flex flex-col items-center px-6 py-12 flex-1">
        <div className="max-w-3xl w-full">
          <Link 
            href="/blog"
            className="text-dark-green hover:underline mb-8 inline-block"
          >
            ← Back to blog
          </Link>
          
          <article>
            <h1 className="text-black font-bold text-4xl sm:text-5xl mb-4">
              {title}
            </h1>
            
            <time className="text-gray-600 text-sm mb-4 block">
              {date}
            </time>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="prose prose-lg max-w-none text-black leading-relaxed">
              <style jsx global>{`
                .prose h1 {
                  font-size: 2rem;
                  font-weight: bold;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: black;
                }
                .prose h2 {
                  font-size: 1.5rem;
                  font-weight: bold;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                  color: black;
                }
                .prose h3 {
                  font-size: 1.25rem;
                  font-weight: bold;
                  margin-top: 1.25rem;
                  margin-bottom: 0.5rem;
                  color: black;
                }
                .prose p {
                  margin-bottom: 1rem;
                  line-height: 1.75;
                  color: black;
                }
                .prose a {
                  color: var(--dark-green, #2d5016);
                  text-decoration: underline;
                  text-underline-offset: 4px;
                }
                .prose a:hover {
                  text-decoration-thickness: 2px;
                }
                .prose ul {
                  list-style-type: disc;
                  padding-left: 1.5rem;
                  margin: 1rem 0;
                }
                .prose ol {
                  list-style-type: decimal;
                  padding-left: 1.5rem;
                  margin: 1rem 0;
                }

                .prose li {
                  margin: 0.5rem 0;
                }

                .prose ul ul,
                .prose ul ol,
                .prose ol ul,
                .prose ol ol {
                  margin-top: 0.5rem;
                  padding-left: 1.5rem;
                }
                .prose code {
                  background-color: #f3f4f6;
                  padding: 0.125rem 0.25rem;
                  border-radius: 0.25rem;
                  font-size: 0.875em;
                  color: black;
                }
                .prose pre {
                  background-color: #1f2937;
                  color: #f3f4f6;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                }
                .prose pre code {
                  background-color: transparent;
                  padding: 0;
                  color: inherit;
                }
                .prose blockquote {
                  border-left: 4px solid var(--dark-green, #2d5016);
                  padding-left: 1rem;
                  font-style: italic;
                  margin: 1.5rem 0;
                  color: #4b5563;
                }
                .prose img {
                  border-radius: 0.5rem;
                  margin-top: 1.5rem;
                  margin-bottom: 1.5rem;
                }
              `}</style>
              <MDXRemote {...mdxSource} />
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}