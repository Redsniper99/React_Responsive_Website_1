import React from "react";
import styles from "../styles";
import { footerLinks, socialMedia } from "../constants";
import { logo6 } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-indigo-900 p-2`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo6}
          alt="logo"
          className="w-[50px] h-[50px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Together we make a better future.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-warp md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[142px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <br />
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © 2021 All rights reserved
      </p>
    </div>
  </section>
);

export default Footer;
