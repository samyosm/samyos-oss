import { Stepper } from "@/components/stepper/Stepper";
import { notFound, permanentRedirect } from "next/navigation";
import { allContributes } from "contentlayer/generated";
import { NextButton, PrevButton } from "./buttons";
import { items } from "./items";

export const generateStaticParams = async () =>
  allContributes.map((post) => ({
    slug: post._raw.sourceFileName.slice(0, -3),
  }));

export const generateMetadata = (
  { params }: { params: { slug: string } },
) => {
  const post = allContributes.find((t) =>
    t._raw.sourceFileName.slice(0, -3) === params.slug
  );

  if (!post) {
    return notFound();
  }

  return { title: post.title };
};

export default function Page({ params }: { params: { slug: string } }) {
  const current = parseInt(params.slug);
  if (isNaN(current) || current >= items.length || current < 0) {
    permanentRedirect("/contribute/0");
  }

  const post = allContributes.find((t) =>
    t._raw.sourceFileName.slice(0, -3) === params.slug
  );

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto space-y-32">
      <div className="flex gap-16">
        <aside className="sticky top-32 w-full max-w-xs rounded-lg overflow-hidden shadow-md ring-1 ring-inset ring-neutral-300 h-min">
          <p className="text-lg text-white bg-neutral-900 p-5">Progress</p>
          <Stepper items={items} current={current} />
          <div className="flex p-5 gap-2 pt-0">
            <PrevButton current={current} />
            <NextButton current={current} />
          </div>
        </aside>

        <div className="flex flex-col gap-16">
          <article
            className="px-4 md:px-0 w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
          <div>
            <NextButton current={current} />
          </div>
        </div>
      </div>
    </div>
  );
}
