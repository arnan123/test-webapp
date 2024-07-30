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
          <DiscoverCard
            title="Marketing"
            content="Our team ensures your property is leased quickly to the best residents through active online and in-person marketing, accurate pricing analysis, and extensive online advertising for maximum visibility and minimal vacancy time."
            logo={<RocketTakeoff className="w-6 h-6" />}
          />
          <DiscoverCard
            title="Screening"
            content="Our thorough screening process ensures the right resident for your property by conducting extensive checks on credit, employment, criminal history, and references while adhering to Ohio and Federal fair housing laws."
            logo={<RocketTakeoff className="w-6 h-6" />}
          />
          <DiscoverCard
            title="Rent Collection"
            content="We ensure timely payments by promptly addressing late fees and facilitating online payments, all while treating tenants with respect and dignity."
            logo={<RocketTakeoff className="w-6 h-6" />}
          />
        </div>
        <div className="flex text-left gap-6">
          <DiscoverCard
            title="Maintenance"
            content="Our maintenance service ensures a well-maintained home, resulting in quicker rentals and happier residents, by using a strategic blend of in-house teams and trusted subcontractors."
            logo={<RocketTakeoff className="w-6 h-6" />}
          />
          <DiscoverCard
            title="Financial Reporting"
            content="We provide detailed monthly financial reports and ongoing expense tracking, accessible anytime via our Owner Portal, along with direct access to our finance team for any inquiries."
            logo={<RocketTakeoff className="w-6 h-6" />}
          />
          <DiscoverCard
            title="Eviction Management"
            content="In the unfortunate event that a tenant needs to be evicted from your rental, we will handle all of the eviction related tasks on your behalf to the extent approved by our attorney.
            "
            logo={<RocketTakeoff className="w-6 h-6" />}
          />
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
