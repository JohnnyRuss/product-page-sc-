import styled from "styled-components";
import { flexBox, flexProperty } from "../../../styles/helpers.styled";
import { media } from "../../../styles/media.styled";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blackLight};
  ${flexBox({})};
  ${flexProperty({ align: "center", justify: "center" })};

  ${media.phoneSmall`
    height:100%;
  `}

  .content-box {
    height: 100%;
    width: min-content;
    padding: 4rem 0;

    ${media.phoneSmall`
      height:160vw;
      width:96vw;
    `}
  }
`;
