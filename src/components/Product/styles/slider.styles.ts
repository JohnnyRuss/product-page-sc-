import styled, { keyframes } from "styled-components";
import {
  flexBox,
  flexProperty,
  fadeHover,
  activeThumb,
} from "../../../styles/helpers.styled";
import { media } from "../../../styles/media.styled";

const scaler = keyframes`
  0%{
    transform:scale(1.1);
    opacity:0;
  }

  100%{
    transform:scale(1);
    opacity:1;
  }
`;

export const SliderOutContainer = styled.div`
  flex: 1;

  ${media.desktop`
    width:35%;
    min-width:35%;
    flex: none;
  `}

  ${media.phone`
    width:60%;
  `}

  ${media.phoneSmall`
    width: 100%;
  `}
`;

export const SliderActiveFig = styled.div<{ isModalSlider?: boolean }>`
  position: relative;
  width: ${({ isModalSlider }) => (isModalSlider ? "45rem" : "100%")};
  aspect-ratio: 1/1;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;

  ${media.phoneSmall`
    width:100% !important;
  `}

  img {
    display: inline-block;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: inherit;
    margin-bottom: -0.4rem;
    animation: ${scaler} 0.25s ease-out forwards;
  }

  ${({ isModalSlider }) => media.tablet`
    width: ${isModalSlider ? "40rem" : ""};
  `}
`;

export const SliderThumbs = styled.div`
  width: 100%;
  ${flexBox({})};
  gap: 1rem;
  margin-top: 2rem;

  .thumbnails-box__item {
    flex: 1;
    aspect-ratio: 1/1;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    box-sizing: content-box;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &--active {
      ${activeThumb}
    }

    :hover:not(.thumbnails-box__item--active) {
      ${fadeHover}
    }
  }
`;

export const SliderBTN = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: none;
  ${flexBox({})};
  ${flexProperty({ align: "center", justify: "center" })}

  &.btn-prev {
    left: 0;
    transform: translateX(-50%);

    ${media.phoneSmall`
      transform:translateX(15%)
    `}
  }

  &.btn-next {
    right: 0;
    transform: translateX(50%);

    ${media.phoneSmall`
      transform:translateX(-15%)
    `}
  }
`;

export const SliderCloseBTN = styled.button`
  background: none;
  position: absolute;
  top: -3rem;
  right: 0;
  border: none;
`;
