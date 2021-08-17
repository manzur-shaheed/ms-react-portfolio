// react
import React from "react";

import { Row, Col, Container, Form, Card, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <Container className="my-3 py-3" id="Contact">
      <Card>
        <Card.Header as="h3" className="text-center" style={{color:'green'}}>Contact Me</Card.Header>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label as="h6">Name:</Form.Label>
                  <Form.Control type="text" placeholder="Name"/>
                </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label as="h6">Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label as="h6">Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message here"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ContactForm;