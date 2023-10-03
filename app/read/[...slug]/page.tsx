import { TableOfContent } from "@/components/toc/TableOfContent";
import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allDocuments.map((post) => ({ slug: [post.type, post._raw.flattenedPath] }));

export const generateMetadata = (
  { params }: { params: { slug: string[] } },
) => {
  const post = allDocuments.find((post) =>
    post._raw.flattenedPath === params.slug.join("/")
  );
  if (!post) {
    return notFound();
  }
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const post = allDocuments.find((post) =>
    post._raw.flattenedPath === params.slug.join("/")
  );
  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto flex justify-between">
      <TableOfContent headings={post.headings} />
      <article
        className="px-4 md:px-0 w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
};

export default PostLayout;
