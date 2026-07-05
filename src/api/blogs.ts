import { apiFetch } from './client';
import { BLOG_POSTS } from '../data/siteData';

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const data = await apiFetch<BlogPost[]>('/blog');
    return data;
  } catch {
    // Fall back to static data if API is unreachable
    return BLOG_POSTS as BlogPost[];
  }
}
