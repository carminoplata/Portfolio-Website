import { Button } from 'react-bootstrap';
import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            <span className="primary-header">Carmine Sacco</span> is from Naples, Italy. 
            <br />He is an innovator with a strong passion for the technology.<br />
            He is always looking for new projects to support with his expertise built in startups and 
            international companies. <br />
            Do you want to get more about him? Take a look at his <a href="/resume">resume</a>
            <br />
            <br />
            In addition to tech, he loves:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Training in Bjj: he is a blue belt
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Cooking
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Travelling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Going to cinema
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Are you planning to build a new tech project and you don't know how to start? <br />
            Do you want to turn your idea into awesome product? <br />
            Are you a manager in an international company with goal to speed up your processes?
          </p>
        </blockquote>
        <Button href="https://calendly.com/carminesacco/30min">Join Carmine for a virtual coffee</Button>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
