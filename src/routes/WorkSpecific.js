import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function WorkSpecific({ info }) {
  return (
    <Container>
      <Row style={{ marginBottom: 35, marginTop: 20 }}>
        <h3 className={fonts.poppinssemibold}>{info.companyheader}</h3>
        <h4 className={fonts.poppinsmedium}>{info.jobTitle}</h4>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          Outline
        </h4>
        <h6 className={fonts.poppinsmedium}>{info.outline}</h6>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          Work
        </h4>
        <h6 className={fonts.poppinsmedium}>{info.work1}</h6>
        <h6
          className={fonts.poppinsmedium}
          style={{ textDecoration: "underline" }}
        >
          Testing User Stories
        </h6>
      </Row>
    </Container>
  );
}
