import Link from "next/link";
import { items } from "./items";
import cn from "clsx";

export const PrevButton = ({ current }: { current: number }) => (
  <Link
    className="w-full text-center ring-inset ring-1 ring-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-5 py-2 rounded-md"
    href={`/contribute/${Math.max(0, current - 1)}`}
  >
    Prev
  </Link>
);

export const NextButton = ({ current }: { current: number }) => {
  const last = current === items.length - 1;
  return (
    <Link
      className={cn(
        "w-full text-center bg-primary-500 text-white px-5 py-2 rounded-md",
        { "!bg-neutral-500 cursor-default": last },
      )}
      aria-disabled={last}
      href={`/contribute/${Math.min(current + 1, items.length - 1)}`}
    >
      Next
    </Link>
  );
};
