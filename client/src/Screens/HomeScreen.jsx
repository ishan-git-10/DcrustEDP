import React from "react";
import {Carousel, Image, Row, Col, ListGroup } from 'react-bootstrap';
import "./HomeScreen.css";

function HomeScreen() {
    return (
        <div>
            <Row className="mt-4 mb-5">
                <Carousel fade variant="dark">
                        <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col lg className="d-flex justify-content-center">
                                        <Image src={require("./images/slide1.jpg")} className="car-image" rounded/>     
                                    </Col>                                    
                                </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col lg className="d-flex justify-content-center">
                                        <Image src={require("./images/slide2.jpg")} className="car-image" rounded />     
                                    </Col>                                    
                                </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col lg className="d-flex justify-content-center">
                                        <Image src={require("./images/slide3.jpg")} className="car-image" rounded />     
                                    </Col>                                    
                                </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col lg className="d-flex justify-content-center">
                                        <Image src={require("./images/slide4.jpg")} className="car-image" rounded />     
                                    </Col>                                    
                                </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                                <Row className="d-flex justify-content-center">
                                    <Col lg className="d-flex justify-content-center">
                                        <Image src={require("./images/slide5 (2).jpg")} className="car-image" rounded />     
                                    </Col>                                    
                                </Row>
                        </Carousel.Item>
                </Carousel>
            </Row>
            <hr className="mt-4 mb-4" />
            <Row>
                <Col lg={5} className="col-margin">
                    <Row>
                        <h3 className="mb-4">
                            Downloads
                        </h3>
                        <ListGroup className="mb-4">
                            <ListGroup.Item variant="secondary" action href="#link1">
                            Previous question papers
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href="#link2">
                            Official Transcript
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href="#link2">
                            Duplicate Certificates
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href="#link2">
                            Provisional Degree
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href="#link2">
                            Correction in Certificates
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                    <hr />
                    <Row>
                        <h3 className="mb-4">
                            Datesheet
                        </h3>
                        <ListGroup className="mb-4">
                            <ListGroup.Item variant="secondary" action href="#link1">
                            August/September Examination 2023-Revised - Bachelors of Technology 'C' Scheme
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href="#link2">
                            B.Sc.(Hons) - M.Sc. Dual degree
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>

                </Col>
                <Col className="col-margin">
                    <h3 className="mb-4">
                        Highlights
                    </h3>
                    <ListGroup as="ol" numbered >
                        <ListGroup.Item variant="success" action href="#link1">
                        Student's Grievances Cell (Exams)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#link2">
                        NOTIFICATION 2 - In continuation of this office Notification Endst. No. DCRUST/Conduct/5231-5280 dated 16.10.2023, it is notified that the last date of submission of online re-appear examinations form is hereby extended upto 30.11.2023 with late fee of Rs. 500/-. (DCRUST/Conduct/5766-5815 dated 28.11.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#link3">
                        Notification regarding Main & Re-appear examinations of UG and PG Programs (Educational) to be held in December 2023/ February 2024 (DCRUST/Conduct/5702-5751 dated 20.11.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#link4">
                        Notice Regarding Mercy Chance December 2023 Examinations (DCRUST/Conduct/5651-5700 dated 17.11.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#link5">
                        Notification regarding Main & Re-appear examinations of UG, PG Programs, Dual Degree & Ph.D Course Work to be held in December 2023 (DCRUST/Conduct/5231-5280 dated 16.10.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="#link6">
                        Regarding Re-evaluation of Answer Scripts and Inspection of Answer Scripts by the concerned students for the odd semester of Jan. 2023 (DCRUST/Re-evaluation/38 dated 19.07.2023)
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <hr className="mt-4 mb-4" />
        </div>
    );
}

export default HomeScreen;