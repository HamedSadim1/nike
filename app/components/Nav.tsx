import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
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
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
