// react
import React from "react";

// import bootstrap components
import { Carousel, Container, Figure } from "react-bootstrap";

// images
import ac from "../../assets/images/abc_crypto.png";
import ag from "../../assets/images/ag_search.png";
import bt from "../../assets/images/budget_tracker.png";
import ft from "../../assets/images/fitness_tracker.png";
import tb from "../../assets/images/tech_blog.png";
import ec from "../../assets/images/ecommerce.png";
import et from "../../assets/images/employee_tracker.png";
import tp from "../../assets/images/team_profile_generator.png";
import nt from "../../assets/images/note_taker.png";

const Portfolio = () => {
  return (
    <Container id="Portfolio">
      <Carousel variant="dark">
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/Ir-p/ABC_Crypto" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://abc-crypto.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={ac} alt="ABC Crypto"/> 
              <Figure.Caption align="center">ABC Crypto</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/pmukhi12/Art-Gallery-Search" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://pmukhi12.github.io/Art-Gallery-Search/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={ag} alt="Art Gallery Search"/> 
              <Figure.Caption align="center">Art Gallery Search</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-progressive-budget" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://ms-progressive-budget.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={bt} alt="Budget Tracker"/> 
              <Figure.Caption align="center">Budget Tracker</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-fitness-tracker" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://ms-fitness-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={ft} alt="Fitness Tracker" /> 
              <Figure.Caption align="center">Fitness Tracker</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-tech-blog" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://manzur-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={tb} alt="Tech Blog" /> 
              <Figure.Caption align="center">Tech Blog</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-ecommerce-backend" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://drive.google.com/file/d/1I7FFazL89ueMeEuQGTbrOnoz3QutsIuz/view" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={ec} alt="E-Commerce Backend" /> 
              <Figure.Caption align="center">E-Commerce Backend</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-employee-tracker" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://drive.google.com/file/d/1NFPl5NwBWM6kKEk708Dae26MBMayARpR/view" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={et} alt="Employee Tracker" /> 
              <Figure.Caption align="center">Employee Tracker</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-team-profile-generator" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://drive.google.com/file/d/1jLAbYzBIuzytTycfBBPaeWNmKEw6ofr6/view" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={tp} alt="Team Profile Generator" /> 
              <Figure.Caption align="center">Team Profile Generator</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
        <Carousel.Item className="my-3 py-3 text-center">
          <p><a href="https://github.com/manzur-shaheed/ms-note-taker" target="_blank" rel="noreferrer">Code</a></p>
          <a href="https://manzur-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">
            <Figure>
              <Figure.Image src={nt} alt="Note Taker" /> 
              <Figure.Caption align="center">Note Taker</Figure.Caption>           
            </Figure>
          </a>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Portfolio;