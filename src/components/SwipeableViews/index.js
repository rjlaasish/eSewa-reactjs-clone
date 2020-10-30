import React from "react";
import SwipeableViews from "react-swipeable-views";
import "./style.css";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { autoPlay } from "react-swipeable-views-utils";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function MyCarousalItems({ children }) {
  var [index, setIndex] = React.useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  function onLeftPressed() {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  }
  const onRightPressed = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  const ImageItems = ({ imagePath }) => {
    return (
      <div className="image-Container">
        <img src={imagePath} alt="slider-pic" className="slider-image" />
      </div>
    );
  };

  return (
    <div className="my-container">
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <ImageItems imagePath={slide1} />
        <ImageItems imagePath={slide2} />
        <ImageItems imagePath={slide3} />
      </AutoPlaySwipeableViews>
      <div className="left-icon" onClick={onLeftPressed}>
        <div className="left-icon-bg"></div>
        <ChevronLeftIcon />
      </div>
      <div className="right-icon" onClick={onRightPressed}>
        <div className="right-icon-bg"></div>
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default MyCarousalItems;
