import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * @references
 * - https://ogp.me
 * - https://ahrefs.com/blog/seo-meta-tags
 */

type Props = {
  title: string;
  metaTags?: any[];
};

type MetaTag = {
  name: string;
  content: string;
};

export default function SEOMeta({ title, metaTags = [] }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map(({ name, content }: MetaTag) => (
        <meta name={name} content={content} />
      ))}
    </Helmet>
  );
}
