import React from "react";

import { SliderOutContainer } from "./styles/slider.styles";
import Slider from "./components/Slider";

import { SliderType } from "../../Interface/types";
interface SliderTypeLocal {
  activateModalSlider?: () => void;
  // setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SliderOut: React.FC<SliderType & SliderTypeLocal> = ({
  images,
  thumbnails,
  activeIndex,
  handleSlider,
  activateModalSlider,
}) => {
  return (
    <SliderOutContainer>
      <Slider
        activeIndex={activeIndex}
        handleSlider={handleSlider}
        images={images}
        thumbnails={thumbnails}
        activateModalSlider={activateModalSlider}
      />
    </SliderOutContainer>
  );
};

export default SliderOut;
