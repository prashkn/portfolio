import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function TheCodingSchool() {
  return (
    <Container style={{ marginBottom: 30 }}>
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
          AP Computer Science A
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          Since AP CS A is a CollegeBoard course, my teaching sessions were very
          structured and focused on a few topics at a time. I was given a
          curriculum to go off of, but I led the sessions myself and was able to
          teach how I wanted to, as long as I hit the topics I needed to hit. My
          sessions usually consists of these parts:
        </h6>
        <ol className={fonts.poppinsregular} style={{ marginLeft: 50 }}>
          <li>
            Go over a concept. I would describe a data structure, or an
            algorithm, at a high level. I would then talk about how to declare
            this data structure, and how to initialize it. I would also talk
            about how to implement these data structures, such as the different
            methods (pop, add, push, etc.). If it was an algorithm, I would
            usually have a visual representation, with labels for each step
            along the way.
          </li>
          <li>
            I would then get into the coding aspect. I would have the student
            screen share their IDE, and walk through coding some of the
            different things I would describe, such as declaring and
            initializing the data structure. I would then move onto manipulating
            data through methods. I will give a prompt and a function signature,
            and have them take a stab at the prompt. If they need help, I will
            help them along the way, but not immediately. I believe struggling
            through the problem is important, and valuable to understanding the
            concept. After these prompts, I would then start a homework/mini
            project with them to do until the next class.
          </li>
        </ol>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Introduction to Android Studio
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          The student I taught this curriculum to did not know Java before
          coming into this course. Therefore, a lot of my AP CS A curriculum
          also carried over to these sessions. However, after teaching this
          student Java, I then started going into the Android Studio curriculum.
          This is how I would conduct each session:
        </h6>
        <ol className={fonts.poppinsregular} style={{ marginLeft: 50 }}>
          <li>
            First, I would go over a concept, as I did with the AP CS A
            curriculum. This could be dialogs, toasts, user authentication,
            Android Studio layouts, the MVC pattern, etc. I would go over what
            their purpose was, and then we would immediately go into coding it.
          </li>
          <li>
            Then, I would have the student share their screen and walk through
            implementing this concept into an Android Studio project. I would
            tell them how to implement a toast, or how to connect Firebase to
            your Android Studio project, etc.
          </li>
        </ol>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          I would hold my sessions like this for a long while, in order to get
          my student familiar with the different ways you can develop certain
          features. After I felt he was getting the hang of things, I had him
          start working on a long-term project. He came into the course wanting
          to create a mobile app, so I walked him through this process:
        </h6>
        <ol className={fonts.poppinsregular} style={{ marginLeft: 50 }}>
          <li>
            First, I had him list the different ideas he had. I gave him a week
            to do so, and he came back into the next session with all these
            ideas. Then, we went over each idea and he picked one that he
            thought was feasible and interesting to him.
          </li>
          <li>
            Then I had him get familiar with Figma. I wanted him to use Figma to
            create mockups of the app. I wanted him to get through this step so
            development would be a lot easier because he would always refer back
            to the mockups to make sure he was on the right track.
          </li>
          <li>
            Finally, I would give him the space to develop this app. Some
            sessions he would come in with many different updates, and I would
            help him debug certain features. In other sessions, he would develop
            during the session, and I would guide him along a certain feature.
            After each session, I would give him a task to work on during the
            week.
          </li>
        </ol>
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
            A lot of Android Studio
            <li style={{ marginLeft: 20 }}>
              As I held this job as a Computer Science Instructor, I actually
              learned a lot throughout the course. There were some features that
              I taught that I didn’t know well about until the week before. The
              curriculum held me accountable, and had me recheck some of my
              Android Studio skills.
            </li>
          </li>
          <li>
            How to guide and lead without micro-managing
            <li style={{ marginLeft: 20 }}>
              My interns and I were never asked to work on the expansion
              project. I was never asked to lead the yearbook initiative. If I
              hadn’t spoken up and took on responsibilities, I wouldn’t have
              learned as much as I did.
            </li>
          </li>
        </h6>
      </Row>
    </Container>
  );
}

const info = {
  companyheader: "The Coding School",
  jobTitle: "Mobile Development & AP Computer Science Instructor",
  outline:
    "The Coding School, or CodeConnects, is an online coding tutoring organization where students can learn how to code through summer camps or personalized 1-on-1 sessions. They have reached over 78,000 hours of coding instruction, and are teaching students all over the world.",
  work1:
    "I worked as a Computer Science Instructor, in which I taught Java to two high school students. For one of the students, I taught them the AP Computer Science A course, and for the other, I taught them an introduction to Android Studio and mobile development. I taught these courses once a week, for an hour each.",
};
