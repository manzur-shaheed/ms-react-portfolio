// react
import React from "react";

// import bootstrap components
import { Card, Container, Row, Col, Image, ListGroup } from "react-bootstrap";

// images and pdf
import me from "../../assets/images/ms.png";

const About = () => {
  return (
    <Container className="my-3 py-3" id="About" fluid>
      <Card>
        <Card.Header as="h3" className="text-center" style={{color:'green'}}>About Me</Card.Header>
        <Row>
          <Col>
            <Image src={ me } rounded />
          </Col>
          <Col>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Network Site Reliability Engineer (SRE). Extensive experience in planning, deploying and managing IT Infrastructure projects and in designing technical architecture for data communications networks. </ListGroup.Item>
                  <ListGroup.Item>Have specific technical skills in data communications planning, network management systems and data network security. Strength in managing technical resources and alignment of information technology to business objectives.</ListGroup.Item>

                  <ListGroup.Item>M.S (Computer Science), Asian Institute of Technology (AIT), Bangkok, Thailand.</ListGroup.Item>
                  <ListGroup.Item>B.S (Computer System Engineering), Odessa Polytechnic Institute (OPI), Odessa, Ukraine.</ListGroup.Item>
                  <ListGroup.Item>Currently attending Columbia Engineering Coding Boot Camp (Mar 2021 – Sep 2021).</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;