import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import {
  ArrowDownRightCircleFill,
  ArrowRightCircleFill,
  ArrowUpRightCircleFill,
  Facebook,
  Instagram,
  Linkedin,
  PhoneVibrate,
  RocketTakeoff,
  TelephoneInbound,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import ImageBanner from "@/components/ImageBanners/ImageBanner";
import ImageBanner2 from "@/components/ImageBanners/ImageBanner2";
import image3 from "@/../public/image-3.png";
import image4 from "@/../public/image-4.png";
import ButtonComponent from "@/components/Button";
import image5 from "@/../public/image-5.png";
import image51 from "@/../public/image-5.1.png";
import image6 from "@/../public/image-6.png";
import HeaderComponent from "@/components/Header/Header";
import DiscoverCard from "@/components/Cards/DiscoverCard";
import HireCard from "@/components/Cards/HireCard";
import NewsCard from "@/components/Cards/NewsCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white w-full h-full">
      <HeaderComponent />
      <NavbarComponent />

      <section>
        <ImageBanner />
      </section>
      <section>
        <ImageBanner2 />
      </section>
      <section className="text-black px-[200px] py-[8rem] text-center">
        <p className="text-[32px] mb-20">
          DISCOVER WHAT WE DO AS YOUR MASSILLON BASED PROPERTY MANAGER
        </p>
        <div className="flex text-left gap-6 mb-10">
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
        </div>
        <div className="flex text-left gap-6">
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
        </div>
      </section>
      <section>
        <div className="w-screen h-[6rem] bg-[#039444] text-white text-center items-center justify-center flex px-[51px] text-[26px] gap-[16px]">
          <p>Minimize Risk. eliminate Stress. Maximize ROI. Learn more</p>
          <ArrowRightCircleFill className="w-[40px] h-[40px]" />
        </div>
        <div className="bg-[#222222] flex">
          <div className="flex flex-col px-[207px] py-[5rem]">
            <p className="text-[32px] font-semibold">
              WHY HIRE US VS. SELF-MANAGING?
            </p>
            <div className="flex flex-col gap-10 mt-10">
              <HireCard />
              <HireCard />
              <HireCard />
              <HireCard />
            </div>
            <div className="ml-16 mt-10">
              <ButtonComponent text="Schedule A Call" />
            </div>
          </div>
          <div className="right-0">
            <Image src={image3} alt={"StewardImage"} />
          </div>
        </div>
      </section>
      <section className="bg-white text-black justify-center items-center px-[231px] py-[137px]">
        <div className="text-center justify-center gap-[60px]">
          <p className="text-[32px] uppercase">
            You’re protected with our guarantees
          </p>
          <Image src={image4} alt="Protection Logos" />
          <ButtonComponent text={"There’s More! View All"} />
        </div>
      </section>
      <section className="mb-32">
        <div className="">
          <p className="text-[32px] text-black text-center mb-10">
            MASSILLON PROPERTY MANAGEMENT NEWS & HAPPENINGS
          </p>

          <div className="flex px-[4rem]">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </section>

      <section className="mb-28">
        <Image src={image6} alt="stewardship group" className="relative z-10" />
        <div className="bg-[#222222] flex flex-col text-center w-[60rem] px-[85px] py-[62px] mx-auto -mt-[5rem] relative z-50">
          <p className="text-[32px] uppercase font-semibold">Areas We Serve</p>
          <div className="w-[13rem] h-0.5 bg-white my-5 mx-auto"></div>
          <div className="flex justify-evenly mt-4">
            <ButtonComponent text="Massillon" />
            <ButtonComponent text="Massillon" />
            <ButtonComponent text="Massillon" />
            <ButtonComponent text="Massillon" />
            <ButtonComponent text="Massillon" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
