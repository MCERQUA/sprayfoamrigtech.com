import fs from "fs";
import path from "path";
import readingTime from "reading-time";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Troubleshooting" | "Maintenance" | "Equipment" | "Job Quality";
  image: string;
}

export const POSTS: PostMeta[] = [
  {
    slug: "diagnosing-off-ratio-spray-foam-field-guide",
    title: "Diagnosing Off-Ratio Spray Foam: A Field Guide",
    description:
      "Off-ratio foam has real, findable causes — here's how to diagnose it in the field before it becomes a bigger problem.",
    date: "2026-07-14",
    category: "Troubleshooting",
    image: "/images/rig-equipment-dials-gauges.jpg",
  },
  {
    slug: "how-often-service-spray-foam-rig",
    title: "How Often Should You Service Your Spray Foam Rig?",
    description:
      "A practical maintenance schedule for the equipment that determines whether a job cures right.",
    date: "2026-07-21",
    category: "Maintenance",
    image: "/images/technician-servicing-rig.jpg",
  },
  {
    slug: "proportioner-basics-what-contractors-should-know",
    title: "Proportioner Basics: What Every Spray Foam Contractor Should Know",
    description:
      "The core piece of rig equipment, explained plainly — what it does and why it's the heart of a consistent job.",
    date: "2026-07-28",
    category: "Equipment",
    image: "/images/proportioner-control-panel-closeup.jpg",
  },
  {
    slug: "why-equipment-quality-shows-up-in-the-job",
    title: "Why Equipment Quality Shows Up in the Finished Job",
    description:
      "The direct line from rig maintenance to cell structure, adhesion, and cure quality — and why it's not abstract.",
    date: "2026-08-04",
    category: "Job Quality",
    image: "/images/spray-foam-application-consistent.jpg",
  },
];

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getReadTime(slug: string): string {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const content = fs.readFileSync(filePath, "utf8");
    return readingTime(content).text;
  } catch {
    return "5 min read";
  }
}
