import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/carmine.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
                Polyglot Software Engineer
              </i>{" "}
              specialized in <i className="primary-header">web, multimedia and 
              embedded development.</i>
              <br />
              <br />I possess a true <i className="primary-header">entrepreneurial spirit</i>, always seeking to solve real-life problems 
              by leveraging cutting-edge technologies, while prioritizing user needs above all else.{" "}
              <br />
              <br />My motto is: <i> to build a disruptive product, you must be its first user.</i><br />
              With this state of mind, I gain valuable insights that speed up my development process and 
              lead to truly impactful solutions.
              <br />
              <br />I'm dedicated to expanding my knowledge in{" "}
              <i className="primary-header">AI</i> particularly in{" "}
              <i className="primary-header">NLP</i>
              <br />
              <br />
              Outside of work, I'm a sports enthusiast, challenging myself with{" "}
              <i className="primary-header">Brazilian Jiu-Jitsu</i>
              <br />
              <br />
              I'm passionate about combining my technical expertise, entrepreneurial mindset, 
              and user-centric design to help create groundbreaking products.
              <br />
              <br />
              Together,  <b><i className="primary-header">let's build the future.</i></b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/carminoplata"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" hidden>
                <a
                  href="https://twitter.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:carmine.sacco91@icloud.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/carmine-sacco/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/carminoplata/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
