import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import SlideWithGesture, { Slide } from "./SlideWithGesture";
// import SlideWithGesture from "./SlideWithGesture"; 
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;

  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = (props) => {
  const { slides, goToSlide, showNavigation, offsetRadius, animationConfig } = props;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        moveSlide(-1);
      }
      if (event.keyCode === 40) {
        moveSlide(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const modBySlidesLength = (index) => {
    return mod(index, slides.length);
  };

  const moveSlide = (direction) => {
    setIndex(modBySlidesLength(index + direction));
  };

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const getPresentableSlides = () => {
    let presentableSlides = [];
    let currentOffset = -offsetRadius;

    for (let i = 0; i < 2 * offsetRadius + 1; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + currentOffset)]);
      currentOffset++;
    }

    return presentableSlides;
  };

  let navigationButtons = null;
  if (showNavigation) {
    navigationButtons = (
      <NavigationButtons>
        <NavBtn onClick={() => moveSlide(1)}>&#8593;</NavBtn>
        <NavBtn onClick={() => moveSlide(-1)}>&#8595;</NavBtn>
      </NavigationButtons>
    );
  }

  return (
    <>
      <Wrapper>
        {getPresentableSlides().map((slide, presentableIndex) => (
          <div>hello there </div>
        ))}
      </Wrapper>
      {navigationButtons}
    </>
  );
}

VerticalCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      content: PropTypes.object,
    })
  ).isRequired,
  goToSlide: PropTypes.number,
  showNavigation: PropTypes.bool,
  offsetRadius: PropTypes.number,
  animationConfig: PropTypes.object,
};

VerticalCarousel.defaultProps = {
  offsetRadius: 2,
  animationConfig: { tension: 120, friction: 14 },
};

export default VerticalCarousel;
