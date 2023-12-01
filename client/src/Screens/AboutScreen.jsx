import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./AboutScreen.css";

const details = [
  {
    branch: "Conduct Branch",
    phn: "0130-2484068",
    members: [
      "Ms. Mamta - Assistant Registrar",
      "Ms Priyanka  - Dy. Supdt.",
      "Mr. Kuldeep Singh, Assistant",
      "Mr. Ajay Kumar  - Assistant",
      "Mr. Mohit, Clerk-cum-DEO",
      "Ms. Priya, Clerk-cum-DEO",
    ],
  },
  {
    branch: "Electronic Data Processing Center (EDP)",
    phn: "0130-2484095",
    members: [
      "Dr. Yogendar Sharma - Head EDP",
      "Mr. O.K. Dahiya -Programmer",
      "Mr. Deepak Sharma - Programmer",
      "Mr. Ranjeet singh -Assistant",
      "Mrs Poonam - Asstt.-cum-DEO",
      "Mrs. Kafi, Clerk-cum-DEO",
    ],
  },
  {
    branch: "Re-evalution & Entrance Exam Cell",
    phn: "0130-2484058",
    members: [
      "Mr Dinesh Dahiya - Supdt.",
      "Mr. Parveen , Assistant",
      "Mr. Pardeep ,Clerk-cum-DEO",
    ],
  },
  {
    branch: "Result Branch",
    phn: "0130-2484068",
    members: [
      "Ms Meenakshi - Supdt.",
      "Mr Sumer Chand - Assistant",
      "Mrs Saroj - Asstt.-cum-DEO",
      "Mr. Inderjeet, Asstt.-cum-DEO",
      "Mrs. Monika - Clerk-cum-DEO",
      "Ms. Meenakshi, Clerk-cum-DEO"
    ],
  },
  {
    branch: "Secracy Branch",
    phn: "0130-2484058",
    members: [
      "Mr. Raj Kumar - Assistant Registrar.",
      "Mr Bhupinder Singh - Storekeeper",
      "Mr Rajnish - Asst.-cum-DEO",
      "Mr Dayanand - Assistant",
      "Mr Sundeep - Asstt.-cum-DEO"
    ],
  },
];

function AboutScreen() {
  return (
    <div>
      <div>
        <h3 className="text-center fw-bolder mt-4">Controller of Examinations</h3>
        <h2 className="text-center fw-bolder">Dr. Mahabir Singh Dhankar</h2>
        <div className="text-center fw-bolder d-flex gap-3 items-center justify-content-center">
          <div>Tele Fax.: 0130-2484006</div>
          <div>Email: coe@dcrustm.org</div>
        </div>
      </div>

      <Container className="my-4">
        {details.map((detail, index) => (
          <div key={index} className="p-2" >
            <Row className="py-1 about-row">
              <Col lg={3} className="m-2 fw-bold">
                <Row>{detail.branch}</Row>
                <Row>{detail.phn}</Row>
              </Col>
              <Col lg className="px-4 bg-primary text-white rounded">
                <Row className="d-flex flex-column gap-2">
                  {detail.members.map((member,index) => (
                    <div key={index} className="py-2">{member}</div>
                  ))}
                </Row>
              </Col>
            </Row>
            <hr className="mt-4"/>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default AboutScreen;
