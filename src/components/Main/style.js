import styled from "styled-components";

export const MainPage = styled.main`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 32px 115px;

    @media screen and (max-width: 910px) {
        flex-direction: column;
        gap: 20px;
        padding: 32px 10px;
        overflow-x: hidden;
    }

    & > div {
        width: 80%;

    }
`
export const Span = styled.span`
    color: var(--gray-50);
    font-weight: 700;
`