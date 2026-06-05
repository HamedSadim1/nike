import React from "react";
import { Button, SectionHeading, SectionLayout } from "../ui";
import { subscribeContent } from "@/constants";

const Subscribe = () => {
  return (
    <SectionLayout
      id="contact-us"
      className="flex items-center justify-between gap-10 max-lg:flex-col"
    >
      <SectionHeading
        titlePrefix={subscribeContent.titlePrefix}
        titleHighlight={subscribeContent.titleHighlight}
        titleSuffix={subscribeContent.titleSuffix}
        as="h3"
        className="lg:max-w-md leading-[68px]"
      />
      <div className="sm:border-slate-gray flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border lg:max-w-[40%]">
        <input type="text" placeholder={subscribeContent.placeholder} className="text-slate-gray border-slate-gray w-full rounded-full border p-5 text-base leading-normal outline-none sm:w-auto sm:flex-1 sm:rounded-none sm:border-none sm:p-0 sm:pl-5" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Subscribe;
