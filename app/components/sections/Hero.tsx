import React from "react";
import Button from "../Button";
import { arrowRight } from "@/public/assets/icons";

const Hero = () => {
  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ">
        <p>Our Summer Collections</p>
        <h1>
          <span>The new Arrriaval</span>
          <br />
          <span>Nike </span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
