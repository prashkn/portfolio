import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";
import { motion } from "framer-motion";

export default function JobCard({
  company,
  jobTitle,
  date,
  description,
  imgsrc,
}) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
      <Container style={styles.card}>
        <Row>
          <Col>
            <img style={styles.img} src={imgsrc} alt="img" />
          </Col>
          <Col xs={9}>
            <Row className={fonts.poppinssemibold} style={styles.company}>
              {company}
            </Row>
            <Row className={fonts.poppinssemibold} style={styles.jobTitle}>
              {jobTitle}
            </Row>
            <Row className={fonts.poppinssemibold} style={styles.date}>
              {date}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className={fonts.poppinssemibold} style={styles.description}>
            {description}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

const styles = {
  card: {
    borderRadius: 10,
    marginBottom: 60,
  },
  company: {
    fontSize: 18,
  },
  jobTitle: {
    fontSize: 16,
    color: "#ac5afe",
  },
  date: {
    color: "#A3A3A3",
    marginTop: 7,
    fontSize: 12,
  },
  description: {
    marginTop: 20,
    fontSize: 14,
  },
  img: {
    height: 80,
    width: 80,
  },
};
