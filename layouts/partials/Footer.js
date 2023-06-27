import Social from "../components/Social";
import config from "./../../config/config.json";
import menu from "./../../config/menu.json";
import social from "./../../config/social.json";
import { markdownify } from "./../../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {MdEmail, MdLocationPin, MdOutlinePhone} from "react-icons/md"

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section darkBlue pb-0">
      <div className="relative">
          <Image src="/images/footer_pattern.png" className="absolute right-0 hidden md:block" width={300} height={250} alt="" />
          <Image src="/images/footer_pattern2.png" className="absolute top-[25vw] hidden md:block" width={300} height={250} alt="" />
      </div>
      <div className="container">
        {/* footer menu */}
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center mb-16">
            <Image src="/images/logo_whitee.png" width={250} height={250} className=" w-28 md:w-[250px] " alt="EABC Logo" />
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 relative w-full">
            {footer.map((col) => {
              return (
                <div className="mb-12 sm:col-6 lg:col-3 text-white" key={col.name}>
                  {markdownify(col.name, "h2", "h4 text-white underline underline-offset-[50%] decoration-1 decoration-[#df0303]")}
                  <ul className="mt-6">
                    {col?.menu.map((item, index) => (
                      <li className="mb-1" key={item.text}>
                        {item?.icon ?
                          <div className="flex content-center">
                            <Image src={item.iconSvg} width={15} height={15} alt="icons" />
                            <p className="ml-2">{item.text}</p>
                          </div>
                        :
                          <Link href={item.url} rel="">
                            {item.text}
                          </Link>
                        }
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            {/* <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")} */}
            <Social source={social} className="social-icons mb-8 flex justify-center" color="#df0303" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          <p className="text-sm text-center">© {currentYear} EABC INC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
