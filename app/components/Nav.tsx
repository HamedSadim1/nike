import React from "react";
import { headerLogo } from "@/public/assets/images";
import { hamburger } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt="headerLogo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden "></ul>
      </nav>
    </header>
  );
};

export default Nav;
