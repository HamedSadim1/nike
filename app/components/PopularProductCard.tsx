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
      <Image src={image} alt={name} className="size-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <Image src={star} alt="star" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (5.6)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
