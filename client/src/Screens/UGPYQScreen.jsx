import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./UGPYQScreen.css";
import { Link } from "react-router-dom";

const UGPYQScreen = () => {
  //   const navigate = useNavigate();

  //   const [uploadPaper, { isLoading: loadingUpload }] =
  //     useUploadPdfMutation();

  //     const [addPaper, {isLoading: loadingAdd}] =
  //     useAddPyqMutation();

  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await addPaper({
  //         name,
  //         code,
  //         sem,
  //         program,
  //         path,
  //       }).unwrap();
  //       toast.success("Previous Year added successfully");
  //       navigate("/");
  //     } catch (err) {
  //       toast.error(err?.data || err.error);
  //     }
  //   };

  //   const uploadFileHandler = async (e) => {
  //     const formData = new FormData();
  //     console.log(e.target.files[0]);
  //     formData.append("pdf", e.target.files[0]);
  //     try {
  //       const res = await uploadPaper(formData).unwrap();
  //       toast.success(res.message);
  //       console.log(res.file);
  //       setPath(res.file);
  //       console.log(path)
  //     } catch (err) {
  //       toast.error(err?.data?.message || err.error);
  //     }
  //   };

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
          <Link to="/pyqs/ug/cse">
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
          <Link to="/pyqs/ug/ece">
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
          <Link to="/pyqs/ug/electrical">
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
          <Link to="/pyqs/ug/mechanical">
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
          <Link to="/pyqs/ug/biomedical">
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
          <Link to="/pyqs/ug/biotech">
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
          <Link to="/pyqs/ug/civil">
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
          <Link to="/pyqs/ug/chemical">
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
