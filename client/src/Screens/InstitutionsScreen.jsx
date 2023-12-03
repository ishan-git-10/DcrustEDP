import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./InstitutionsScreen.css";

const institutions = [
    {
        code:"001",
        name:"DEENBANDHU CHHOTU RAM UNIVERSITY OF SC.& TECH., Murthal(Sonipat)"
    },
    {
        code:"002",
        name:"BHAGWAN MAHAVIR INSTITUTE OF ENGG. & TECH., FazilPur(Sonipat)"
    },
    {
        code:"003",
        name:"BHAGWAN PARSHU RAM COLLEGE OF ENGG., Gohana(Sonipat)"
    },
    {
        code:"004",
        name:"BHARAT INSTITUTE OF TECHNOLOGY, Mohana(Sonipat)"
    },
    {
        code:"005",
        name:"DARSH INSTITUTE OF ENGG. & TECHNOLOGY, Gohana(Sonipat)"
    },
    {
        code:"007",
        name:"DELHI INSTITUTE OF TECHNOLOGY & MANAGEMENT, Ganuar(Sonipat)"
    },
    {
        code:"008",
        name:"G.V.M.INSTITUTE OF TECHNOLOGY & MANAGEMENT, Sonipat"
    },
    {
        code:"009",
        name:"GATEWAY COLLEGE OF ARCHITECTURE & DESIGN, Sonipat"
    },
    {
        code:"010",
        name:"GATEWAY INSTITUTE OF ENGINEERING & TECHNOLOGY, Sonipat"
    },
    {
        code:"011",
        name:"HINDU COLLEGE OF ENGINEERING, Sonipat"
    },
    {
        code:"012",
        name:"HINDU INSTITUTE OF MANAGEMENT, Sonipat"
    },
    {
        code:"013",
        name:"INNOVATIVE INSTITUTE OF TECH. & MANAGEMENT"
    },
    {
        code:"014",
        name:"INTERNATIONAL INSTITUTE OF TECH. & BUSINESS, Jhundpur(Sonipat)"
    },
    {
        code:"015",
        name:"INTERNATIONAL INSTITUTE OF TECH.& MANAGEMENT, Murthal(Sonipat)"
    },
    {
        code:"016",
        name:"MAHAVEER SWAMI INSTITUTE OF TECHNOLOGY, Jagdishpur(Sonipat)"
    },
    {
        code:"017",
        name:"P.M. COLLEGE OF ENGINEERING, Kami(Sonipat)"
    },
    {
        code:"018",
        name:"ROYAL INSTITUTE OF MANAGEMENT & TECHNOLOGY, Chidna(Sonipat)"
    },
    {
        code:"019",
        name:"SHRI BALWANT INSTITUTE OF TECHNOLOGY, Pallri(Sonipat)"
    },
    {
        code:"021",
        name:"SOUTH POINT INSTITUTE OF TECH. & MANAGEMENT, Sonipat"
    },
    {
        code:"023",
        name:"TEK CHAND MANN COLLEGE OF ENGINEERING, Sonipat"
    },
    {
        code:"025",
        name:"HINDU SCHOOL OF ARCHITECTURE, Sonipat"
    },
    {
        code:"026",
        name:"SOUTH POINT SCHOOL OF ARCHITECTURE, Sonipat"
    },
    {
        code:"027",
        name:"P.M.COLLEGE OF ARCHITECTURE, Kami(Sonipat)"
    },
    {
        code:"507",
        name:"D.C.S. COLLEGE OF EDUCATION,Sonipat"
    },
    {
        code:"509",
        name:"G.V.M. COLLEGE OF EDUCATION (FOR GIRLS),Sonipat"
    },
    {
        code:"512",
        name:"HINDU COLLEGE OF EDUCATION,Sonipat"
    },
    {
        code:"525",
        name:"OM COLLEGE OF EDUCATION,Sonipat"
    },
    {
        code:"532",
        name:"SHIV KARAN COLLEGE OF EDUCATION,Sonipat"
    },
    {
        code:"518",
        name:"THE KRISHNA EDUCATION RESEARCH & TECHNOLOCAL INSTT.,Sonipat"
    },
    {
        code:"537",
        name:"TIKA RAM COLLEGE OF EDUCATION,Sonipat"
    },
    {
        code:"538",
        name:"VENKTESHWARA COLLEGE OF EDUCATION,Sonipat"
    },
    {
        code:"539",
        name:"RENU VIDYA MANDIR,Sonipat"
    },
    {
        code:"029",
        name:"CIPET (Central Institute of Plastics Engineering & Technology) ,Sonipat"
    }
]


function InstitutionsScreen() {
  return (
    <>
    <div className="mt-4 table-width">
      <h3 className="text-center mb-4">Institutions</h3>
      <Table bordered className="table-border ">
        <thead>
          <tr className="py-1">
            <th className="text-center align-middle object-fit-cover rounded-start table-bordered">Institution Code</th>
            <th className="bg-primary text-white align-middle object-fit-cover">Institution Name</th>
          </tr>
        </thead>
        <tbody>
        {institutions.map((institution, index) => (
            <tr className="py-1">
              <td className="m-2 p-2 fw-bold text-center align-middle">
                {institution.code}
              </td>
              <td className="bg-primary text-white m-2 p-2 align-middle col-color">
                {institution.name}
              </td>
            </tr>
        ))}
        </tbody>
      </Table>
    </div>
      </>
  );
}

export default InstitutionsScreen;
