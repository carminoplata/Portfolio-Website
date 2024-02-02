import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../scrollToTop/ScrollToTop";

import Home2 from "./Home2";
import Type from "./Type";
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <section>
      <Container fluid className={styles.home-section} id="home">
        <Container className={styles.home-content}>
          <Row>
            <Col md={7} className={styles.home-header}>
              <h1 style={{ paddingBottom: 15 }} className={styles.heading}>
                Hi There!{" "}
                <span className={styles.wave} role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className={styles.headingname}>
                <strong className={styles.mainname}> Rahul Jha</strong>
              </h1>

              <div style={{ padding: 30 }} className={styles.type}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className={styles.img-fluid}
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}
