import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function UIUC() {
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
          Project 1: Machine learning application that determines recyclable
          items
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          The first project I worked on was a mobile app that allows users to
          type descriptions of their item. The app would then use the
          bag-of-words algorithm to determine whether or not the description
          describes a recyclable item or a non-recyclable item. A bag-of-words
          algorithm works by finding the percentage chance that each individual
          word would belong to one of two labels. It determines the chance with
          the training data. For example, if a large majority of the training
          data labeled the word “plastic” under the label “recyclable”, then
          when a user types in a sentence that includes the word “plastic”, the
          chance of the model predicting that item as “recyclable” goes up.
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          Another feature that the project had was a map that included pin
          points of specific places on campus with recyclable bins. We hoped
          that this would encourage users to recycle their items in nearby bins.
          We used the Google Maps API for this feature.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Project 2: Bike rack tracking mobile app
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          The second project that I led was a bike rack tracking app that showed
          users nearby bike racks. The application was written in React Native.
          To get the user’s current location and put that on a map, we used the
          Google Maps API. We used a dataset that held all the bike rack
          locations on campus to pin point where nearby bike racks were.
        </h6>
        <h6 className={fonts.poppinsregular}>
          As project manager, I was with the group from the creation of the
          idea, to the finished product. Below I listed a few key points during
          the entire process:
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Creating the idea and MVP
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          The first task was to create the idea and MVP of the semester long
          project. This was where a majority of the conflicts arose, and it was
          my job as the leader and project manager of the team to resolve any
          conflicts.
          <h6 className={fonts.poppinsregular}>
            The process of creating the idea:
          </h6>
          <li>
            I had each member of the group come up with a few ideas, about 3 to
            4 ideas.
          </li>
          <li>
            I then physically wrote each idea up on a whiteboard, and had
            everyone talk about their individual ideas and explain them further.
          </li>
          <li>
            I then went through each idea, and had all members list out some
            pros and cons of each idea. I then talked about the feasibility of
            each idea, and eliminated any idea that was simply not possible to
            develop within a few months.
          </li>
          <li>
            At this point, there was about 14-15 ideas. I had the members
            anonymously send me their top 3 ideas that they would want to work
            on.
          </li>
          <li>I would then choose the most popular idea.</li>
          There was some conflict within the group when the most popular idea
          was chosen. A member thought that the idea was too simple and not
          complex enough. To resolve this conflict, I had that member come up
          with a few features for the main feature that they thought would make
          the idea a bit more complex. I then had them in charge of that
          feature, so they could be challenged, while also working on the same
          idea that everyone else wanted.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Understanding team member’s strength and weaknesses
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          I had to understand what each member wanted to work on and what they
          were strong at. I talked to each member individually, and luckily I
          had a near even divide between the people who wanted to work on
          front-end vs back-end.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Sprint 0: Getting adjusting to the tech stack
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          I had the students research a few different frameworks and tech stacks
          and see which one they would want to learn. Both the groups arrived to
          a different tech stack because the members had experience in different
          languages. For example, the first group had more experience in
          Javascript, so they went with using React Native. The second group had
          more experience in Java, so they went with Android Studio.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Developing sprint goals
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          For each sprint, I had to set a vision or overall goal. Once I find a
          vision for the sprint, I could then start brainstorming some tasks
          that would achieve that vision. I would constantly refer back to the
          MVP document, to see if the tasks I was making align with the product
          MVP. Once I brainstormed a bunch of tasks, I would combine a few, or
          break up a few, to make sure each task was modular, and narrow enough
          to be done within a single sprint. After, I talked to the members of
          the group and let some of them pick up responsibilities they wanted to
          take on. After assigning each task to the members, I would make a
          quick run through to make sure each member had an equal size of
          responsibilities.
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
            People will put in their best effort when they are doing something
            they like.
            <li style={{ marginLeft: 20 }}>
              There was a sprint or two when I gave students a task that they
              didn’t really like. Unsurprisingly, these tasks didn’t really get
              done in an efficient manner. However, when I gave students tasks
              that they were really passionate about, or responsibilities that
              they wanted to learn about, they did a really good job with the
              task.
            </li>
          </li>
        </h6>
      </Row>
    </Container>
  );
}

const info = {
  companyheader: "University of Illinois",
  jobTitle: "CS 196 Project Manager",
  outline:
    "CS 196 is the freshman honors course for computer science at the University of Illinois. The course is only one credit hour, and the entire course is about working on one semester long project with a group of 3-4 other students, and a project manager. After doing well when I was taking the course, I was invited to apply as a PM.",
  work1:
    "I was a project manager for 2 different groups. For both groups, we worked in an agile environment, and used ClickUp as the project management software. The two projects I worked on are listed below.",
};
