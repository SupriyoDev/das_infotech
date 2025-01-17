import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ButtonGroup = () => {
  return (
    <div className="">
      <div className=" container flex justify-between bg-white  rounded-lg  overflow-hidden">
        <div className="flex  ">
          <button className="button-group border-r ">
            <FaHashtag className="size-5" /> Trending
          </button>
          <button className="button-group border-r">
            <MdFiberNew className="size-6" />
            latest
          </button>
          <button className="button-group border-r">
            <FaRegThumbsUp className="size-5" /> Bestsellers
          </button>
          <button className="button-group border-r">
            <IoIosStar className="size-6" /> Best Rated
          </button>
        </div>
        <div className="flex">
          <button className="button-group border-l">
            <IoIosArrowForward className="text-pink-600 size-7  " /> See all
            products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
