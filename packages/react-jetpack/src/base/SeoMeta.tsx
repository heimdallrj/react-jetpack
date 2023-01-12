import React from 'react';
import { Helmet } from 'react-helmet-async';

type MetaTag = {
  name: string;
  content: string;
};

type Props = {
  title: string;
  metaTags?: MetaTag[];
};

export default function SeoMeta({ title, metaTags = [] }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      {metaTags.map(({ name, content }: MetaTag) => (
        <meta name={name} content={content} />
      ))}
    </Helmet>
  );
}
