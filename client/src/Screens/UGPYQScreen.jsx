import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./UGPYQScreen.css";
import { Link, useParams } from "react-router-dom";

const UGPYQScreen = () => {

  const {program} = useParams();

  return (
    <>
      <Row className="mt-5 d-flex justify-content-center px-4">
        <Col lg={4}>
          <h4 className="text-center text-primary fw-bolder">
            Previous Year Question Paper
          </h4>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center gap-4 px-4">
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/cse"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  CSE
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/ece"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  ECE
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/electrical"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  Electrical
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/mechanical"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  Mechanical
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/biomedical"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  Biomedical
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/biotech"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  Bio Technology
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/civil"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  Civil
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to={"/pyqs/" + program + "/chemical"} className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  Chemical
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default UGPYQScreen;
