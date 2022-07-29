import styled from "styled-components";

export const Li = styled.li`
    width: 300px;
    height: 345px;
    border: 2px solid var(--gray-20);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    &:hover {
        box-shadow:  0 0 1em gray;
    }

    & > figure {
        display: flex;
        justify-content: center;
        height: 150px;
        background: var(--gray-0)
    }

    figure > img {
        object-fit: scale-down;
    }

    & > div {
        width: 300px;
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;
        padding-left: 15px;
        gap: 15px;
    }

    & > div > span {
        color: var(--color-primary);
        font-size: 14px;
        font-weight: 600;
    }

    & > div > button {
        background-color: var(--color-primary);
        width: 105px;
        height: 40px;
        border-radius: 8px;
        color: white;
    }

    & > div > button:hover {
        background-color: var(--color-primary-50);
    } 
`