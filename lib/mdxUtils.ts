import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

// Helper function to get all MDX file paths
export const getPostFilePaths = () => {
    const contentDirectory = path.join(process.cwd(), 'content');
    const filenames = fs.readdirSync(contentDirectory);
    return filenames.filter((filename) => filename.endsWith('.mdx'));
};

// Function to get metadata and serialized content of a specific MDX file
export const getMdxContent = async (slug: string) => {
    const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const res = fs.readFileSync(filePath, 'utf-8');
    const { content, frontmatter: metadata } = await compileMDX<{ title: string, description: string }>({
        source: res,
        options: { parseFrontmatter: true },
    });

    return {
        metadata,
        content,
    };
};
