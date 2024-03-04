import React from "react";
import { headerLogo } from "@/public/assets/images";
import { hamburger } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt="headerLogo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="hidden max-lg:block"> */}
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
          {/* TODO: handle click */}
          {/* {navLinks.map((link) => (
            <div key={link.label} className=" flex flex-col">
              <Link
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </Link>
            </div>
          ))} */}
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Nav;
