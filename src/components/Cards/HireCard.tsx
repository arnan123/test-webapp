import React from "react";
import { RocketTakeoff } from "react-bootstrap-icons";

function HireCard() {
  return (
    <div className="flex gap-6 w-[40rem]">
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-[#039444]">
          <RocketTakeoff className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white font-semibold mb-2">
          Significantly Less Stress & Time Involvement
        </p>
        <p className="text-[14px] leading-8 mb-2">
          One of the single greatest struggles of owning rental real estate can
          be the day to day involvement of responding to residents, coordinating
          vacancy renovations/repairs, showing vacant units, chasing delinquent
          rents, and on and on!... This is one of the key reasons why investors
          reach out to us again and again.
        </p>
      </div>
    </div>
  );
}

export default HireCard;
