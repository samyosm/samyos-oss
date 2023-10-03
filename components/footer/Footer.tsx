import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-5 mt-16 flex justify-between">
      <p>© {new Date().getFullYear()} Copyright</p>
      <Link href="/read/policy">Privacy Policy</Link>
    </footer>
  );
};
