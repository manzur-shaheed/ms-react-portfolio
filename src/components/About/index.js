// react
import React from "react";

// import bootstrap components
import { Card, Container, Row, Col, Image } from "react-bootstrap";

// images and pdf
import me from "../../assets/images/ms.png";
import github from "../../assets/images/github.png";
import lnkd from "../../assets/images/lnkd.png";
import resume from "../../assets/images/resume.png";
import me_resume from "../../assets/ms_2021.pdf";

const About = () => {
  return (
    <Container className="my-3 py-3" id="About">
      <Card>
        <Card.Title>Manzur Shaheed</Card.Title>
        <Row>
          <Col>
            <Image src={ me } rounded />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                <p class="content" />
              Network Site Reliability Engineer (SRE). Extensive experience in planning, deploying and managing IT Infrastructure projects and in designing technical architecture for data communications networks. 
              <p />
              Have specific technical skills in data communications planning, network management systems and data network security. Strength in managing technical resources and alignment of information technology to business objectives.
              </Card.Text>
              <Card.Link href="https://www.linkedin.com/in/manzur-shaheed-9aa75926/" target="_blank"><Image src={lnkd} /></Card.Link>
              <Card.Link href="https://github.com/manzur-shaheed" target="_blank"><Image src={github} /></Card.Link>
              <Card.Link href={me_resume} target="_blank"><Image src={resume} /></Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;