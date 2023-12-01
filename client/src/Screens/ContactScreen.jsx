import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./ContactScreen.css";


function ContactScreen() {
  return (
    <>
      <Container className="my-4">
        <h3 className="text-center my-4">Contact Us</h3>
        <hr />
        <h4 className="contact-row">University</h4>
        <Row className="contact-row">
            <Col lg={4}>
                <h6>Address</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                    Deenbandhu Chhotu Ram University of Science & Technology Murthal, Sonepat Haryana - 131039
                </p>
            </Col>
        </Row>
        <Row className="contact-row">
            <Col lg={4}>
                <h6>Telephone No.</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                    +91-130-2484005
                </p>
            </Col>
        </Row>
        <Row className="contact-row">
            <Col lg={4}>
                <h6>Email ID</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                <a href="mailto:registrar@dcrustm.org" target="_blank" rel="noreferrer" className="contact-mail">
                registrar@dcrustm.org
                </a>
                    
                </p>
            </Col>
        </Row>
        
        <hr />
        <h4 className="contact-row">Controller of Examinations</h4>

        <Row className="contact-row">
            <Col lg={4}>
                <h6>Telephone No.</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                    +91-130-2484006
                </p>
            </Col>
        </Row>
        <Row className="contact-row">
            <Col lg={4}>
                <h6>Email ID</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                <a href="mailto:coe@dcrustm.org" target="_blank" rel="noreferrer" className="contact-mail">
                coe@dcrustm.org
                </a>
                
                </p>
            </Col>
        </Row>

        <hr />
        <h4 className="contact-row">EDP Center</h4>

        <Row className="contact-row">
            <Col lg={4}>
                <h6>Telephone No.</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                    +91-130-2484095
                </p>
            </Col>
        </Row>
        <Row className="contact-row">
            <Col lg={4}>
                <h6>Email ID</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                <a href="mailto:dcrustmurthal.edpcentre@gmail.com" target="_blank" rel="noreferrer" className="contact-mail">
                dcrustmurthal.edpcentre@gmail.com
                </a>
                    
                </p>
            </Col>
        </Row>

        <hr />
        <h4 className="contact-row">Conduct Branch</h4>

        <Row className="contact-row">
            <Col lg={4}>
                <h6>Email ID</h6>
            </Col>
            <Col lg className="px-4 py-1 bg-primary text-white rounded">
                <p>
                <a href="mailto:conduct@dcrustm.org" target="_blank" rel="noreferrer" className="contact-mail">
                conduct@dcrustm.org
                </a>
                </p>
            </Col>
        </Row>

        <hr />
        <h6 className="contact-row text-center my-4">Contact between 09:00 AM to 05:00 PM (Monday to Friday)</h6>
      </Container>
      </>
  );
}

export default ContactScreen;
