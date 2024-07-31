import React from "react";
import "./App.css";
import MyNavbar from "./components/Navbar";
import HeaderComponent from "./components/Header";
import ImageBanner from "./components/ImageBanner/ImageBanner";
import ImageBanner2 from "./components/ImageBanner/ImageBanner2";
import DiscoverCard from "./components/Cards/DiscoverCard";
import { ArrowRightCircleFill, RocketTakeoff } from "react-bootstrap-icons";
import HireCard from "./components/Cards/HireCard";
import ButtonComponent from "./components/Button";
import { Col, Container, Image, Row } from "react-bootstrap";
import image3 from "../src/public/image-3.png";
import image4 from "../src/public/image-4.png";
import image6 from "../src/public/image-6.png";
import NewsCard from "./components/Cards/NewsCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MyNavbar />

      <ImageBanner />
      <ImageBanner2 />
      <section className="text-black py-5 px-5 text-center containerRight">
        <p className="fs-3 mb-4 fw-semibold">
          DISCOVER WHAT WE DO AS YOUR MASSILLON BASED PROPERTY MANAGER
        </p>
        <div className="container p-0">
          <div className="row justify-content-center mb-1">
            <div className="col-12 col-md-6 col-lg-4">
              <DiscoverCard
                title="Marketing"
                content="Our team ensures your property is leased quickly to the best residents through active online and in-person marketing, accurate pricing analysis, and extensive online advertising for maximum visibility and minimal vacancy time."
                logo={<RocketTakeoff style={{ width: "1.5rem", height: "1.5rem" }}/>}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <DiscoverCard
                title="Screening"
                content="Our thorough screening process ensures the right resident for your property by conducting extensive checks on credit, employment, criminal history, and references while adhering to Ohio and Federal fair housing laws."
                logo={<RocketTakeoff style={{ width: "1.5rem", height: "1.5rem" }} />}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <DiscoverCard
                title="Rent Collection"
                content="We ensure timely payments by promptly addressing late fees and facilitating online payments, all while treating tenants with respect and dignity."
                logo={<RocketTakeoff style={{ width: "1.5rem", height: "1.5rem" }} />}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <DiscoverCard
                title="Maintenance"
                content="Our maintenance service ensures a well-maintained home, resulting in quicker rentals and happier residents, by using a strategic blend of in-house teams and trusted subcontractors."
                logo={<RocketTakeoff style={{ width: "1.5rem", height: "1.5rem" }} />}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <DiscoverCard
                title="Financial Reporting"
                content="We provide detailed monthly financial reports and ongoing expense tracking, accessible anytime via our Owner Portal, along with direct access to our finance team for any inquiries."
                logo={<RocketTakeoff style={{ width: "1.5rem", height: "1.5rem" }} />}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <DiscoverCard
                title="Eviction Management"
                content="In the unfortunate event that a tenant needs to be evicted from your rental, we will handle all of the eviction related tasks on your behalf to the extent approved by our attorney."
                logo={<RocketTakeoff style={{ width: "1.5rem", height: "1.5rem" }} />}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-success text-white text-center d-flex align-items-center justify-content-center px-3 py-3 py-md-4"
          style={{ height: "6rem" }}
        >
          <p className="mb-0 fs-4">
            Minimize Risk. Eliminate Stress. Maximize ROI. Learn more
          </p>
          <ArrowRightCircleFill
            className="ms-3"
            style={{ width: "40px", height: "40px" }}
          />
        </div>

        <Container fluid className="text-light p-0" style={{backgroundColor:'#222323'}}>
          <Row className="align-items-center mt-0">
            <Col lg={7} className="d-flex flex-column mt-0 py-5">
              <p className="fs-3 fw-semibold">WHY HIRE US VS. SELF-MANAGING?</p>
              <div className="d-flex flex-column mt-4">
                <HireCard />
                <HireCard />
                <HireCard />
                <HireCard />
              </div>
              <div className="mt-4">
                <ButtonComponent text="Schedule A Call" />
              </div>
            </Col>
            <Col
              lg={5}
              className="d-none d-lg-flex justify-content-end p-0 m-0"
            >
              <Image src={image3} alt="StewardImage" fluid />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-white text-black py-5 py-md-6 mb-5">
        <Container className="text-center d-flex flex-column align-items-center">
          <p className="fs-3 fw-semibold text-uppercase mb-4">
            You’re protected with our guarantees
          </p>
          <Image
            src={image4}
            alt="Protection Logos"
            fluid
            className="mb-4 d-block mx-auto"
            width={1000}
          />
          <div>
            <ButtonComponent text="There’s More! View All" />
          </div>
        </Container>
      </section>

      <section className="mb-5">
        <Container className="p-0 w-100">
          <p className="fs-3 fw-semibold text-center mb-4">
            MASSILLON PROPERTY MANAGEMENT NEWS & HAPPENINGS
          </p>

          <Row className="g-4">
            <Col md={12} lg={6}>
              <NewsCard />
            </Col>
            <Col md={12} lg={6}>
              <NewsCard />
            </Col>
          </Row>
        </Container>
      </section>
       <section className="mb-5">
        <div className="container-fluid p-0 -mr-10">
          <Image
            src={image6}
            alt="stewardship group"
            fluid
            className="position-relative z-index-10"
          />
        </div>
        <Container
          className="position-relative z-index-50"
          style={{ marginTop: "-5rem", maxWidth: "50rem", maxHeight: "50rem" }}
        >
          <div className="bg-dark text-white text-center p-4 p-md-5 mx-auto rounded">
            <p className="fs-2 text-uppercase fw-semibold mb-3">
              Areas We Serve
            </p>
            <div className="w-25 h-1 bg-white mx-auto mb-4"></div>
            <Row className="justify-content-center">
              <Col xs="auto" className="mb-2 mb-md-0">
                <ButtonComponent text="Massillon" />
              </Col>
              <Col xs="auto" className="mb-2 mb-md-0">
                <ButtonComponent text="Canton" />
              </Col>
              <Col xs="auto" className="mb-2 mb-md-0">
                <ButtonComponent text="Akron" />
              </Col>
              <Col xs="auto" className="mb-2 mb-md-0">
                <ButtonComponent text="Uniontown" />
              </Col>
              <Col xs="auto" className="mb-2 mb-md-0">
                <ButtonComponent text="Green" />
              </Col>
            </Row>
          </div>
        </Container>
      </section> 
      <Footer />
    </div>
  );
}

export default App;
