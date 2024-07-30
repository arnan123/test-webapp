import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  TelephoneInbound,
} from "react-bootstrap-icons";

function HeaderComponent() {
  return (
    <div className="bg-[#1A4CA0] h-[52px] flex justify-between items-center px-[150px]">
      <div className="flex gap-2 text-[18px]">
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
        <Youtube />
      </div>
      <div className="flex gap-[100px] text-[16px]">
        <p>Pay Rent</p>
        <p>Repair Request</p>
        <p>Apply Now</p>
      </div>
      <div className="flex gap-2 text-[24px]">
        <TelephoneInbound />
        <p>(330) 600-4556 </p>
      </div>
    </div>
  );
}

export default HeaderComponent;
