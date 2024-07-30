import Image from "next/image";
import { Container } from "react-bootstrap";
import bannerimage from "../../../public/banner-img.png";
import styles from "@/components/ImageBanners/ImageBanner.module.css";
import ImageBannerCard from "../Cards/ImageBannerCard";

const ImageBanner = () => {
  return (
    <Container fluid className="p-0">
      <div className="relative w-full h-[897px]">
        <div className={styles.imageContainer}>
          <Image
            src={bannerimage}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
          <div className={styles.gradientOverlay}></div>
        </div>

        <div className="absolute bottom-20 right-10 w-full h-full flex items-center justify-end text-black z-20">
          <div className="flex flex-col">
            <h2 className="text-[60px] !font-semibold w-[40rem] leading-[59px]">
              MASSILLON PROPERTY MANAGEMENT
            </h2>
            <p className="text-[28px] !font-extralight w-[40rem]">
              Adding value by providing our clients more margin, time, & peace
              of mind!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly -mt-[13.3rem] relative z-30">
        <ImageBannerCard bg="#1C75BC" />
        <ImageBannerCard bg="#194CA0" />
        <ImageBannerCard bg="#0D2F65" />
        <ImageBannerCard bg="#222222" />
      </div>
    </Container>
  );
};

export default ImageBanner;
