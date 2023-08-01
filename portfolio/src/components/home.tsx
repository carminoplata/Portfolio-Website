import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

export default function Hello(){
  return(
    <section>
      <Container fluid className="relative pt-4 pb-4" id="home">
        <Container className="pt-12 px-4 text-left">
          <Row>
            <Col md={7} className="pt-10">
              <h1 className="text-xl px-12">
                Hi There! {""}
                <span className="" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>
              <h1 className="text-3xl px-11">
                <strong className="text-primaryLight dark:text-primaryDark"> Carmine Sacco</strong>
              </h1>
              <div className="type">
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Innovator",
                      "AI Passionate",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }} 
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}