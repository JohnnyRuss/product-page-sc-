import React from "react";

import { ModalContainer } from "./styles/modal.styles";
import ModalSliderBTN from "./components/ModalSliderBTN";
import Slider from "./components/Slider";

import { SliderType } from "../../Interface/types";
interface ModalType {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<SliderType & ModalType> = ({
  images,
  thumbnails,
  activeIndex,
  handleSlider,
  setOpenModal,
}) => {
  return (
    <ModalContainer onClick={(e) => setOpenModal(false)}>
      <div className="content-box">
        <Slider
          isModalSlider={true}
          activeIndex={activeIndex}
          handleSlider={handleSlider}
          images={images}
          thumbnails={thumbnails}
        >
          <ModalSliderBTN
            activeIndex={activeIndex}
            handleSlider={handleSlider}
            setOpenModal={setOpenModal}
          />
        </Slider>
      </div>
    </ModalContainer>
  );
};

export default Modal;
