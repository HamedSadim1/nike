"use client";

import React, { useState } from "react";
import Button from "../Button";
import { arrowRight } from "@/assets/icons";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import { bigShoe1 } from "@/assets/images";
import ShoeCard from "../ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen w-full max-w-360 flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="relative flex w-full flex-col items-start justify-center pt-28  max-xl:px-8 xl:w-2/5">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer collections
        </p>

        <h1 className="font-palanquin mt-10 text-8xl font-bold max-sm:text-[72px] max-sm:leading-20.5">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 mb-14 text-lg leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary bg-hero relative flex flex-1 items-center justify-center bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <Image
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="relative z-10 object-contain"
          loading="eager"
        />

        <div className="absolute bottom-[-5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
