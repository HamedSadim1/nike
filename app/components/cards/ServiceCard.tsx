import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  imgURL: StaticImageData;
  label: string;
  subtext: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgURL,
  label,
  subtext,
}) => {
  return (
    <div className="shadow-3xl w-full flex-1 rounded-[20px] px-10 py-16 sm:w-[350px] sm:min-w-[350px]">
      <div className="bg-coral-red flex size-11 items-center justify-center rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-palanquin mt-5 text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="font-montserrat text-slate-gray mt-3 text-lg leading-normal break-words">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
