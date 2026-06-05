import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./components/sections";

export default function Home() {
  return (
    <main className="relative ">
      <Nav />
      <section className='wide:pr-16 pb-12 sm:pb-24 xl:pl-16'>
        <Hero />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <PopularProducts />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <SuperQuality />
      </section>
      <section className="px-8 py-10 sm:px-16">
        <Services />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue px-8 py-12 sm:px-16 sm:py-24">
        <CustomerReviews />
      </section>
      <section className="w-full px-8 py-16 sm:px-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="bg-black px-8 py-12 pb-8 sm:px-16 sm:py-24">
        <Footer />
      </section>
    </main>
  );
}
