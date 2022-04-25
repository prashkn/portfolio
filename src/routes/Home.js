import { React } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import fonts from "../styles/fonts.module.css";
import { sizes } from "../styles/sizing.js";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container style={styles.container}>
      <motion.div
        drag
        dragConstraints={{ top: -50, left: -50, right: 150, bottom: 0 }}
        style={styles.motiondiv}
      >
        <Row style={styles.prashantnheader}>
          <Col>
            <h1 className={fonts.poppinssemibold} style={sizes.bigheader}>
              prashant naganaboyina
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={fonts.poppinssemibold}>
              cs @ illinois | software engineer intern @ capital one
            </h1>
          </Col>
        </Row>
        <Row style={styles.caption}>
          <Col>
            <h3 className={fonts.poppinsregular}>
              a sophomore attending the University of Illinois, interested in
              mobile app development and other client facing product
              development.
            </h3>
          </Col>
        </Row>
      </motion.div>
      <Row style={styles.buttonplacement}>
        <Col>
          <motion.button
            style={styles.motionbtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/Contact">
              <Button
                className={fonts.poppinssemibold}
                variant="primary"
                size="lg"
                active
                style={styles.button}
              >
                reach out
              </Button>
            </Link>
          </motion.button>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    marginLeft: "5%",
  },
  containertwo: {
    marginLeft: "5%",
    backgroundColor: "black",
  },
  motiondiv: {
    cursor: "pointer",
  },
  prashantnheader: {
    marginTop: "15%",
  },
  caption: {
    marginTop: "3%",
    marginRight: "30%",
  },
  buttonplacement: {
    marginTop: "3%",
  },
  button: {
    backgroundColor: "#AC5AFE",
    borderRadius: 15,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 60,
    paddingRight: 60,
    borderWidth: 0,
    fontSize: 26,
  },
  motionbtn: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 0,
  },
};
