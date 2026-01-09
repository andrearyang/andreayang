import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPostSlugs, getPostData } from 'lib/posts.js';
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
            
            <div className="flex flex-wrap gap-2 mb-8">
              {tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <MDXRemote {...mdxSource} />
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}