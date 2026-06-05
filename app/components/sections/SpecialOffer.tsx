import { offer } from "@/assets/images";
import React from "react";
import Button from "../Button";
import { arrowRight } from "@/assets/icons";
import Image from "next/image";

const SpecialOffer = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] items-center justify-between gap-10 max-xl:flex-col-reverse">
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
        <h2 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="font-montserrat text-slate-gray mt-4 text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="font-montserrat text-slate-gray mt-6 text-lg leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
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
    </section>
  );
};

export default SpecialOffer;
