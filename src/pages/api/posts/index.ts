// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export type PostsData = { topic: string; post: string }[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsData>,
) {
  const posts = await getPostsData();
  res.status(200).json(posts);
}

export async function getPostsData(): Promise<PostsData> {
  const publicPostsFolder = path.join(process.cwd(), "posts");
  const topics = await fs.readdir(publicPostsFolder);
  const postsWithContent = [];
  for (const topic of topics) {
    for (const post of await fs.readdir(path.join(publicPostsFolder, topic))) {
      postsWithContent.push({ topic, post: post.replace(".md", "") });
    }
  }
  return postsWithContent;
}
