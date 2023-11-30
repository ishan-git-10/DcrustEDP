import React from "react";
import {Row, Col, Container, Image } from 'react-bootstrap';
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    let currTime = new Date().getFullYear();
    return(
        <footer className="bg-dark text-light pt-5 mt-5">
        <Container>
            <Row>
                <Col md={6} className="d-flex justify-content-center">
                    <Image src={require("./images/ulogo.png")} className="logo-img-footer"></Image>
                    <h5 className='brand-div mt-2'>DCRUST, Murthal
                    <br />
                    <a href="https://twitter.com/MurthalDcrust" target="_blank" rel="noreferrer" className="social-link"><FaTwitter /> </a>
                    <a href="mailto:dcrustmurthal.edpcentre@gmail.com" target="_blank" rel="noreferrer" className="social-link"><IoMdMail /> </a>
                    <a href="https://www.facebook.com/officialdcrustm" target="_blank" rel="noreferrer" className="social-link"><FaFacebookF /> </a>
                    <br />
                    <span className="social-link">+91-130-2484095</span>
                    </h5>
                </Col>
                <Col md={6}>
                    <p className="pt-2 text-center">Designed and developed by
                    <br /> 
                    Ekta and Ishan.
                    </p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <hr className="border-light" />
                    <p className="text-center">Dcrust EDP ⓒ {currTime}</p>
                </Col>
            </Row>
        </Container>
    </footer>
    );
}

export default Footer;