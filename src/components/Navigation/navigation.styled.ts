import styled, { keyframes } from "styled-components";
import { flexBox, flexProperty, container } from "../../styles/helpers.styled";
import { media } from "../../styles/media.styled";

const slide_in = keyframes`
  0%{
    transform:translateX(100%)
  }

  100%{
    transform:translateX(0)
  }
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  ${container()}
  ${flexBox({})};
  ${flexProperty({ align: "center" })}
  gap:4rem;
  height: 10rem;
  padding: 0 2rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.grayishBlue};
  background: ${({ theme }) => theme.colors.bgColor};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrayishBlue};

  ${media.phoneSmall`
    gap:2rem;
  `}

  #burger-menu:checked ~ .nav-list {
    display: flex;
  }

  .burger-menu--btn {
    order: 1;
    cursor: pointer;
    display: none;

    ${media.tablet`
      display:block;
    `};
  }

  .burger-label {
    position: relative;
    display: block;
    width: 3rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.textColor};

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 3rem;
      height: 0.25rem;
      background: inherit;
    }

    &::before {
      top: -0.7rem;
    }

    &::after {
      bottom: -0.7rem;
    }
  }

  .nav-list {
    ${flexBox({})};
    gap: 2rem;
    height: 100%;

    ${({ theme }) => media.tablet`
      display:none;
      position: fixed;
      right:0;
      top:10rem;
      bottom:0;
      flex-direction:column;
      gap:1rem;
      width: 20rem;
      padding:1rem 0.5rem 0.5rem 1rem;
      border-left:1px solid ${theme.colors.grayishBlue};
      background: ${theme.colors.blackLight};
      backdrop-filter:blur(5px);
      animation:${slide_in} 0.2s ease-out forwards;
    `};
  }

  .nav-list--item {
    ${flexBox({})};
    ${flexProperty({ align: "center" })};
    height: 100%;
    padding: 0 1rem;
    box-sizing: content-box;
    cursor: pointer;

    :hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
    }

    ${({ theme }) => media.tablet`
      padding:0.3rem 0;
      height: auto;
      transition:all 0.2s;

      :hover {
        border-bottom:none;
        color:${theme.colors.orange}
      }
    `}
  }

  .nav-shopping-cart__btn {
    fill: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
  }

  .nav-user--avatar {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    aspect-ratio: 1/1;
    border-radius: 100%;
    cursor: pointer;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-position: center;
      object-fit: cover;
    }

    :hover {
      border: 2px solid ${({ theme }) => theme.colors.orange};
    }

    ${media.phoneSmall`
      display:none;
    `}
  }
`;

export const SwitchBTN = styled.button<{ isDark: boolean }>`
  margin-left: auto;
  height: 2.5rem;
  width: 5.5rem;
  border-radius: 2rem;
  background: ${({ theme, isDark }) =>
    isDark ? theme.colors.grayishBlue : theme.colors.darkBlue};
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  .switch-btn {
    position: absolute;
    height: 3rem;
    width: 3rem;
    border-radius: 100%;
    top: -0.25rem;
    background: ${({ theme, isDark }) =>
      isDark ? theme.colors.darkBlue : theme.colors.grayishBlue};
    ${({ isDark }) =>
      isDark
        ? "animation:animate_move_right 0.2s ease forwards"
        : "animation:animate_move_left 0.2s ease forwards"};
  }
`;

export const LogoFig = styled.figure`
  fill: ${({ theme }) => theme.colors.textColor};
`;
