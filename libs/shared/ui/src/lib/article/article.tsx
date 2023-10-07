import { Article as ArticleLd, WithContext } from 'schema-dts';

export interface ArticleProps {
  headline: string;
  description: string;
  author: string;
  dateModified: Date;
  datePublished: Date;
  image: string;
  body: string;
}

export const Article = ({
  headline,
  description,
  author,
  dateModified,
  datePublished,
  image,
  body,
}: ArticleProps) => {
  const jsonLd: WithContext<ArticleLd> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image,
    headline,
    description,
    articleBody: body,
    author: {
      '@type': 'Person',
      name: author,
    },
    dateModified: dateModified.toISOString(),
    datePublished: datePublished.toISOString(),
    dateCreated: datePublished.toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article
        className="w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
};

export default Article;
