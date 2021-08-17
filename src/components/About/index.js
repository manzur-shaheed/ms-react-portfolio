// react
import React from "react";

// import bootstrap components
import { Card, Container, Row, Col, Image } from "react-bootstrap";

// images and pdf
import me from "../../assets/images/ms.png";

const About = () => {
  return (
    <Container className="my-3 py-3" id="About">
      <Card>
        <Card.Header as="h3" className="text-center" style={{color:'green'}}>About Me</Card.Header>
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
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;