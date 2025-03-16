import { getMdxContent } from '@/lib/mdxUtils';
import fs from 'fs';
import path from 'path';
import { PageProps } from '@/.next/types/app/page';

// Generate the list of slugs dynamically
export async function generateStaticParams() {
    const contentDirectory = path.join(process.cwd(), 'content');
    const filenames = fs.readdirSync(contentDirectory);

    // Filter MDX files and generate paths for each slug
    const slugs = filenames
        .filter((filename) => filename.endsWith('.mdx')) // Only MDX files
        .map((filename) => ({ slug: filename.replace(/\.mdx$/, '') })); // Remove .mdx extension to get the slug

    return slugs;
}

// Your dynamic page component
export default async function Page(pageProps: PageProps) {
    const { slug } = await pageProps.params;
    const { content } = await getMdxContent(slug);
    return content;
}
