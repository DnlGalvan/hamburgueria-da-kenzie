import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secundary: #EB5757;
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body, html {
        height: 100vh;
        width: 100vw;
    }

    h1 {
        font-size: 26px;
        font-weight: 700;
        color: var(--gray-100);
        padding-bottom: 40px;
    }

    h3 {
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-100);
    }

    h4 {
        font-size: 14px;
        font-weight: 700;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        color: var(--gray-50);
    }

    button {
        border: none;
        cursor: pointer;
    }
`;
