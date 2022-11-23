import React from "react";

import { SliderBTN, SliderCloseBTN } from "../styles/slider.styles";

interface ModalSliderBTNType {
  activeIndex: number;
  handleSlider: (i: number) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSliderBTN: React.FC<ModalSliderBTNType> = ({
  activeIndex,
  handleSlider,
  setOpenModal,
}) => {
  return (
    <>
      <SliderCloseBTN onClick={() => setOpenModal(false)}>
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </SliderCloseBTN>
      <SliderBTN
        className="btn-prev"
        value={activeIndex - 1}
        onClick={(e) => {
          e.stopPropagation();
          handleSlider(+e.currentTarget.value);
        }}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </SliderBTN>
      <SliderBTN
        className="btn-next"
        value={activeIndex + 1}
        onClick={(e) => {
          e.stopPropagation();
          handleSlider(+e.currentTarget.value);
        }}
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </SliderBTN>
    </>
  );
};

export default ModalSliderBTN;
