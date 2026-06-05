import Image from "next/image";
import { star } from "@/assets/icons";

interface StarRatingProps {
  rating: number | string;
  justifyCenter?: boolean;
  className?: string;
}

const StarRating = ({ rating, justifyCenter, className = "" }: StarRatingProps) => {
  return (
    <div
      className={`flex gap-2.5 ${
        justifyCenter ? "items-center justify-center" : "justify-start"
      } ${className}`}
    >
      <Image
        src={star}
        alt="star"
        width={24}
        height={24}
        className="h-auto w-auto object-contain"
      />
      <p className="font-montserrat text-slate-gray text-xl leading-normal">
        ({rating})
      </p>
    </div>
  );
};

export default StarRating;
