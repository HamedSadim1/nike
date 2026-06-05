import React from "react";
import Button from "../Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="mx-auto flex max-w-[1440px] items-center justify-between gap-10 max-lg:flex-col"
    >
      <h3 className="font-palanquin text-4xl leading-[68px] font-bold lg:max-w-md ">
        Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="sm:border-slate-gray flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border lg:max-w-[40%]">
        <input type="text" placeholder="subscribe@nike.com" className="text-slate-gray border-slate-gray w-full rounded-full border p-5 text-base leading-normal outline-none sm:w-auto sm:flex-1 sm:rounded-none sm:border-none sm:p-0 sm:pl-5" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
