import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col className="justify-content-end" style={fonts.poppinssemibold}>
          Made with React.
        </Col>
      </Row>
    </Container>
  );
}
