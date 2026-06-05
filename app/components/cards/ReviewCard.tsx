import Image, { StaticImageData } from "next/image";
import { StarRating } from "../ui";

interface Props {
  imgURL: StaticImageData;
  feedback: string;
  rating: number;
  customerName: string;
}

const ReviewCard = ({ customerName, feedback, imgURL, rating }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imgURL}
        alt="customer"
        width={120}
        height={120}
        className="size-[120px] h-auto! w-auto! rounded-full object-cover"
      />
      <p className="font-montserrat text-slate-gray mt-6 max-w-sm text-center text-lg leading-7">{feedback}</p>
      <StarRating rating={rating} justifyCenter className="mt-3" />
      <h3 className="font-palanquin mt-1 text-center text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
