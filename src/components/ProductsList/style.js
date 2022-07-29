import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 910px) {
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`