import React from "react";
import dit from "@/public/assets/menu-icons/dit.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" bg-slate-200">
      <div className=" container grid grid-cols-3 gap-5 justify-around py-10 ">
        {/* first colmun  */}
        <div className=" flex items-center  flex-col relative space-y-3">
          <Image
            src={dit}
            alt=""
            height={400}
            width={400}
            className="w-[280px] h-[105px] "
          />
          <p className="  text-xs text-slate-600 font-bold  ">
            {" "}
            Hospital Rd, Keranitola,Midnapore- 721101
          </p>
          <div className=" flex gap-4 py-1 ">
            <Link href={"#"}>
              <FaFacebook size={32} className="text-[#21429c]" />
            </Link>
            <Link href={"#"}>
              <FaTwitter size={32} className="text-[#008add]" />
            </Link>
            <Link href={"#"}>
              <FaInstagram size={32} className="text-[#c70079]" />
            </Link>
            <Link href={"#"}>
              <FaLinkedin size={32} className="text-[#0077b5]" />
            </Link>
          </div>
        </div>
        {/* second column  */}
        <div className=" flex  items-center flex-col gap-4 mt-8">
          <h2 className="text-lg text-slate-700 font-medium">About</h2>
          <div className=" flex flex-col justify-center space-y-4">
            <Link href={"/about"} className=" flex items-center gap-4">
              <IoIosArrowForward strokeWidth={2} />{" "}
              <span className="text-base font-normal">About Us</span>
            </Link>
            <Link href={"/contact"} className=" flex items-center gap-4">
              <IoIosArrowForward strokeWidth={2} />{" "}
              <span className="text-base font-normal">Contact Us</span>
            </Link>
            <Link href={"/stores"} className=" flex items-center gap-4">
              <IoIosArrowForward strokeWidth={2} />{" "}
              <span className="text-base font-normal">Stores</span>
            </Link>
          </div>
        </div>
        {/* third colmun  */}
        <div className="  flex items-center  flex-col gap-4 mt-8">
          <h2 className="text-lg text-slate-700 font-medium">Information</h2>
          <div className=" flex flex-col justify-center space-y-4">
            <Link href={"/brand-support"} className=" flex items-center gap-4">
              <IoIosArrowForward strokeWidth={2} />{" "}
              <span className="text-base font-normal">Brand Support</span>
            </Link>

            <Link href={"/privacy-policy"} className=" flex items-center gap-4">
              <IoIosArrowForward strokeWidth={2} />{" "}
              <span className="text-base font-normal">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
      <div className=" py-4 bg-slate-700 mt-10 ">
        <p className=" container text-white text-sm font-medium">
          Copyright &copy; 2025, DAS INFOTECH, an ISO 9001:2015 Certified
          Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
