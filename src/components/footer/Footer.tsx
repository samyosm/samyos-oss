import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class='p-5'>
      <p>© {new Date().getFullYear()} Samy Rahmani</p>
    </footer>
  )
})
