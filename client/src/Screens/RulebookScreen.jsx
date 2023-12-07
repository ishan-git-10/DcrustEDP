import { Accordion, Col, Row } from "react-bootstrap";
import rc1 from "../downloads/rc1.pdf";
import rc2 from "../downloads/rc2.pdf";
import rc3 from "../downloads/rc3.pdf";
import rc4 from "../downloads/rc4.pdf";
import rc5 from "../downloads/rc5.pdf";

const RulebookScreen = () => {
  return (
    <>
      <Row className="mt-5 d-flex justify-content-center px-4">
        <Col lg={4}>
          <h4 className="text-center text-primary fw-bolder">Rule Book</h4>
        </Col>
      </Row>
      <Accordion className="mt-5 mx-auto w-75">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Chapter No.1 : Statute 39 (Clause-34-38) of University Act
            pertaining to Examinations
          </Accordion.Header>
          <Accordion.Body>
            <embed src={rc1} width="100%" height="600px" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Chapter No.2 : Enrolment, Schedule of Examinations and Admit Card
          </Accordion.Header>
          <Accordion.Body>
            <embed src={rc2} width="100%" height="600px" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Chapter No.3 : Appointment of Staff
          </Accordion.Header>
          <Accordion.Body>
            <embed src={rc3} width="100%" height="600px" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Chapter No.4 : Instructions for Superintendent-in-Chief for the
            conduct of examinations
          </Accordion.Header>
          <Accordion.Body>
            <embed src={rc4} width="100%" height="600px" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
          Chapter No.5 : Duties and Responsibilities of personals appointed for conduct of examinations
          </Accordion.Header>
          <Accordion.Body>
            <embed src={rc5} width="100%" height="600px" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default RulebookScreen;
