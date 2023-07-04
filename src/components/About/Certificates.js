import { useState } from "react";
import { Col, Row, Modal, Button, Image } from "react-bootstrap";

import { SiCoursera } from "react-icons/si";

import StructureML from '../../Assets/Certificates/Coursera_StructureMLProjects.png'
import HyperparameterTuning from '../../Assets/Certificates/Coursera_HyperparametTuning.png'
import NN_DL from '../../Assets/Certificates/Coursera_NN_DL.png'
import PowerMbaLogo from '../../Assets/Certificates/PowerMbaLogo.svg'

function CertificateViewer(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}  offered by <a href={props.link}>{props.company}</a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.image} 
          alt={props.desc} fluid/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Certificate(props){
  const [modalShow, setModalShow] = useState(false);
  var openModal = (e) => {
    e.preventDefault();
    setModalShow(true);
  } 
  let logo = props.company === 'PowerMba' ? 
    <img src={PowerMbaLogo} alt='logo PowerMba' /> : <SiCoursera />;
  return (
    <div>
      <Button href='#' bsPrefix='btnModal'
        onClick={openModal}>
        {logo}
      </Button>
      <CertificateViewer
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>
    
  );
}

function Certificates() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Certificate image="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/39344546730947.png" 
          title="ThePowerMBA" company="PowerMba" link="https://www.thepowermba.com/en/thepowermba/"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Certificate image={StructureML} 
          title="Structuring Machine Learning Projects" company="DeepLearning AI & Coursera"
          link="https://www.coursera.org/learn/machine-learning-projects"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Certificate image={HyperparameterTuning} 
          title="Improving Deep Neural Networks: Hyperparameter Tuning, 
                 Regularization and Optimization" company="DeepLearning AI & Coursera" 
          link="https://www.coursera.org/learn/deep-neural-network"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Certificate image={NN_DL} 
          title="Neural Networks and Deep Learning" company="DeepLearning AI & Coursera" 
          link="https://www.coursera.org/learn/neural-networks-deep-learning"/>
      </Col>
    </Row>
  );
}

export default Certificates;
