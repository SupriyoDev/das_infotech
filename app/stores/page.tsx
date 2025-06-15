import React from "react";
import k1 from "@/public/assets/stores/k1.jpeg";
import k2 from "@/public/assets/stores/k2.jpeg";
import k3 from "@/public/assets/stores/k3.jpeg";
import k4 from "@/public/assets/stores/k4.jpeg";
import a1 from "@/public/assets/stores/a1.jpeg";
import a2 from "@/public/assets/stores/a2.jpeg";
import a3 from "@/public/assets/stores/a3.jpeg";
import a4 from "@/public/assets/stores/a4.jpeg";
import Image from "next/image";
import { Phone, PhoneCall } from "lucide-react";

const kharagpurStoreImages = [k1, k2, k3, k4];
const arambaghstore = [a1, a2, a3, a4];

const Stores = () => {
  return (
    <div className="container min-h-screen bg-white">
      <div className="w-full py-5 ">
        <p className=" bg-lime-500 text-3xl text-center font-extrabold uppercase text-white my-6 py-4 rounded-lg px-6 ">
          Kharagpur Store - Das Infotech It Partner
        </p>
        <div className="w-full rounded-xl overflow-hidden border-4 border-lime-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.9806255322133!2d87.3364301!3d22.354360399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d45038d6877cb%3A0xa33de3b5fbe27af1!2sASUS%20Exclusive%20Store%20-%20Das%20Infotech%20It%20Partner!5e0!3m2!1sen!2sin!4v1749999079871!5m2!1sen!2sin"
            className="border-0 w-full h-[300px] "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className=" text-3xl font-bold mt-6 text-gray-600  text-center ">
          ASUS EXCLUSIVE STORE
        </p>{" "}
        <div className=" flex justify-center text-center mt-4">
          <p className=" w-[450px] text-xl text-gray-500 font-normal">
            Sai Complex, New, College, beside Kharagpur, Inda, Kharagpur, West
            Bengal 721205
          </p>
        </div>
        <a
          href="tel:+918900359769"
          className="text-white flex font-bold justify-center text-center gap-2 my-4 text-2xl bg-red-500 rounded-md py-2"
        >
          <PhoneCall size={30} className="text-white" />
          Call Us at - 8900359769
        </a>
        <div className=" grid xl:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
          {kharagpurStoreImages.map((image) => (
            <div className="w-[650px]  h-[500px] overflow-hidden flex justify-center items-center rounded-lg border-[0.5px] border-gray-500 mt-6 shadow-lg ">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                className="object-cover w-[680px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* arambagh store  */}
      <div className="w-full py-5  mt-10">
        <p className=" bg-teal-500 text-3xl text-center font-extrabold uppercase text-white my-6 py-4 rounded-lg px-6 ">
          AramBagh Store - RETAILNET IT
        </p>
        <div className="w-full rounded-xl overflow-hidden border-4 border-teal-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.9806255322133!2d87.3364301!3d22.354360399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d45038d6877cb%3A0xa33de3b5fbe27af1!2sASUS%20Exclusive%20Store%20-%20Das%20Infotech%20It%20Partner!5e0!3m2!1sen!2sin!4v1749999079871!5m2!1sen!2sin"
            className="border-0 w-full h-[300px] "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-center text-3xl font-bold mt-6 text-gray-600">
          RETAILNET IT
        </p>
        <div className=" flex justify-center text-center mt-4">
          <p className=" w-[480px] text-xl text-gray-500 font-normal">
            1002, Arambagh, Link Road, Arambagh, Opposite of Arambagh SBI, West
            Bengal - India - 712601
          </p>
        </div>
        <a
          href="tel:+918653069135"
          className="text-white flex font-bold justify-center text-center gap-2 my-4 text-2xl bg-red-500 rounded-md py-2"
        >
          <PhoneCall size={30} className="text-white" />
          Call Us at - 8653069135
        </a>
        <div className=" flex items-center justify-center">
          <div className=" grid grid-cols-2  items-center justify-center gap-4 self-center">
            {arambaghstore.map((image) => (
              <div className="w-[680px] h-[500px] overflow-hidden flex justify-center items-center rounded-lg border-[0.5px] border-gray-500 mt-6 shadow-lg ">
                <Image
                  src={image}
                  alt=""
                  width={700}
                  height={400}
                  className="object-cover h-[500px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
