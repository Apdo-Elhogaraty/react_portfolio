import React from "react";
import my from "../assets/images/header-img.svg";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="HeroSection" id="Home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="welcome">
              <p>Welcome In My Portfolio</p>
            </div>

            <div className="myinfo">
              <h1>
                Hi! I'm Abdelrahman <br/> EL-Hogaraty ,{" "}
                  <Typewriter
                    words={[
                      "FrontEnd Developer",
                      "BackEnd Developer",
                      "FullStack Developer",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                  />
              </h1>
            </div>
            <p>
              Hello Everyone, I Have 2 Years Of Experience In Web Development .
            </p>
            <span>
              Let's Connect <BsArrowRightCircle />
            </span>
          </Col>
          <Col className="text-center">
            <img src={my} alt="my" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
