import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import CompanyItem from "./Company";
import Honeywell from "../../Assets/Projects/Honeywell.png";
import Penguinpass from "../../Assets/Projects/penguinpass.png";
import Teoresi from "../../Assets/Projects/teoresi.jpg";
import TMC from "../../Assets/Projects/Tmc.jpg";
import Toothpic from "../../Assets/Projects/toothpic.png";
import Art from "../../Assets/Projects/art.jpg";
//import Marelli from "../../Assets/Projects/marelli.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import ImageScraper from "../../Assets/Projects/imagescraper.svg";
import Codebase from "../../Assets/Projects/MyCodebase.svg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Personal <strong className="Fluorescent-Blue">Projects </strong>
        </h1>
        <p>Below there are my personal projects</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card" hidden>
            <ProjectCard
              imgPath={Art}
              title="The Reader"
              description="Web application for getting the suggestions for your next reading according to a particular book"
              link="https://github.com/rahuljha4171/E-cart"
              demoLink="https://ecart.onrender.com/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card" hidden>
            <ProjectCard
              imgPath={Portfolio}
              title="Beer Classifier"
              description="AI model for beer detection inside a picture"
              link="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.tech/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card" hidden>
            <ProjectCard
              imgPath={Portfolio}
              title="TocTherapy"
              description="Mobile and Web Application for providing attendable information about services offered by private and public hospitals"
              link="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ImageScraper}
              title="Image Scraper"
              description="Python Module for the collection of images with a particular object via Bing API"
              link="https://github.com/carminoplata/imagescraper"/>
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Codebase}
              title="Codebase"
              description="A set of sample apps and useful tools in the most used programming languages: C++, Angular"
              link="https://github.com/carminoplata/codebase"/>
          </Col>
          <Col md={6} lg={4} className="project-card" hidden>
            <ProjectCard
              imgPath={Portfolio}
              title="ATB3"
              description="Unix embedded device for the monitoring of the status of the vehicle and for providing emergency call in case of accidents"
              link="https://github.com/carminoplata/imagescraper"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card" hidden>
            <ProjectCard
              imgPath={Portfolio}
              title="Toothpic"
              description="Mobile and web application for authenticating user via camera's fingerprint."
              link="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Supported <strong className="Fluorescent-Blue">Enterprises</strong>
        </h1>
        <p hidden>Companies supported by Carmine</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/*<Carousel controls="false" indicators="false">
            <CompanyItem md={6} lg={4} imgPath={Art} title="Artgroup" 
              link="https://www.artgroup-spa.com/connected-cluster-infotainment/" />
            <CompanyItem md={6} lg={4} imgPath={Art} title="Artgroup" 
              link="https://www.artgroup-spa.com/connected-cluster-infotainment/" />         
  </Carousel>*/}
          <Col md={6} lg={4} className="project-card">
            <CompanyItem imgPath={Art} 
              title="Artgroup SpA"
              link="https://www.artgroup-spa.com" />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <CompanyItem imgPath={TMC} 
              title="TMC Italy SpA"
              link="https://tmc-employeneurship.com/it/latest" />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <CompanyItem imgPath={Penguinpass} 
              title="Penguinpass srl"
              link="https://www.artgroup-spa.com" />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <CompanyItem imgPath={Honeywell} 
              title="Honeywell International sro"
              link="https://www.honeywell.com/it/it" />
          </Col>
          <Col md={6} lg={4} className="project-card" hidden>
            <CompanyItem imgPath={Teoresi} 
              title="Teoresi SpA"
              link="https://www.artgroup-spa.com" />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <CompanyItem imgPath={Teoresi} 
              title="Teoresi SpA"
              link="https://www.teoresigroup.com/it" />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <CompanyItem imgPath={Toothpic} 
              title="Toothpic srl"
              link="https://www.toothpic.eu/" />
          </Col>
            {/*<Col md={6} lg={4} className="project-card">
                <ProjectCard
                  imgPath={Art}
                  title="4K Live Streaming"
                  description="Building a live streaming platform for 4K videos recorded by camera installed on vehicles using network protocols based on TCP"
                  link="https://www.artgroup-spa.com/connected-cluster-infotainment/"
                  company="ART Group SpA"
                  hide="true"/>
              </Col>
          

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Art}
              title="Connected Services on vehicle"
              description="Design and development of a bunch of embedded applications for providing connected services to the luxury cars, such as Weather, Parking, Alexa and so on"
              link="https://www.artgroup-spa.com/connected-cluster-infotainment/"
              company="ART Group SpA"
              hide="true"
/></Col>
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Honeywell}
              title="IRIS - SATCOM"
              description="Implementation of satellite communication between aircraft and ground stations inside unix embedded device"
              company="Honeywell International sro"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Honeywell}
              title="Flight Plan Validation"
              description="Qt Desktop Application for the automatic validation of huge datasets of flight plan against Eurocontrol's regulations"
              company="Honeywell International sro"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Marelli}
              title="ATB3"
              description="Unix embedded device for the monitoring of the status of the vehicle and for providing emergency call in case of accidents"
              ghLink="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Toothpic}
              title="Toothpic"
              description="Mobile and web application for authenticating user via camera's fingerprint."
              ghLink="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>*/}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
