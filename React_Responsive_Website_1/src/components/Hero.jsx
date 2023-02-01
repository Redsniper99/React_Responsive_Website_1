import React from "react";
import styles from "../styles";
import GetStarted from "./GetStarted";
import { hero } from "../assets";
// import Typed from "react-typed";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[80px] leading-[60px]">
          <span className="text-gradient">
           welcome
          </span>{" "}
          <span className="text-gradient">Transforming</span> Spaces,{" "}
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Creating</span>{" "}
        </h1>
        {/* <div className="ss:flex hidden md:mr-4 mr-0">
        <GetStarted />
      </div> */}
      </div>

      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[80px] leading-[60px]">
        Possibilities
      </h1>

      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-10">
        <p className={`${styles.paragraph} text-sm sm:max-w-[470px] `}>
          At BonCo, we offer professional construction services for residential
          and commercial projects. Our experienced team handles all aspects of
          the process, from planning to completion. We work closely with clients
          to exceed their expectations.
        </p>
      </div>
    </div>

    <div>
      <img
        src={hero}
        alt="hero"
        className=" w-[100%] h-[100%] relative z-[2]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
    </div>
  </section>
);

export default Hero;
