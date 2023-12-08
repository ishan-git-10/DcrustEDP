import { Accordion, Col, ListGroup, Row } from "react-bootstrap";
import { FaDownload } from "react-icons/fa6";
import { useDisplayPyqsSemWiseQuery } from "../slices/pyqsSlice";
import { BASE_URL, FILES_URL } from "../constants";
import "./BranchScreen.css";
import { useParams } from "react-router-dom";

const BranchScreen = () => {

  const {program, branch} = useParams();

  const { data: sem1, isLoading: loadingsem1 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "1",
    program: program
  });
  const { data: sem2, isLoading: loadingsem2 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "2",
    program: program
  });
  const { data: sem3, isLoading: loadingsem3 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "3",
    program: program
  });
  const { data: sem4, isLoading: loadingsem4 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "4",
    program: program
  });
  const { data: sem5, isLoading: loadingsem5 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "5",
    program: program
  });
  const { data: sem6, isLoading: loadingsem6 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "6",
    program: program
  });
  const { data: sem7, isLoading: loadingsem7 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "7",
    program: program
  });
  const { data: sem8, isLoading: loadingsem8 } = useDisplayPyqsSemWiseQuery({
    branch: branch,
    sem: "8",
    program: program
  });

  const fileUrl = BASE_URL + FILES_URL + "/download/";
  return (
    <>
      <Row className="mt-5 d-flex justify-content-center px-4">
        <Col lg={4}>
          <h4 className="text-center text-primary fw-bolder">
            Previous Year Question Paper
          </h4>
        </Col>
      </Row>
      <Accordion className="mt-5 mx-auto w-75">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1st</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem1 ? (
                <h1>Loading...</h1>
              ) : ( sem1?.length>0 &&
                sem1?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2nd</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem2 ? (
                <h1>Loading...</h1>
              ) : ( sem2?.length>0 &&
                sem2?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3rd</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem3 ? (
                <h1>Loading...</h1>
              ) : ( sem3?.length>0 &&
                sem3?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4th</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem4 ? (
                <h1>Loading...</h1>
              ) : ( sem4?.length>0 &&
                sem4?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5th</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem5 ? (
                <h1>Loading...</h1>
              ) : ( sem5?.length>0 &&
                sem5?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6th</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem6 ? (
                <h1>Loading...</h1>
              ) : ( sem6?.length>0 &&
                sem6?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7th</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem7 ? (
                <h1>Loading...</h1>
              ) : ( sem7?.length>0 &&
                sem7?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8th</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {loadingsem8 ? (
                <h1>Loading...</h1>
              ) : ( sem8?.length>0 &&
                sem8?.map((pyq) => (
                  <ListGroup.Item className="d-flex justify-content-between">
                    {pyq.code} {pyq.subjectName}
                    <a
                      href={fileUrl + pyq._id}
                      className="text-decoration-none"
                    >
                      <FaDownload className="cursor-pointer text-dark" />
                    </a>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default BranchScreen;
