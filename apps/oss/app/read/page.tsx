import Link from 'next/link';

import { allDocuments, DocumentTypes } from '@samyos/oss/contentlayer';
import { Metadata } from 'next';
import { Section } from '../../components/section/Section';

export const metadata: Metadata = {
  title: 'Read — Osmium OSS',
};

const getSections = () => {
  const map = new Map<string, DocumentTypes[]>();

  allDocuments.forEach((f) => {
    if (!f.index) {
      return;
    }

    if (!map.has(f.type)) {
      map.set(f.type, [f]);
    } else {
      map.get(f.type)!.push(f);
    }
  });

  return Array.from(map, ([name, documents]) => ({ name, documents }));
};

const ArticleLink = (props: DocumentTypes) => {
  return (
    <Link
      className="p-7 rounded-2xl border-4 border-neutral-200 shadow group hover:border-sky-600"
      href={props.url}
    >
      <article className="space-y-6 h-full">
        <h2 className="text-xl md:text-xl text-neutral-900 font-medium leading-relaxed group-hover:text-sky-600 line-clamp-2">
          {props.title}
        </h2>
        <p className="group-hover:text-sky-600 text-xl leading-loose line-clamp-3">
          {props.description}
        </p>
      </article>
    </Link>
  );
};

export default function Page() {
  return (
    <div className="space-y-16 mx-8 md:mx-0">
      {getSections().map((doc) => (
        <Section
          key={doc.name}
          title={doc.name}
          class="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {doc.documents.map((post) => (
            <ArticleLink key={post.title} {...(post as DocumentTypes)} />
          ))}
        </Section>
      ))}
    </div>
  );
}
