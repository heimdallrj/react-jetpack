/// <reference types="react" />
/**
 * @check
 * - https://ogp.me
 * - https://ahrefs.com/blog/seo-meta-tags
 */
type Props = {
    title: string;
    metaTags?: any[];
};
export default function SeoMeta({ title, metaTags }: Props): JSX.Element;
export {};
