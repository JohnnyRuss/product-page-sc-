import { css } from "styled-components";

export const media = {
  desktopLarge: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakPoints["desktop-large"]}) {
      ${css(...args)}
    }
  `,

  desktop: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      ${css(...args)}
    }
  `,
  phone: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakPoints.phone}) {
      ${css(...args)}
    }
  `,

  phoneSmall: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakPoints["phone-small"]}) {
      ${css(...args)}
    }
  `,
};
