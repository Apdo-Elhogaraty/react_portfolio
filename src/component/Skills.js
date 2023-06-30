import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg"
import meter2 from "../assets/images/meter2.svg"
import meter3 from "../assets/images/meter3.svg"

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="skils" id="Skils">
      <div className="skils_box">
        <h2 className="sec_hedear">Skills</h2>
        <Carousel responsive={responsive}>
          <div className="item">
            <img src={meter1} alt="skil" srcset="" />
            <h5>Html & Html5</h5>
          </div>
          <div className="item">
            <img src={meter2} alt="skil" srcset="" />
            <h5>Css & Css3</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skil" srcset="" />
            <h5>Bootstrap</h5>
          </div>
          <div className="item">
            <img src={meter2} alt="skil" srcset="" />
            <h5>JavaScript</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skil" srcset="" />
            <h5>React Js</h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
