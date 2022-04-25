import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";
import ProjectCard from "../modules/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Container>
      <Row style={{ marginBottom: 50, marginTop: 20 }}>
        <h3 className={fonts.poppinssemibold}>what have i work on?</h3>
      </Row>
      <motion.div animate={{ x: 50 }} transition={{ delay: 0 }}>
        <Row>
          <ProjectCard
            header={projects.HANDML.header}
            description={projects.HANDML.description}
          />
        </Row>

        <Row style={{ marginTop: 30 }}>
          <ProjectCard
            header={projects.TTCWEB.header}
            description={projects.TTCWEB.description}
          />
        </Row>
        <Row style={{ marginTop: 30 }}>
          <ProjectCard
            header={projects.MENTALLYS.header}
            description={projects.MENTALLYS.description}
          />
        </Row>
        <Row style={{ marginTop: 30 }}>
          <ProjectCard
            header={projects.DISCORDBOT.header}
            description={projects.DISCORDBOT.description}
          />
        </Row>
      </motion.div>
    </Container>
  );
}

const projects = {
  HANDML: {
    header: {
      a: "machine learning model",
      b: "turns handwriting into text",
    },
    description:
      "used an SGD optimization with a 0.03 learning rate and 6000 training data to take drawing of numbers and predicts the number drawn. acheived a 92.74% accuracy rate.",
  },
  TTCWEB: {
    header: {
      a: "website",
      b: "attract hackers to one of the biggest hackathons",
    },
    description:
      "developed a website from start to finish for the chicago chapter of Tech Together, the nation’s largest hackathon organization focused on making the hackathon space more inclusive to marginalized groups.",
  },
  MENTALLYS: {
    header: {
      a: "mobile app",
      b: "plays music based on your mood",
    },
    description:
      "created an app with a team that asks a user a series of questions, and based on their answers, determines their mood. utilized the spotify api to query a playlist and play the user a playlist through the spotify app.",
  },
  DISCORDBOT: {
    header: {
      a: "discord bot",
      b: "keeps a discord server fun",
    },
    description:
      "made a node.js application tangent to the discord api to create a bot that has 10 or so commands. used in 3 servers with about 280 users total.",
  },
};
