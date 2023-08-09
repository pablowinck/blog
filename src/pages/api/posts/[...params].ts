import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

type Data = { content: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const params = req.query?.params as string[];
  const topic = params[0] as string;
  const post = params[1] as string;
  const content = await getContent(topic, post);
  res.status(200).json({ content });
}

export async function getContent(topic: string, post: string): Promise<string> {
  const url = path.join(process.cwd(), "posts", topic, post);
  const content = await fs.readFile(url.concat(".md"), "utf8");
  return content;
}
