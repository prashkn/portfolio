import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function ProjectCard({ header, description, github_link }) {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <h1 className={fonts.poppinssemibold} style={{ fontSize: 20 }}>
            a <span style={{ backgroundColor: "#EDE3FC" }}>{header.a}</span>{" "}
            that <span style={{ color: "#AC5AFE" }}>{header.b}</span>.
          </h1>
          <Row style={{ marginRight: "28%" }}>
            <h2 class={fonts.poppinsmedium} style={{ fontSize: 14 }}>
              {description}
            </h2>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
