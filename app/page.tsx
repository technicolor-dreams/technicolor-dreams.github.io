import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function Home() {
  const contentDirectory = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(contentDirectory);

  const postSlugs = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace(/\.mdx$/, ''));

  return (
    <div>
      <h1>Welcome to My MDX Blog</h1>
      <ul>
        {postSlugs.map((slug) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
