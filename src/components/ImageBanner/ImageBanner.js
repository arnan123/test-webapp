
import { Container, Row, Col } from "react-bootstrap";
import bannerimage from "../../public/banner-img.png";
import styles from "../ImageBanner/ImageBanner.module.css";
import ImageBannerCard from "../Cards/ImageBannerCard";
import '../ImageBanner/ImageBanner.module.css';

const ImageBanner = () => {
  return (
    <div className={styles.container}>
      <div className="position-relative w-100">
        <div className={styles.imageContainer}>
          <img
            src={bannerimage}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
          <div className={styles.gradientOverlay}></div>
        </div>

        <div className="position-absolute top-0 end-0 w-50 d-flex justify-content-end text-black z-3 p-5">
          <div  className="text-start">
            <h2 className="display-5 fw-semibold mb-3">
              MASSILLON PROPERTY MANAGEMENT
            </h2>
            <p className="lead font-weight-light">
              Adding value by providing our clients more margin, time, & peace of mind!
            </p>
          </div>
        </div>
      </div>
      <div>

      <Row className={styles.marginTop}>
        <Col md={6} lg={3}>
          <ImageBannerCard
            bg="#1C75BC"
            title="PROPERTY MANAGEMENT"
            contents={
              <>
                <p>Residential</p>
                <p>Multi-Family</p>
                <p>Pricing</p>
              </>
            }
          />
        </Col>
        <Col md={6} lg={3} >
          <ImageBannerCard
            bg="#194CA0"
            title="SEARCH PROPERTIES"
            contents={
              <>
                <p>Available Rentals</p>
                <p>Qualification Criteria</p>
                <p>Resident Benefit Package</p>
              </>
            }
          />
        </Col>
        <Col md={6} lg={3}>
          <ImageBannerCard
            bg="#0D2F65"
            title="CURRENT OWNERS"
            contents={
              <>
                <p>Owner Portal</p>
                <p>FAQs</p>
                <p>Guarantees</p>
              </>
            }
          />
        </Col>
        <Col md={6} lg={3}>
          <ImageBannerCard
            bg="#222222"
            title="CURRENT RESIDENTS"
            contents={
              <>
                <p>Tenant Portal</p>
                <p>FAQs</p>
                <p>Resources</p>
              </>
            }
          />
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default ImageBanner;
