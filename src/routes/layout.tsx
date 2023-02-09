import { component$, Slot } from '@builder.io/qwik';

import Header from '../components/header/header';
import HeroSection from '../components/hero-section/hero';

export default component$(() => {
  return (
    <>
      <main class='wrapper'>
        <Header />
        <HeroSection />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
