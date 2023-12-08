import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./DisplayPYQScreen.css";
import { Link } from "react-router-dom";

const DisplayPYQScreen = () => {
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
          <h3 className="text-center text-primary fw-bolder">
            Previous Year Question Paper
          </h3>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center gap-4 px-4">
        <Col lg={4}>
          <Link to="/pyqs/ug" className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  UG
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col lg={4}>
          <Link to="/pyqs/pg" className="text-decoration-none">
            <Card bg="primary" text="white" className="cursor-pointer">
              <Card.Body>
                <Card.Title className="m-4 p-2 d-flex justify-content-center">
                  PG
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default DisplayPYQScreen;
