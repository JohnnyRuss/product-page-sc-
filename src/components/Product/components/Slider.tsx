import React from "react";

import { SliderActiveFig, SliderThumbs } from "../styles/slider.styles";

import { SliderType } from "../../../Interface/types";
interface SliderTypeLocal {
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  isModalSlider?: boolean;
  children?: React.ReactNode;
}

const Slider: React.FC<SliderType & SliderTypeLocal> = ({
  activeIndex,
  handleSlider,
  images,
  thumbnails,
  setOpenModal,
  children,
  isModalSlider,
}) => {
  return (
    <>
      <SliderActiveFig
        data-slider-active-fig
        isModalSlider={isModalSlider || undefined}
        onClick={(e) => {
          e.stopPropagation();
          setOpenModal && setOpenModal(true);
        }}
      >
        {images?.map(
          (img, i) =>
            i === activeIndex && (
              <img src={img} key={`slider-active--fig---${img}`} alt="product" />
            )
        )}
        {children}
      </SliderActiveFig>
      <SliderThumbs data-slider-thumbs>
        {thumbnails?.map((thumb, i) => (
          <figure
            key={thumb}
            className={`thumbnails-box__item ${
              activeIndex === i ? "thumbnails-box__item--active" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleSlider(i);
            }}
          >
            <img src={thumb} alt="product thumbnail" />
          </figure>
        ))}
      </SliderThumbs>
    </>
  );
};

export default Slider;
