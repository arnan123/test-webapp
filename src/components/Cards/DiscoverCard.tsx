import React from "react";
import { RocketTakeoff } from "react-bootstrap-icons";

function DiscoverCard({
  title,
  content,
  logo,
}: {
  title: string;
  content: string;
  logo: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 w-[30rem]">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-[#154CA4]">
          {/* <RocketTakeoff className="w-6 h-6" /> */}
          {logo}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[#154CA4] font-semibold mb-2">{title}</p>
        <p className="text-[14px] leading-8 mb-2">{content}</p>
        <div className="text-green-500 text-[14px]">Details +</div>
      </div>
    </div>
  );
}

export default DiscoverCard;
