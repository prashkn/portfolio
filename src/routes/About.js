import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import friends from "../assets/friends.jpeg";
import bags from "../assets/bags.jpeg";
import dpack from "../assets/dpack.jpeg";
import myeverything from "../assets/myeverything.jpeg";
import myeverything2 from "../assets/myeverything2.jpeg";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";

export default function About() {
  return (
    <Container style={{ marginBottom: 30 }}>
      <Row style={{ marginBottom: 50, marginTop: 20 }}>
        <h3 className={fonts.poppinssemibold}>who am i?</h3>
      </Row>
      <motion.div animate={{ x: 40 }} transition={{ delay: 0 }}>
        <Row>
          <Col>
            <img style={styles.img} src={friends} alt="img" />
          </Col>
          <Col className={fonts.poppinssemibold}>
            hello!! i'm{" "}
            <span style={{ color: "#AC5AFE" }}>
              prashant, a 19 year old from cary, north carolina.
            </span>{" "}
            i currently attend university in illinois.{" "}
            <span style={{ color: "#AC5AFE" }}>
              i have a cat named bagheera
            </span>
            , who my family and i adopted in december 2021. in my past time, i
            really enjoy watching trashy tv with my friends and trying new foods
            in new places. most of my days consist of walking to my nearest
            coffee shop, grabbing a coffee and working there for most of the
            day, and then finally eating dinner with my friends at one of our
            apartments.
          </Col>
          <Col>
            <img style={styles.img} src={myeverything} alt="img" />
          </Col>
        </Row>
      </motion.div>
      <motion.div animate={{ x: -40 }} transition={{ delay: 0 }}>
        <Row style={{ marginTop: 30 }}>
          <Col
            style={{ marginLeft: 70 }}
            xs={3}
            className={fonts.poppinssemibold}
          >
            i'm currently a{" "}
            <span style={{ color: "#AC5AFE" }}>
              sophomore at the university of illinois studying computer science
            </span>
            . i was a{" "}
            <span style={{ color: "#AC5AFE" }}>
              software engineering intern at capital one
            </span>
            . while i was there, i was on the tdmcli team, which created
            infrastructure that helped teams manipulate and condition credit
            card test data in bulk. now i am about to start{" "}
            <span style={{ color: "#AC5AFE" }}>
              working at metlife as a software engineer on their mobile team
            </span>
            .
          </Col>
          <Col>
            <img style={styles.img} src={myeverything2} alt="img" />
          </Col>
          <Col>
            <img style={styles.img} src={bags} alt="img" />
          </Col>
          <Col>
            <img style={styles.img} src={dpack} alt="img" />
          </Col>
        </Row>
      </motion.div>
      <motion.div animate={{ x: 40 }} transition={{ delay: 0 }}>
        <Row style={{ marginTop: 50 }}>
          <Col lg={4}>
            <Row>
              <Col>
                <h4 className={fonts.poppinssemibold}>my to-do list</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                {todo.map((bulletpoint) => (
                  <FormControlLabel
                    control={<Checkbox defaultChecked={false} />}
                    label={bulletpoint}
                  />
                ))}
              </Col>
            </Row>
          </Col>
          {/*
          <Col>
            <h4 className={fonts.poppinssemibold}>A bit more about me</h4>
            <Row>
              <img
                style={{ marginLeft: 10, marginRight: 10 }}
                src={plant}
                alt="img"
              />
              <img
                style={{ marginLeft: 10, marginRight: 10 }}
                src={vg}
                alt="img"
              />
            </Row>
          </Col>
          */}
        </Row>
      </motion.div>
    </Container>
  );
}

const styles = {
  img: {
    height: 250,
  },
};

const todo = [
  "create more projects",
  "continue to travel during college and eat good food with some friends 😋",
  "learn more about companies and programs that i may want to apply to for summer 2023",
  "start journaling again",
  "learn how to make good coffee",
];
