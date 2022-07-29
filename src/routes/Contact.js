import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import fonts from "../styles/fonts.module.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.svg";

export default function Contact() {
  return (
    <Container style={{ marginBottom: 30 }}>
      <Row style={{ marginBottom: 50, marginTop: 20 }}>
        <h3 className={fonts.poppinssemibold}>connect with me</h3>
      </Row>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://github.com/prashkn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/prashant-n/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="message:pnaganab@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gmail} alt="gmail" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.instagram.com/accounts/login/?next=/prashantk.n/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" style={styles.img} />
              </a>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

const styles = {
  img: {
    width: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
};
