import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function Stanford() {
  return (
    <Container>
      <Row style={{ marginBottom: 35, marginTop: 20 }}>
        <h3 className={fonts.poppinssemibold}>{info.companyheader}</h3>
        <h4 className={fonts.poppinsregular}>{info.jobTitle}</h4>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          Outline
        </h4>
        <h6 className={fonts.poppinsregular}>{info.outline}</h6>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          Work
        </h4>
        <h6 className={fonts.poppinsregular}>{info.work1}</h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Summarizing the lecture:
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          Each week, I prepared a slide deck that went over the current week’s
          lecture. It would be about a 20 slide presentation, going over
          material such as debugging, file manipulation, image manipulation, and
          conditional statements. I would leave moments to check in with each
          student and see if they had questions. Once I made sure that they had
          a basic fundamental understanding of the material, I would then dive
          into the homework they did over before the section.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Going over the homework:
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          The students and I worked on a platform where we could code together
          in real time. I would pull up the homework question and walk through
          the prompt. Then, I would have them list out concepts from the
          presentation and lecture that we would need to use for the homework
          question. I would then give the students an opportunity to take a stab
          at it, and help them along the way with syntax and any errors they
          got. After the students got a working answer, I asked them to find
          ways to clean up the code and make the codebase more readable. I would
          then end this part of the section by going over the code, and pointing
          out the concepts that we learned.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Leading the coding challenge:
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          This was the bulk of the discussion section. There was a few coding
          challenges throughout each week. I would start off by reading the
          prompt and asking the students to break down the prompt into small
          coding tasks. Usually, this was the longest part, because
          understanding a large prompt and breaking it down into codable tasks
          is most of the times harder than actually coding. Then, students would
          take turns talking, and coding a small portion of the overall
          challenge. Debugging is a hard step in the coding process, and I would
          guide students if there was a huge issue that they could not solve.
          Otherwise, I let them struggle with debugging because I believe it is
          a very important skill to learn.
        </h6>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          What I learned
        </h4>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          <li>
            Teaching is hard.
            <li style={{ marginLeft: 20 }}>
              To be honest, I would be really scared before each section because
              I didn’t know if I could answer every question that the students
              would have. I was also really scared because I was a college
              freshman teaching students at Stanford how to code. I barely even
              knew how to code myself! So teaching definitely instilled some
              imposter syndrome that I already had, and it was definitely hard
              to overcome. But I believe I earned every position I ever had, so
              I overcame this fear eventually.
            </li>
            <li style={{ marginLeft: 20 }}>
              At the time, I was pretty confident in my python skills,
              especially for an introductory class because I already knew the
              material well. However, the teaching part was really hard for me,
              because it was the first time I led a class of multiple students
              in it. However, I just led each section with confidence and
              answered each question honestly, and I felt as though I became a
              good enough section lead after “faking” it.
            </li>
          </li>
        </h6>
      </Row>
    </Container>
  );
}

const info = {
  companyheader: "Stanford",
  jobTitle: "Python Section Lead",
  outline:
    "Code in Place is a Stanford initiative based off their introductory python class, CS 106A. It is an online month-long course, with weekly lectures and homework, just like any other college course. I was a Teaching Assistant, or as Code in Place calls it, a Section Lead. I was in charge of a discussion section, which consisted of 10 students.",
  work1:
    "I had multiple sessions where I had to learn from Stanford professors, how to conduct a safe classroom where learning is the main concern. I had a discussion section with 10 students, each week. Each section consisted of multiple parts:",
};
