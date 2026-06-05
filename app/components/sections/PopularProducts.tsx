import { products, popularProductsContent } from "@/constants";
import { PopularProductCard } from "../cards";
import { SectionHeading, SectionLayout } from "../ui";

export const PopularProducts = () => {
  return (
    <SectionLayout id="products" className="max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <SectionHeading
          titlePrefix={popularProductsContent.titlePrefix}
          titleHighlight={popularProductsContent.titleHighlight}
          titleSuffix={popularProductsContent.titleSuffix}
        />
        <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg ">
          {popularProductsContent.description}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1  gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            product={{ ...product, image: product.imgURL }}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default PopularProducts;
