import { useState, useEffect } from "react";
import { FaKey, FaUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Loading from "../Components/Loading";

// import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
// import { toast } from "react-toastify";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const [login, { isLoading }] = useLoginMutation();

  //   const { userInfo } = useSelector((state) => state.auth);

  //   const { search } = useLocation();
  //   const sp = new URLSearchParams(search);
  //   const redirect = sp.get("redirect") || "/";

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate(redirect);
  //     }
  //   }, [navigate, redirect, userInfo]);

  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await login({ email, password }).unwrap();
  //       dispatch(setCredentials({ ...res }));
  //       navigate(redirect);
  //     } catch (err) {
  //       toast.error(err?.data || err.error);
  //     }
  //   };

  return (
    <Row className="mt-5 d-flex justify-content-center px-4">
      <Col lg={4}>
        <h1 className="text-center text-primary fw-bolder">Login</h1>

        <Form className="my-5" autoComplete="off">
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
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaKey />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="fw-bold">
              Login
            </Button>
          </div>

          {/* {isLoading && <Loading />} */}
        </Form>
      </Col>
    </Row>
  );
};

export default LoginScreen;
