import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function CapitalOne() {
  return (
    <Container style={{ marginBottom: 30 }}>
      <Row style={{ marginBottom: 35, marginTop: 20 }}>
        <Col>
          <h3 className={fonts.poppinssemibold}>{info.companyheader}</h3>
          <h4 className={fonts.poppinsmedium}>{info.jobTitle}</h4>
        </Col>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          Coming Soon!
        </h4>
        <h6 className={fonts.poppinsmedium}>
          Until then, please check my{" "}
          <a
            href="https://www.linkedin.com/in/prashant-n/"
            target="_blank"
            rel="noopener"
          >
            linkedin
          </a>{" "}
          for information on my experience at Capital One.
        </h6>
      </Row>
    </Container>
  );
}

const info = {
  companyheader: "Capital One",
  jobTitle: "Software Engineer Intern",
  outline: "",
  work1: "",
};
