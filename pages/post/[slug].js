import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function Post(post) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <h4>{post.title}</h4>
        <div>{post.date}</div>
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
