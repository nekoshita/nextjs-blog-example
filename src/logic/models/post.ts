import path from "path";
import fs from "fs";
import matter, { GrayMatterFile, Input } from "gray-matter";
import { toDate, isAfter, parseISO } from "date-fns";

const contentsPath = path.join("documents", "contents");

interface GetOptions {
  limit?: number;
}

export function getPostAll(options: GetOptions = {}): Post[] {
  const posts = fs
    .readdirSync(contentsPath)
    .flatMap((year) => {
      const yearPath = path.join(contentsPath, year);
      return fs.readdirSync(yearPath).map((dirName) => {
        const filePath = path.join(yearPath, dirName, "blog.md");
        if (!fs.existsSync(filePath)) {
          return;
        }

        return fs.readFileSync(filePath);
      });
    })
    .filter((f) => !!f)
    .slice(0, options.limit)
    .map((f) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { orig, ...post } = matter(f);
      return post;
    })
    .sort((m1, m2) =>
      isAfter(toDate(parseISO(m1.data.date)), toDate(parseISO(m2.data.date)))
        ? 1
        : -1
    );

  return posts as Post[];
}

export function getPostDataAll(options?: GetOptions): PostData[] {
  return getPostAll(options).map((m) => m.data);
}

export function getPost(slug: string): Post {
  const posts = getPostAll();
  const i = posts.findIndex((m) => m.data.slug === slug);
  const post = posts[i];
  const prevPostData = posts[i - 1]?.data ?? null;
  const nextPostData = posts[i + 1]?.data ?? null;
  return { ...post, prevPostData, nextPostData };
}

export interface Post extends GrayMatterFile<Input> {
  data: PostData;
  orig: undefined;
  prevPostData: PostData | null;
  nextPostData: PostData | null;
}

export interface PostData {
  title: string;
  slug: string;
  date: string;
  thunmailUrl: string;
}
