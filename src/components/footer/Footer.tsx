import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer class="p-5 mt-16 flex justify-between">
      <p>© {new Date().getFullYear()} Copyright</p>
      <Link href="/read/policy">Privacy Policy</Link>
    </footer>
  );
});
