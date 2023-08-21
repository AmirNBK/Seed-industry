import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

const slides = [
  {
    key: 1,
    content: "1",
  },
  {
    key: 2,
    content: "2",
  },
  {
    key: 3,
    content: "2",
  },
  {
    key: 4,
    content: "3",
  },
  {
    key: 5,
    content: "4",
  },
  {
    key: 6,
    content: "5",
  },
  {
    key: 7,
    content: "6",
  },
  {
    key: 8,
    content: "7",
  },
];

const VerticalCarouselSecond = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(false);
  const [animationConfig] = useState(config.slow);

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        background: "#7FfFbF",
      }}
    >
      <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default VerticalCarouselSecond;
