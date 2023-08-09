import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostsData } from "./api/posts";
import TextContainer from "@/components/TextContainer";

export default function Post({ content }: { content: string }) {
  return (
    <TextContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </TextContainer>
  );
}

export async function getStaticPaths() {
  const res = await import("../pages/api/posts");

  const posts: PostsData = await res.getPostsData();
  const paths = posts.map((post) => ({
    params: { post: post.topic + "-" + post.post },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { post: string } }) {
  const [topic] = params.post.split("-");
  const [_, ...postParts] = params.post.split("-");
  const post = postParts.join("-");
  const { getContent } = await import(`../pages/api/posts/[...params]`);
  const content = await getContent(topic, post);
  return {
    props: {
      content,
    },
  };
}
