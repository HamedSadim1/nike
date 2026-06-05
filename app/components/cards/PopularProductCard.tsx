import Image, { StaticImageData } from "next/image";
import { star } from "@/assets/icons";

interface Product {
  name: string;
  image: StaticImageData;
  price: string;
}
interface Props {
  product: Product;
}

const PopularProductCard = ({ product: { image, name, price } }: Props) => {
  return (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
      <Image src={image} alt={name} width={280} height={280} className="size-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <Image src={star} alt="star" width={24} height={24} className="h-auto w-auto" />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          (5.6)
        </p>
      </div>
      <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">
        {name}
      </h3>
      <p className="font-montserrat text-coral-red mt-2 text-2xl leading-normal font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
