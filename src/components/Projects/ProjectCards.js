import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  let button;
  let label;
  if(props.link && props.link.includes('github')){
    button = <BsGithub />;
    label = 'GitHub';
  }else{
    button = <CgWebsite />;
    label = `${props.company} Website`;
  }
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link && !props.hide  && (
          <Button variant="primary" href={props.link} target="_blank">
            {button} &nbsp;
            {label}
          </Button>
        )}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && !props.hide && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
    
  );
}
export default ProjectCards;
