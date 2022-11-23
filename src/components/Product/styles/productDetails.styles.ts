import styled from "styled-components";
import { flexBox, flexProperty } from "../../../styles/helpers.styled";
import { media } from "../../../styles/media.styled";

export const DetailsContainer = styled.div`
  flex: 2;
  padding-top: 10rem;

  ${media.desktop`
    flex:1;
    padding-top: 3rem;
  `}

  ${media.tablet`
    display:flex;
    flex-direction:column;
    align-items:center;
  `};

  .company {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
   
    ${media.phoneSmall`
      align-self:flex-start;
    `}
  }

  .product-title {
    font-size: ${({ theme }) => theme.fontSize.heading};
    font-family: ${({ theme }) => theme.weights.bold};
    text-transform: capitalize;
    margin-top: 1rem;

    ${({ theme }) => media.phone`
      font-size: ${theme.fontSize.headingSmall};
    `}
  }

  .product-description {
    max-width: 70%;
    color: ${({ theme }) => theme.colors.grayishBlue};
    margin-top: 3rem;

    ${media.tablet`
      text-align:center;
    `}

    ${media.phoneSmall`
      margin-top:1.5rem;
      max-width:100%;
      text-align:start;
    `}
  }

  .price-box {
    margin-top: 2rem;

    ${media.tablet`
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;     
      gap: 2rem;
    `};

    ${media.phoneSmall`
      justify-content:space-between;
    `}

    &__current-price--box {
      ${flexBox({})};
      ${flexProperty({ align: "center" })};
      gap: 2rem;

      .curr-price {
        font-size: ${({ theme }) => theme.fontSize.headingSmall};
        font-weight: ${({ theme }) => theme.weights.bold};
      }

      .curr-sale {
        background: ${({ theme }) => theme.colors.paleOrange};
        color: ${({ theme }) => theme.colors.orange};
        font-weight: ${({ theme }) => theme.weights.bold};
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
      }
    }

    &__old-price {
      margin-top: 0.5rem;
      opacity: 0.5;
      text-decoration: line-through;
    }
  }

  .card-btn--box {
    ${flexBox({})};
    gap: 2rem;
    margin-top: 3.5rem;

    ${media.phoneSmall`
      flex-direction:column;
      width:100%;
    `}

    &__amount-btn--box {
      ${flexBox({})};
      ${flexProperty({ align: "center", justify: "space-between" })};
      gap: 0.2rem;
      width: 12rem;
      padding: 1.5rem 2.5rem;
      border-radius: 0.6rem;
      background: ${({ theme }) => theme.colors.lightGrayishBlue};
      box-shadow: ${({ theme }) => theme.shadows.small};

      ${media.phoneSmall`
        width:100%;
      `}

      button {
        ${flexBox({})};
        ${flexProperty({ align: "center", justify: "space-between" })};
        border: none;
        background: none;
      }

      span {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSize.textSmall};
        font-weight: ${({ theme }) => theme.weights.bold};
      }
    }

    &__add-btn {
      ${flexBox({})};
      ${flexProperty({ align: "center", justify: "center" })};
      gap: 1rem;
      width: 24rem;
      background: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.small};
      border-radius: 0.6rem;
      border: none;
      transition: all 0.2s;

      .btn-icon svg {
        fill: ${({ theme }) => theme.colors.white};
      }

      .btn-caption {
        text-transform: capitalize;
      }

      :hover {
        filter: brightness(110%);
      }

      ${media.phoneSmall`
        width:100%;
        padding:2rem;
      `}
    }
  }
`;
