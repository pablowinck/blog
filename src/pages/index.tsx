import { PostsData } from "./api/posts";

// export type PostsData = { topic: string, post: string }[]
export default function Home({ posts }: { posts: PostsData }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.topic + "-" + post.post}>
          <a href={`/${post.topic}-${post.post}`}>
            <p>{post.topic}</p>
            <p>{post.post}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await import("./api/posts");
  const posts: PostsData = await res.getPostsData();
  return {
    props: { posts },
  };
}
