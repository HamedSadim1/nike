"use client";
import Image, { StaticImageData } from "next/image";

interface Image {
  bigShoe: StaticImageData;
  thumbnail: StaticImageData;
}
interface Props {
  imgURL: Image;
  changeBigShoeImage: (img: StaticImageData) => void;
  bigShoeImg: StaticImageData;
}
const ShoeCard = ({ changeBigShoeImage, bigShoeImg, imgURL }: Props) => {
  const handleClick = () => {
    if (bigShoeImg === imgURL.bigShoe) return;
    changeBigShoeImage(imgURL.bigShoe);
  };
  return (
    <div
    className={`border-2 rounded-xl ${
      bigShoeImg === imgURL.bigShoe
        ? "border-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
  >
     <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-coral-red'>
        <Image
          src={imgURL.thumbnail}
          alt="shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
