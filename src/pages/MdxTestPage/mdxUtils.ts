import { compile } from '@mdx-js/mdx';

export async function compileMdx(mdxContent) {
    const compiled = await compile(mdxContent);
    return String(compiled);
}
