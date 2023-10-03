import cn from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderItemProps {
  label: string;
  href: string;
}

export const HeaderItem = (props: HeaderItemProps) => {
  const location = usePathname();
  const active = location.startsWith(props.href + "/");
  return (
    <Link
      href={props.href}
      className={cn(
        "hover:text-neutral-800 hover:underline underline-offset-8 font-medium",
        active && "underline text-neutral-800",
      )}
    >
      {props.label}
    </Link>
  );
};
