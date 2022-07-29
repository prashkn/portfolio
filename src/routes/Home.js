import { React } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import fonts from "../styles/fonts.module.css";
import { sizes } from "../styles/sizing.js";
import { motion } from "framer-motion";
import "../styles/Home.css";

export default function Home() {
  return (
    <Container className="containerx">
      <motion.div
        drag
        dragConstraints={{ top: -50, left: -50, right: 150, bottom: 0 }}
        style={styles.motiondiv}
        className="motion"
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
              cs @ illinois | incoming mobile swe intern @ metlife
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
      <div
        className="mobilev"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <Row style={styles.prashantnheader}>
          <Col>
            <h1 className={fonts.poppinssemibold} style={{ fontSize: "30px" }}>
              prashant naganaboyina
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={fonts.poppinssemibold} style={{ fontSize: "20px" }}>
              cs @ illinois | swe intern @ metlife
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className={fonts.poppinsregular} style={{ fontSize: "15px" }}>
              a sophomore attending the University of Illinois, interested in
              mobile app development and other client facing product
              development.
            </h3>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

const styles = {
  containertwo: {
    marginLeft: "5%",
    backgroundColor: "black",
  },
  motiondiv: {
    cursor: "pointer",
    marginLeft: "3%",
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
