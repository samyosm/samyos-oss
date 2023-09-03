import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class='p-5 mt-32'>
      <p>© {new Date().getFullYear()} Copyright</p>
    </footer>
  )
})
