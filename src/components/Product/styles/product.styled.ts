import styled from "styled-components";
import {
  flexBox,
  flexProperty,
  container,
} from "../../../styles/helpers.styled";
import { media } from "../../../styles/media.styled";

export const ProductContainer = styled.div`
  ${container()};
  ${flexBox({})};
  ${flexProperty({ justify: "space-between" })};
  gap: 8rem;
  margin-top: 5rem;
  padding-bottom: 5rem;

  ${media.desktop`
    padding: 5rem 2rem;
    gap:4rem;
  `};

  ${media.tablet`
    flex-direction: column;
    align-items:center;
    margin-top:0;
  `};

  ${media.phoneSmall`
    padding:3rem 1rem;
    gap: 2rem;
  `}
`;
