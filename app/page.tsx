import { Nav } from "./components/layout";
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
import { PageSection } from "./components/ui";

const sectionConfig = [
  {
    Component: Hero,
    className: "wide:pr-16 pb-12 sm:pb-24 xl:pl-16",
  },
  {
    Component: PopularProducts,
    className: "px-8 py-12 sm:px-16 sm:py-24",
  },
  {
    Component: SuperQuality,
    className: "px-8 py-12 sm:px-16 sm:py-24",
  },
  {
    Component: Services,
    className: "px-8 py-10 sm:px-16",
  },
  {
    Component: SpecialOffer,
    className: "px-8 py-12 sm:px-16 sm:py-24",
  },
  {
    Component: CustomerReviews,
    className: "bg-pale-blue px-8 py-12 sm:px-16 sm:py-24",
  },
  {
    Component: Subscribe,
    className: "w-full px-8 py-16 sm:px-16 sm:py-32",
  },
  {
    Component: Footer,
    className: "bg-black px-8 py-12 pb-8 sm:px-16 sm:py-24",
  },
] as const;

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      {sectionConfig.map(({ Component, className }, index) => (
        <PageSection key={index} className={className}>
          <Component />
        </PageSection>
      ))}
    </main>
  );
}
