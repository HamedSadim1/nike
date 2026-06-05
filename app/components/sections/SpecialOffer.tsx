import { offer } from "@/assets/images";
import React from "react";
import { Button, SectionHeading, SectionLayout } from "../ui";
import { arrowRight } from "@/assets/icons";
import Image from "next/image";
import { specialOfferContent } from "@/constants";

const SpecialOffer = () => {
  return (
    <SectionLayout className="flex items-center justify-between gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <Image
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <SectionHeading
          titleHighlight={specialOfferContent.titleHighlight}
          titleSuffix={specialOfferContent.titleSuffix}
        />
        <p className="font-montserrat text-slate-gray mt-4 text-lg leading-7">
          {specialOfferContent.description1}
        </p>
        <p className="font-montserrat text-slate-gray mt-6 text-lg leading-7">
          {specialOfferContent.description2}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default SpecialOffer;
