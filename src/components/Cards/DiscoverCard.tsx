import React from "react";
import { RocketTakeoff } from "react-bootstrap-icons";

function DiscoverCard() {
  return (
    <div className="flex gap-6 w-[30rem]">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-[#154CA4]">
          <RocketTakeoff className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[#154CA4] font-semibold mb-2">Marketing</p>
        <p className="text-[14px] leading-8 mb-2">
          Our team ensures your property is leased quickly to the best residents
          through active online and in-person marketing, accurate pricing
          analysis, and extensive online advertising for maximum visibility and
          minimal vacancy time.
        </p>
        <div className="text-green-500 text-[14px]">Details +</div>
      </div>
    </div>
  );
}

export default DiscoverCard;
