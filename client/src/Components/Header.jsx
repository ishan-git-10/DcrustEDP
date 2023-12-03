import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Image, Row, Col } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import { IoPerson } from "react-icons/io5";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import "./Header.css";


function Header() {

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-primary heading" data-bs-theme="dark">
        <Container>
        <Row >
                <Col lg className='header-div-center'>
                <Link to="/"><Image src={require("./images/ulogo.png")} className="logo-img"></Image>
                    <div className='brand-div'>
                        <h5 className='brand'>Deenbandhu Chhotu Ram University of Science and Technology</h5>
                        <br />
                        <h6 className='tag'>Murthal, Sonipat, Haryana, India (A Haryana State Government NAAC accredited University)</h6>
                    </div>
                    </Link>
                </Col>
        </Row>
        <Row>
        <Navbar collapseOnSelect expand="lg" className='justify-content-center'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center' >
          <Nav className='nav-links'>
            <LinkContainer to='/about'>
              <Nav.Link className="text-center nav-link">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/institutions'>
              <Nav.Link className="text-center nav-link">Institutions</Nav.Link>
            </LinkContainer>
            <NavDropdown className="text-center" title="Programmes" id="navbarScrollingDropdown">
              <NavDropdown.Item>
              <Link to="/ugprograms" className='deco'>PHD Programmes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/ugprograms" className='deco'>PG Programmes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/ugprograms" className='deco'>Dual Degree Programmes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/ugprograms" className='deco'>UG Programmes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/ugprograms" className='deco'>PG Diploma Programmes</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/ugprograms" className='deco'>Certificate Programmes</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to='/institutions'>
              <Nav.Link className="text-center nav-link">Rulebook</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link className="text-center nav-link">Contact</Nav.Link>
            </LinkContainer>
            

            {userInfo ? (
                <>
                  <NavDropdown className="text-center" title={userInfo.username} id='username'>
                    {/* <LinkContainer to='/profile'>
                      <NavDropdown.Item className="text-center">Profile</NavDropdown.Item>
                    </LinkContainer> */}
                    {/* <LinkContainer to='/orders'>
                      <NavDropdown.Item className="text-center">My Orders</NavDropdown.Item>
                    </LinkContainer> */}
                    <NavDropdown.Item className="text-center" onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>

                    {userInfo.isAdmin && <>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="text-center text-white" disabled>
                          Admin Features
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <LinkContainer to='/upload/pyqs'>
                        <NavDropdown.Item className="text-center">
                          Upload Previous Year Questions
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/register'>
                        <NavDropdown.Item className="text-center">
                          Register User
                        </NavDropdown.Item>
                      </LinkContainer>
                      {/* <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item className="text-center">
                          User List
                        </NavDropdown.Item>
                      </LinkContainer> */}
                    </>
                    }
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className="text-center nav-link"><IoPerson className='mb-1'/> Login</Nav.Link>
                </LinkContainer>
              )}

          </Nav>
          
        </Navbar.Collapse>
        </Navbar>
        </Row>
        </Container>
    </div>
        
  );
}

export default Header;