import { css, keyframes } from "styled-components";
import * as Types from "./helper.types";

export function flexBox({ direction = "row" }: Types.FlexBoxType) {
  return css`
    display: flex;
    flex-direction: ${direction};
  `;
}

export function flexProperty({
  align = "flex-start",
  justify = "flex-start",
}: Types.FlexPropertyType) {
  return css`
    align-items: ${align};
    justify-content: ${justify};
  `;
}

export function container(width?: string) {
  return css`
    max-width: ${({ theme }) => width || theme.variables["container-width"]};
    margin: 0 auto;
  `;
}

const collapse_xy = keyframes`
  0%{
    width: 0;
    height: 0;
  }

  100%{
    width: 100%;
    height: 100%;
  }
`;

const run_border_top_right = keyframes`
  0%{
    left:0;
    top:0;
    right:100%;
    bottom:100%;
    border-top-left-radius: 0rem;
  }

  50%{
    left:0;
    top:0;
    right:0;
    bottom:100%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 0rem;
  }

  100%{
    left:0;
    top:0;
    right:0;
    bottom:0;
    border-bottom-right-radius: 0rem;
  }
`;

const run_border_left_bottom = keyframes`
  0%{
    right:0;
    left:100%;
    bottom:0;
    top:90%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 0rem;
  }
  
  50%{
    right:0;
    left:0;
    bottom:0;
    top:100%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  100%{
    right:0;
    bottom:0;
    left:0;
    top:0;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 0rem;
  }
`;

const localAfter = css`
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.paleOrange};
  opacity: 0.5;
`;

export const fadeHover = css`
  & {
    position: relative;
  }

  &::after {
    ${localAfter};
    animation: ${collapse_xy} 0.18s ease-out forwards;
  }
`;

export const activeThumb = css`
  & {
    position: relative;
  }

  &::after {
    ${localAfter};
    background: none;
    z-index: 99;
    border-radius: 1rem;
    border: 3px solid ${({ theme }) => theme.colors.darkBlue};
    border-left: none;
    border-bottom: none;
    animation: ${run_border_top_right} 0.2s linear forwards;
  }

  &::before {
    ${localAfter};
    background: none;
    z-index: 99;
    border-radius: 1rem;
    border: 3px solid ${({ theme }) => theme.colors.darkBlue};
    border-top: none;
    border-right: none;
    animation: ${run_border_left_bottom} 0.2s linear 0.2s forwards;
  }
`;
