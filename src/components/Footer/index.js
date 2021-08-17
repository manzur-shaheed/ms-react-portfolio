// react
import React from "react";

// import bootstrap components
import { Card, Container, Image } from "react-bootstrap";

// images and pdf
import github from "../../assets/images/github.png";
import lnkd from "../../assets/images/lnkd.png";
import resume from "../../assets/images/resume.png";
import me_resume from "../../assets/ms_2021.pdf";

const Footer = () => {
  return (
    <Container className="my-3 py-3" id="Footer">
      <Card border="light">
            <Card.Body className="text-center">
              <Card.Link href="https://www.linkedin.com/in/manzur-shaheed-9aa75926/" target="_blank"><Image src={lnkd} /></Card.Link>
              <Card.Link href="https://github.com/manzur-shaheed" target="_blank"><Image src={github} /></Card.Link>
              <Card.Link href={me_resume} target="_blank"><Image src={resume} /></Card.Link>
            </Card.Body>
      </Card>
    </Container>
  );
};

export default Footer;