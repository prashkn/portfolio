import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function AbbVie() {
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
          Testing User Stories
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          {info.work2}
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Developing user stories
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          Per sprint, I was given features to work on alongside my testing. Here
          are a few features I developed:
          <li>
            Create search for agreement method that returns a list of objects
            that fit the user’s criteria
          </li>
          <li>
            Create a feature to update a field on a record when a user creates a
            new contract. Update the field with a hyperlink to a pdf of the
            contract recently added.
          </li>
          <li>
            Create a feature that would automatically delete any empty drafts
            created by a user if there was already a draft of a contract in the
            works by that user.
          </li>
          <li>
            Create a pop-up validation method that would validate whether a
            user’s input for a pop up is valid or not.
          </li>
          All of these features and methods were given the green flag by the
          team manager and put into the sprint for testing by developers and
          another intern.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Creating proof of concepts
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          The original responsibilities of my internship was the help develop
          small features, help develops find bugs, and test user stories in the
          sprint. However, after seeing many different suppliers on the platform
          with records in non-English languages, I thought there would be a
          benefit for English speaking teams to see records in their prefered
          language. I brought up the concept to my manager, and he gave me the
          opportunity to work on this proof of concept.
          <li>
            Automate the supplier name translation process: Created an feature
            that translate a supplier’s name if it is ever detected as a
            language other than English. I used AWS’s Translation API to detect
            the current language, and turn it into English. I would then update
            the field using an apex trigger with the new updated name.
          </li>
          <li>
            Automate the user creation process: Created a feature that would
            automatically create a user whenever a contact was created for them.
            For example, when a member on the platform created a contact with
            their email, my feature would automatically create a user under that
            email so that that contact can log onto the system to see where the
            contract is in the process, see all the users involved in their
            specific contract, etc. On creation of a contact, I would check to
            see if the active user checkbox was created. Then I would query and
            grab the contact’s information such as email, name, and license
            type. I would first get the unique information such as their email.
            I would turn this email into a unique id, and then create the user.
            Once I created the user, I called a method that I created which
            would assign the correct permissions to the usre based on the
            license type their contact was under.
          </li>
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
            The more questions you ask, the faster you will learn: There is no
            such thing as a dumb question. Even if there was, it is probably
            better you ask it rather than wait and pretend like you know what
            you're doing. When I first started working as a Salesforce Developer
            in the summer of 2021, I never developed on the platform before. I
            didn't know what SOQL was, how an Apex Trigger worked, or what a
            Batch Job was. It was only through asking questions constantly that
            I learned fast and was able to pick up on things easily and started
            to better work with my team.
          </li>
          <li>
            How to work in an agile environment: Our team was run in an agile
            environment, and I got to learn the pros and cons to this way of
            working. Overall, I thought it was a very good fit for our team,
            since we were constantly updating old features, and iterating on
            certain things according to our production users’ responses.
          </li>
        </h6>
      </Row>
    </Container>
  );
}

const info = {
  companyheader: "AbbVie",
  jobTitle: "Salesforce Developer Intern",
  outline:
    "AbbVie is one of the largest biopharmaceutical companies. While I was at AbbVie, I worked as a Salesforce Developer intern, developing and modifying code on the Salesforce platform for the Apttus Team. My team and I worked on a contract lifecycle management system. In short, my team and I helped other teams create, send out, track, and receive contracts with ease.",
  work1:
    "At AbbVie, I worked on a real team with a real impact. We made it easier for people to get contracts out faster, directly impacting their response times. I helped people create, send out, track, and receive contracts much faster than they have usually have in the past. My team consisted of 3 full time developers, 2 interns, a manager, and a project manager.",
  work2:
    "Per sprint, I would test around 10 to 11 user stories through both automated testing, and testing through the platform. After a developer would finish their first round of creating a feature, it would be sent to me to test. I would then create tests to these user stories, find bugs, and then document them on a word document. At the end of my testing, I would try to fix each error. Honestly, there were errors that I couldn't fix, but there were some that I could fix. If I fixed an error, I included the fix in my word document, with an outline of the output and the code. I would then send the document to the developer in charge of the story.",
};
