import React from "react";
import { Container, Image } from "react-bootstrap";
import bannerimage from "../../public/banner-img-2.png";
import ButtonComponent from "../Button";
import styles from "../ImageBanner/ImageBanner2.module.css";


const ImageBanner2 = () => {
    return (
      <Container fluid className="p-0">
        <div className="position-relative w-100">
          <div className={styles.imageContainer}>
            <Image
              src={bannerimage}
              alt="Banner"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
            <div className={styles.gradientOverlay}></div>
          </div>
  
          <div className={styles.bannerText}>
            <div className={styles.bannerTextContent}>
              <p className="fs-5 fw-semibold">WELCOME TO</p>
              <h2 className="fs-3 display-md-4 fw-semibold mb-4">
                STEWARDSHIP PROPERTY MANAGEMENT
              </h2>
              <p className="mb-4" style={{fontSize:'14px'}}>
                Based in Massillon, Ohio, Stewardship Property Management has served the local community and surrounding areas for many years. Our mission is to help each client achieve their investment goals while showing each and every resident the respect and responsiveness they deserve. We believe in the good ole-fashioned `Golden Rule` and use it as the standard in every aspect of our business.
              </p>
              <ButtonComponent text="Contact Us Today To Learn More" />
            </div>
          </div>
        </div>
      </Container>
    );
  };
  
export default ImageBanner2;
