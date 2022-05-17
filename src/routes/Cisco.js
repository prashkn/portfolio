import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import fonts from "../styles/fonts.module.css";

export default function Cisco() {
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
          Managing daily program events
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          I was the program manager for 20 externs in Raleigh, North Carolina.
          My main responsibility during my internship was to make sure the
          externship went smoothly. Therefore, all events, speakers, and
          challenges for the RTP location were all oversaw and managed by
          another intern and I. I was the direct point of contact for all 20 of
          those externs.
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          Each day consisted of a few talks, an event or two, and some time for
          the externs to work on a weekly challenge (presented on Friday). I
          would work with other interns across the country to organize events
          that would be held in every location in the United States and Canada.
          We also would organize the weekly challenge: a team challenge where
          externs would work on creating a solution for education during the
          Covid-19 era. It is very similar to a hackathon, but a 2-week long
          one.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Leading the yearbook team
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          As an intern, I led an initiative to create a end-of-program yearbook
          for all the students in every single location. We worked with a 3rd
          party, external company, completely separate from Cisco. Since I was
          the lead, I was the main point of contact for this other company to
          talk about this project. If the company had any questions about the
          layout of the yearbook, financial information of the yearbook, or
          quality of images for the yearbook, they would come to me. Throughout
          the entire process of creating this yearbook, I was the main
          representative of Cisco to this external company.
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          I made announcements to every location, and got pictures from every
          extern, intern, and Cisco lead for each location. I also was in charge
          of the layout of the yearbook, and creating pages that had information
          about the events, talks, and challenges that each location had.
        </h6>
        <h6
          className={fonts.poppinsregular}
          style={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          The Cisco Expansion Project
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          This program at the time was only available for United States and
          Canadian students. There was no way for LATAM students to be admitted
          into this program. A few other interns and I found this to be a
          problem, as we saw that not a lot of tech programs were accessible to
          students in South America.
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          After our work hours, we would meet to talk about proposing an
          Expansion project. The expansion project was an intern-led initiative
          to expand the Cisco High School program to Colombia. We were not asked
          to work on this project; instead we went to our manager and talked
          about the idea of proposing this idea to Cisco. She gave us the green
          light and we were able to work on the logistics of this idea, such as
          shipping laptops, creating program itinerary, proposing the idea to
          South American public institutions, and scouting interns, employees,
          and more.
        </h6>
        <h6 className={fonts.poppinsregular} style={{ marginLeft: 25 }}>
          I am really proud of this project because we went above and beyond and
          took a leadership role even when it was not asked of us. While our
          proposal had a lot of holes and a company as big as Cisco did not
          accept the proposal made by a few interns, I'm still proud of how we
          stepped up.
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
            Make the most out of the resources given to you
            <li style={{ marginLeft: 20 }}>
              I would have never gotten this internship opportunity if I didn’t
              make the most out of the resources I got. If I never worked late
              hours with my team, networked with employees at the company, and
              made the most out of every day, I would have never been invited
              back as an intern.
            </li>
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
  companyheader: "Cisco",
  jobTitle: "Program Management Intern",
  outline:
    "Cisco is a company focused on developing and selling networking, telecommunication, and cybersecurity solutions. Their new and rapidly growing solutions such as the WebEx has boosted the company into a Fortune 100 rating. Known for having one of the best work life balances and work cultures, Cisco has recently been ranked the 4th best company to work for.",
  work1:
    "My journey at Cisco first started off as an extern working for the company as a Junior in high school. This program allowed me to learn about the Cisco culture, sharpen up my technical skills in networking, and compete in the program’s weekly challenges. After winning Cisco’s final capstone project, placing top 3 in every other weekly challenge, and spending late nights at the office internally networking with the employees, I was one of the two externs in the location given the opportunity to intern at Cisco next summer as a Program Manager.",
};
