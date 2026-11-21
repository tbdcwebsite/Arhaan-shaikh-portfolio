import { BLOG_CATEGORIES, BlogCategory } from "@/data/categories";
import { BLOGS, Blog } from "@/data/blogs";

/**
 * Retrieve all blog categories.
 */
export function getAllCategories(): BlogCategory[] {
  return BLOG_CATEGORIES;
}

/**
 * Retrieve a specific category by its URL slug.
 */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug);
}

/**
 * Retrieve all blog articles across all categories, sorted latest first.
 */
export function getAllBlogs(): Blog[] {
  return [...BLOGS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Retrieve all blogs belonging to a specific category.
 */
export function getBlogsByCategory(categorySlug: string): Blog[] {
  return BLOGS.filter((b) => b.category === categorySlug).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Retrieve a specific blog by its category slug and article slug.
 */
export function getBlogBySlug(
  categorySlug: string,
  slug: string
): Blog | undefined {
  return BLOGS.find((b) => b.category === categorySlug && b.slug === slug);
}

/**
 * Retrieve related blogs for an article:
 * 1. Prioritize explicit `relatedBlogs` IDs.
 * 2. Fall back to articles from OTHER categories to encourage broad topic discovery.
 * 3. Never include the current blog.
 * 4. Limit to requested count (default: 3).
 */
export function getRelatedBlogs(currentBlog: Blog, limit = 3): Blog[] {
  const result: Blog[] = [];
  const seenIds = new Set<string>([currentBlog.id]);

  // 1. Explicit related IDs
  if (currentBlog.relatedBlogs && currentBlog.relatedBlogs.length > 0) {
    for (const id of currentBlog.relatedBlogs) {
      const found = BLOGS.find((b) => b.id === id);
      if (found && !seenIds.has(found.id)) {
        seenIds.add(found.id);
        result.push(found);
        if (result.length >= limit) return result;
      }
    }
  }

  // 2. Fallback to articles from OTHER categories
  const otherCategoryBlogs = BLOGS.filter(
    (b) => b.category !== currentBlog.category && !seenIds.has(b.id)
  );
  for (const b of otherCategoryBlogs) {
    seenIds.add(b.id);
    result.push(b);
    if (result.length >= limit) return result;
  }

  // 3. Fallback to any remaining blogs
  for (const b of BLOGS) {
    if (!seenIds.has(b.id)) {
      seenIds.add(b.id);
      result.push(b);
      if (result.length >= limit) return result;
    }
  }

  return result.slice(0, limit);
}

/**
 * Format ISO date string into human-readable editorial date.
 * e.g. "2026-10-28" -> "October 28, 2026"
 */
export function formatDate(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(d);
  } catch {
    return isoDate;
  }
}

/**
 * Calculate estimated reading time for a blog based on content word count.
 * Approx 200 words per minute.
 */
export function readingTime(blog: Blog): string {
  let wordCount = 0;

  if (blog.intro) {
    wordCount += blog.intro.trim().split(/\s+/).length;
  }

  if (blog.content) {
    for (const block of blog.content) {
      if (block.type === "paragraph" || block.type === "heading2" || block.type === "heading3") {
        wordCount += block.text.trim().split(/\s+/).length;
      } else if (block.type === "quote") {
        wordCount += block.text.trim().split(/\s+/).length;
      } else if (block.type === "list") {
        wordCount += block.items.join(" ").trim().split(/\s+/).length;
      }
    }
  }

  const minutes = Math.max(2, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

