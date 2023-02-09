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
          {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_kU6c7JDFKn.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></lottie-player> */}
        </section>
      </main>
    </>
  );
});
