import React from "react";
import {Carousel, Image, Row, Col, ListGroup } from 'react-bootstrap';
import Transcript from "../downloads/Transcript.pdf"
import ProvisionalDegree from "../downloads/ProvisionalDegree.pdf"
import CorrectionCertificates from "../downloads/CorrectionCertificates.pdf"
import Duplicate from "../downloads/Duplicate.pdf"
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
                            <ListGroup.Item variant="secondary" action href="/pyqs">
                            Previous question papers
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href={Transcript} download="Official Transcript">
                            Official Transcript
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href={Duplicate} download="Duplicate Certificate">
                            Duplicate Certificates
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href={ProvisionalDegree} download="Provisional Degree">
                            Provisional Degree
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href={CorrectionCertificates} download="Correction Certificate">
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
                            <ListGroup.Item variant="secondary" action href="https://www.dcrustedp.in/datesheet/c_btech_3_5_7_8_dec_2023.pdf" target="_blank">
                            Bachelors of Technology 'C' Scheme
                            </ListGroup.Item>
                            <ListGroup.Item variant="secondary" action href="https://www.dcrustedp.in/datesheet/c_mtech_1_2_3_dec_2023.pdf" target="_blank">
                            Masters of Technology 'C' Scheme
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>

                </Col>
                <Col className="col-margin">
                    <h3 className="mb-4">
                        Highlights
                    </h3>
                    <ListGroup as="ol" numbered >
                        <ListGroup.Item variant="success" action href="/contact" target="_blank">
                        Student's Grievances Cell (Exams)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="https://dcrustedp.in/pdf/notification%202%20date%20extended%20upto%2030.11.2023%20reappear%20exam%20dec%202023.pdf" target="_blank">
                        NOTIFICATION 2 - In continuation of this office Notification Endst. No. DCRUST/Conduct/5231-5280 dated 16.10.2023, it is notified that the last date of submission of online re-appear examinations form is hereby extended upto 30.11.2023 with late fee of Rs. 500/-. (DCRUST/Conduct/5766-5815 dated 28.11.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="https://dcrustedp.in/pdf/notification%203%20date%20extended%20upto%2005.12.2023%20reappear%20exam%20dec%202023.pdf" target="_blank">
                        Notification regarding Main & Re-appear examinations of UG and PG Programs (Educational) to be held in December 2023/ February 2024 (DCRUST/Conduct/5702-5751 dated 20.11.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="https://www.dcrustedp.in/pdf/notification%204%20main%20exam%20b.tech%20b.arch%201st%20sem%20dec%202023%20jan%202024.pdf" target="_blank">
                        Notification 4 - Regarding Main Examinations of UG (B.Tech./B.Arch. 1st Semester) to be held in January 2024 (DCRUST/Conduct/6604-6653 dated 06.12.2023)
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="https://www.dcrustedp.in/pdf/Notice%20For%20Improvement%20Exam%20...pdf" target="_blank">
                        Notice for Improvement
                        </ListGroup.Item>
                        <ListGroup.Item variant="success" action href="https://www.dcrustedp.in/pdf/mercy%20chance%20notice%20december%202023%20exam.pdf" target="_blank">
                        Notice Regarding Mercy Chance December 2023 Examinations (DCRUST/Conduct/5651-5700 dated 17.11.2023)
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <hr className="mt-4 mb-4" />
        </div>
    );
}

export default HomeScreen;