import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";
import { motion } from "framer-motion";

export default function ProjectCard({
  header,
  description,
  sourcecode,
  githublink,
}) {
  return (
    <motion.div
      style={styles.motionbtn}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href={githublink}
        style={{ textDecoration: "none", color: "black" }}
        target="_blank"
        rel="noreferrer"
      >
        <Container>
          <Row>
            <Col xs={7}>
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
            <Col>
              <pre style={styles.pre}>
                <code style={styles.code}>{sourcecode}</code>
              </pre>
            </Col>
          </Row>
        </Container>
      </a>
    </motion.div>
  );
}

const styles = {
  pre: {
    background: "#454545",
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    scrollbarWidth: "none",
  },
  code: {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: 1.5,
    color: "#EDE3FC",
  },
};
