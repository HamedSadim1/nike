import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { SectionLayout } from "../ui";

const Nav = () => {
  return (
    <header className="absolute z-10 w-full px-8 py-8 sm:px-16">
      <SectionLayout as="nav" className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="headerLogo"
            className="m-0 h-[29px] w-[129px]"
          />
        </Link>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-montserrat text-slate-gray text-lg leading-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </SectionLayout>
    </header>
  );
};

export default Nav;
