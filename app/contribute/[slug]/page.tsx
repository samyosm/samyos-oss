import {Stepper} from "@/components/stepper/Stepper";
import {notFound, permanentRedirect} from "next/navigation";
import Link from "next/link";
import {allContributes} from "contentlayer/generated";

const items = allContributes.map(t => t.title);
export default function Page({params}: { params: { slug: string } }) {
  const current = parseInt(params.slug);
  if (isNaN(current) || current >= items.length || current < 0) {
    return permanentRedirect('/contribute/0');
  }

  const post = allContributes.find(t => t._raw.sourceFileName.slice(0, -3) === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto space-y-32">
      <div className="flex gap-16">
        <aside
          className="w-full max-w-xs rounded-lg overflow-hidden shadow-md ring-1 ring-inset ring-neutral-300">
          <p className="text-lg text-white bg-neutral-900 p-5">Progress</p>
          <Stepper items={items} current={current}/>
          <div className="flex p-2 gap-2">
            <Link
              className="w-full text-center ring-inset ring-1 ring-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-5 py-2 rounded-md"
              href={`/contribute/${current - 1}`}>Prev</Link>
            <Link className="w-full text-center bg-primary-500 text-white px-5 py-2 rounded-md"
                  href={`/contribute/${current + 1}`}>Next</Link>
          </div>
        </aside>

        <article
          className="px-4 md:px-0 w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose"
          dangerouslySetInnerHTML={{__html: post.body.html}}
        />
      </div>
    </div>
  );
}