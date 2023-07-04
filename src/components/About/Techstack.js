import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiLinux,
  DiApple,
  DiWindows,
  DiAws,
  DiPython
} from "react-icons/di";
import {
  SiNextdotjs
} from "react-icons/si";

import {
  TbBrandCpp,
  TbBrandCSharp
} from 'react-icons/tb'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCpp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" hidden>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
    </Row>
  );
}

export default Techstack;
