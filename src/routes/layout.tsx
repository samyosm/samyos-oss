import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/Footer";
import { Header } from "~/components/header/Header";

export default component$(() => {

  const items = [
    // {
    //   label: 'History',
    //   href: '/history',
    // },
    //
    {
      label: 'Lessons',
      href: '/lessons',
    },
    {
      label: 'Contribute',
      href: '/contribute',
    },
    // {
    //   label: 'Software',
    //   href: '/software',
    // },
  ]

  return (
    <div class='flex flex-col min-h-screen'>
      <Header items={items} >
        <Link href='/contribute' class='button'>Contribute</Link>
      </Header>
      <main class='h-full flex-1'>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
