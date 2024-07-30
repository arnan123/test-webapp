// components/Footer.tsx

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  TelephoneInbound,
} from "react-bootstrap-icons";
import logo from "@/../public/logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="flex justify-evenly">
        <div>
          <Image src={logo} alt="Logo" className="w-[156px] my-[10px]" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[14px]">Owners</p>
          <p className="text-[14px]">Owner Portal</p>
          <p className="text-[14px]">Owner FAQs</p>
          <p className="text-[14px]">Pricing</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[14px]">Residents</p>
          <p className="text-[14px]">Resident Portal</p>
          <p className="text-[14px]">Resident FAQs</p>
          <p className="text-[14px]">Resident Resources</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[14px]">Office</p>
          <p className="text-[14px]">641 Lincoln Way West</p>
          <p className="text-[14px]">Massillon, OH 44647</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[14px]">Contact</p>
          <p className="text-[14px]">(330) 600-4556</p>
          <p className="text-[14px]">Clients@stewardshiprealtyllc.com</p>
        </div>
      </div>
      <div className="text-center w-[60vw] mx-auto mt-[6rem]">
        <p className="text-[12px]">
          Copyright 2024 Stewardship Realty & Management. All Rights Reserved.
          Property Manager Website powered by PMW Sitemap Privacy Policy
          Stewardship Realty & Management is committed to ensuring that its
          website is accessible to people with disabilities. All the pages on
          our website will meet W3C WAI`s Web Content Accessibility Guidelines
          2.0, Level A conformance. Any issues should be reported to email here.
          Website Accessibility Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
