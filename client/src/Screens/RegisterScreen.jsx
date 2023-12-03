import { useState, useEffect } from "react";
import { FaEye, FaKey, FaUser } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./LoginScreen.css";
import Loading from "../Components/Loading";
import { useRegisterMutation } from "../slices/adminSlice";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/";

    // useEffect(() => {
    //   if (userInfo) {
    //     navigate(redirect);
    //   }
    // }, [navigate, redirect, userInfo]);

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const res = await register({ username, password }).unwrap();
        navigate(redirect);
      } catch (err) {
        console.log("error");
        toast.error(err?.data.message || err.error);
      }
    };

    const generatePassword = () => {
        const pass = Math.random().toString(36).slice(-8);
        setPassword(pass);
    };

    const viewPassword = () => {
        setCheck(!check);
    };

  return (
    <div className="login-container">
    <Row className="mt-5 d-flex justify-content-center px-4 py-3">
      <Col lg={4}>
        <h1 className="text-center text-primary fw-bolder">Register</h1>

        <Form className="my-5" onSubmit={submitHandler} autoComplete="off">
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Username</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <div className="d-flex justify-content-between align-items-center mb-2">
            <Form.Label>Password</Form.Label>
            <Button variant="secondary" className="w-40" onClick={generatePassword}>
                Generate Password
              </Button>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaKey />
              </InputGroup.Text>
              <Form.Control
                type={check ? "text" :"password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="light" className="border" onClick={viewPassword}>
                <FaEye />
              </Button>
              
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2 mt-4">
            <Button variant="primary" size="lg" type='submit' className="fw-bold">
              Register
            </Button>
          </div>

          {isLoading && <Loading />}
        </Form>
      </Col>
    </Row>

</div>
  );
};

export default RegisterScreen;
