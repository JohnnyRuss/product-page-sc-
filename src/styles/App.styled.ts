import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background: ${({ theme }) => theme.colors.bgColor};
        color:${({ theme }) => theme.colors.textColor};
        font-family: ${({ theme }) => theme.font.primary};
        font-size: ${({theme})=>theme.fontSize.base};
        font-weight: ${({ theme }) => theme.weights.regullar};
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
    }

    @keyframes animate_move_left {
        100% {
            left: -0.5rem;
        }
    }

    @keyframes animate_move_right {
        100% {
            right: -0.5rem;
        }
    }
`;

export { GlobalStyles };
