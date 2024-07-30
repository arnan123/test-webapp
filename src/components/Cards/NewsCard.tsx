import React from "react";
import image5 from "@/../public/image-5.png";
import Image from "next/image";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";

function NewsCard() {
  return (
    <div className="flex w-1/2">
      <div className="flex flex-col text-black w-[26rem] px-[2rem]">
        <div className="flex items-center justify-center">
          <div className="relative ">
            <Image src={image5} alt="Sample" className="rounded-2xl" />
            <ArrowUpRightCircleFill className="absolute bottom-2 right-2 w-8 h-8 text-white  rounded-full" />
          </div>
        </div>
        <p className="text-[16px] mt-4">
          Super Enticing Blog Post Title That Users Can’t Help But Read.
        </p>
        <p className=" italic text-[12px] mt-2">March 5th, 2026</p>
      </div>
      <div className="bg-gray-100 rounded-2xl flex flex-col text-black w-1/2 px-[2rem] py-[3rem]">
        <p className="text-[16px] mb-2">
          Super Enticing Blog Post Title That Users Can’t Help But Read.
        </p>
        <p className="text-[12px] text-[#ACAAAA] mb-2">March 5th, 2026</p>
        <p className="text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
