import { useState } from "react";
import { FaBook, FaBookOpenReader, FaC } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAddPyqMutation, useUploadPdfMutation } from "../slices/adminSlice";
import Loading from "../Components/Loading";

const UploadPYQScreen = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [program, setProgram] = useState("");
  const [sem, setSem] = useState("");
  const [branch, setBranch] = useState("");
  const [path, setPath] = useState("");

  const navigate = useNavigate();

  const [uploadPaper, { isLoading: loadingUpload }] =
    useUploadPdfMutation();

    const [addPaper, {isLoading: loadingAdd}] =
    useAddPyqMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addPaper({
        name,
        code,
        sem,
        program,
        branch,
        path,
      }).unwrap();
      toast.success("Previous Year added successfully");
      navigate("/");
    } catch (err) {
      toast.error(err?.data || err.error);
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    console.log(e.target.files[0]);
    formData.append("pdf", e.target.files[0]);
    try {
      const res = await uploadPaper(formData).unwrap();
      toast.success(res.message);
      console.log(res.file);
      setPath(res.file);
      console.log(path)
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Row className="mt-5 d-flex justify-content-center px-4">
      <Col lg={4}>
        <h3 className="text-center text-primary fw-bolder">
          Add Previous Year Question Paper
        </h3>

        <Form className="my-5" autoComplete="off" onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Subject Name</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaBookOpenReader />
              </InputGroup.Text>
              <Form.Control
                placeholder="Enter Subject Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Subject Code</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaC />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Subject Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Label>Select Branch</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="mb-3"
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option>Select</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="electrical">Electrical</option>
            <option value="mechanical">Mechanical</option>
            <option value="biomedical">Biomedical</option>
            <option value="biotech">Biotech</option>
            <option value="civil">Civil</option>
            <option value="chemical">Chemical</option>
          </Form.Select>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Semester</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaBook />
              </InputGroup.Text>
              <Form.Control
                type="Number"
                placeholder="Enter Semester"
                onChange={(e) => setSem(e.target.value)}
                min={1}
                max={8}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Label>Select Program</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="mb-4"
            onChange={(e) => setProgram(e.target.value)}
            required
          >
            <option>Select</option>
            <option value="ug">UG</option>
            <option value="pg">PG</option>
          </Form.Select>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Upload PDF</Form.Label>
            <InputGroup className="mb-3">
            <Form.Control type="file" onChange={uploadFileHandler} required/>
            </InputGroup>
            {loadingUpload && <Loading />}
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="fw-bold"
            >
              Add PYQ
            </Button>
          </div>

          {/* {isLoading && <Loading />} */}
        </Form>
      </Col>
    </Row>
  );
};

export default UploadPYQScreen;
