import Image, { StaticImageData } from "next/image";
import { StarRating } from "../ui";

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
      <StarRating rating={5.6} className="mt-8" />
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
