import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import './UGProgramsScreen.css'

const ugprograms = [
  {
    code: "001",
    name: "B.Tech. Computer Science and Engineering",
  },
  {
    code: "002",
    name: "B.Tech. Electrical Engineering",
  },
  {
    code: "003",
    name: "B.Tech. Electronics & Communication Engineering",
  },
  {
    code: "004",
    name: "B.Tech. Mechanical Engineering",
  },
  {
    code: "005",
    name: "B.Tech. Chemical Engineering",
  },
  {
    code: "006",
    name: "Bachelor of  Architecture",
  },
  {
    code: "007",
    name: "B.Tech. Bio Medical Engineering",
  },
  {
    code: "008",
    name: "B.Tech. Bio Technology",
  },
  {
    code: "009",
    name: "B.Tech. Civil Engineering",
  },
  {
    code: "010",
    name: "B.Tech. Information Technology",
  },
  {
    code: "011",
    name: "B.Tech. Instrumentation & Control",
  },
  {
    code: "012",
    name: "Bachelor of Architecture (Interior Designing)",
  },
  {
    code: "013",
    name: "	B.Tech. Electronics & Electrical Engineering (EEE)",
  },
  {
    code: "015",
    name: "B.Tech. Automobile Engineering",
  },
  {
    code: "016",
    name: "B.Tech. Aeronautical Engineering",
  },
  {
    code: "017",
    name: "BID- Bachelor of Interior Designing",
  },
  {
    code: "018",
    name: "	B.Tech. PLASTICS Engineering",
  },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
  // {
  //     code: "001",
  //     name: "B.Tech. Computer Science and Engineering",
  // },
];

function UGProgramsScreen() {
  return (
    <div className="border-2 border-start rounded-md object-fit-cover">
      <Table bordered className="table-border">
        <thead>
          <tr className="py-1">
            <th className="text-center align-middle object-fit-cover rounded-start table-bordered">Program Code</th>
            <th className="bg-primary text-white align-middle object-fit-cover">Program Name</th>
          </tr>
        </thead>
        <tbody>
        {ugprograms.map((program, index) => (
            <tr className="py-1">
              <td className="m-2 p-2 fw-bold text-center align-middle">
                {program.code}
              </td>
              <td className="bg-primary text-white m-2 p-2 align-middle col-color">
                {program.name}
              </td>
            </tr>
        ))}
        </tbody>
      </Table>
      {/* <Table className="my-4">
        <Row className="py-1 fw-bold">
          <Col lg={3} className="m-2 p-2 fw-bold text-center">
            Program Code
          </Col>
          <Col lg className="p-4">
            Program Name
          </Col>
        </Row>
        {ugprograms.map((program, index) => (
          <div className="p-2" key={index}>
            <Row className="py-1">
              <Col lg={3} className="m-2 p-2 fw-bold text-center">
                {program.code}
              </Col>
              <Col lg className="p-4 bg-primary text-white rounded">
                {program.name}
              </Col>
            </Row>
          </div>
        ))}
      </Table> */}
    </div>
  );
}

export default UGProgramsScreen;
