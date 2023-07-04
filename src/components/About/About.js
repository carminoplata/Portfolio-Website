import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Certificates from './Certificates'

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "1.5rem", paddingBottom: "20px" }}
              data-aos="fade-right">
              <span className="primary-header">Bio</span> 
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
        <h1 data-aos="fade-right">
          <span className="primary-header">Tech Stack</span>
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>
        
        <h1 data-aos="fade-right">
          <span className="primary-header">Certificates</span>
        </h1>

        <div data-aos="fade-up">
          <Certificates />
        </div>

        <Github hidden/>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
