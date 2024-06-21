"use client";
import Image, { StaticImageData } from "next/image";

interface IImageURL {
  bigShoe: StaticImageData;
  thumbnail: StaticImageData;
}
interface Props {
  imgURL: IImageURL;
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
    className={`rounded-xl border-2 ${
      bigShoeImg === imgURL.bigShoe
        ? "border-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
  >
     <div className='flex items-center justify-center rounded-xl bg-coral-red bg-card bg-cover bg-center max-sm:p-4 sm:size-40'>
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
