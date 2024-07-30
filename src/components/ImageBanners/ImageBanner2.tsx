// components/ImageBanner.jsx
import Image from "next/image";
import { Container } from "react-bootstrap";
import bannerimage from "../../../public/banner-img-2.png";
import ButtonComponent from "../Button";
import styles from "@/components/ImageBanners/ImageBanner2.module.css";

const ImageBanner2 = () => {
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

        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-white"></div> */}
        <div className="absolute top-20 left-0 w-full h-full flex flex-col items-center text-black">
          <div className="text-center w-[45rem]">
            <p className="text-[18px]">WELCOME TO</p>
            <h2 className="text-[32px] font-semibold mb-4">
              STEWARDSHIP PROPERTY MANAGEMENT
            </h2>
            <p className="text-[14px] mb-10">
              Based in Massillon, Ohio, Stewardship Property Management has
              served the local community and surrounding areas for many years.
              Our mission is to help each client achieve their investment goals
              while showing each and every resident the respect and
              responsiveness they deserve. We believe in the good ole-fashioned
              "Golden Rule" and use it as the standard in every aspect of our
              business.
            </p>
          </div>
          <ButtonComponent text="Contact Us Today To Learn More" />
        </div>
      </div>
    </Container>
  );
};

export default ImageBanner2;
