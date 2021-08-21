import Head from 'next/head';
import { format, parseISO } from 'date-fns';

import { blogPosts } from '../../lib/data';

export default function Post(post) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <h2 className="text-lg font-bold">{post.title}</h2>
        <div className="font-extralight text-sm text-gray-600 border-b-2 border-blue-50">
          {format(parseISO(post.date), 'MMMM do, yyyy')}
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((el) => el.slug == params.slug);
  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}
