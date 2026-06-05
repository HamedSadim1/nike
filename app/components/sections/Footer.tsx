import { copyrightSign } from "@/assets/icons";
import { footerLogo } from "@/assets/images";
import { footerLinks, socialMedia, footerContent } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SectionLayout } from "../ui";

const Footer = () => {
  return (
    <SectionLayout as="footer">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0 h-auto w-auto"
            />
          </Link>
          <p className="font-montserrat text-white-400 mt-6 text-base leading-7 sm:max-w-sm">
            {footerContent.description}
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div
                className="flex size-12 items-center justify-center rounded-full bg-white"
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat mb-6 text-2xl leading-normal font-medium text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="font-montserrat text-white-400 hover:text-slate-gray mt-3 text-base leading-normal"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white-400 mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="font-montserrat flex flex-1 cursor-pointer items-center justify-start gap-2">
          <Image
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>{footerContent.copyright}</p>
        </div>
        <p className="font-montserrat cursor-pointer">{footerContent.termsLabel}</p>
      </div>
    </SectionLayout>
  );
};

export default Footer;
