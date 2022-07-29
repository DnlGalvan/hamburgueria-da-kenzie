import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    min-width: 365px;

    @media screen and (max-width: 910px){
        min-width: 300px;
        margin: 0 auto;
    }

    & > h3 {
        height: 65px;
        color: white;
        background: var(--color-primary);
        border-radius: 5px 5px 0 0;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }

    & > img {
        max-width: 100%;
    }
`

export const Container = styled.div`
    background: var(--gray-0);
    border-radius: 0px 0px 5px 5px;
`

export const Ul = styled.ul`
    max-height: 380px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 20px;
`

export const Li = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 10px;
    gap: 15px;

    & > figure {
        width: 80px;
        height: 80px;
        background: var(--gray-20);
        border-radius: 5px;
    }

    figure > img {
        width: 80px;
        height: 80px;
        object-fit: scale-down;
    }
    & > button {
        background: transparent;
        color: #BDBDBD;;
    }

    & > button:hover {
        color: var(--gray-100);
        text-decoration: underline;
    }
`

export const DivInfo = styled.div`
    width: 100%;
    max-width: 170px;

    & > h4 {
        width: 15ch;
        padding: 10px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & > p {
        padding: 10px 0;
    }
`

export const CartTotal = styled.div`
    border-top: 2px solid var(--gray-20);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 10px;
    gap: 20px;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    div > h4 {
        color: var(--gray-100);
        font-weight: 600;
    }

    div > span {
        color: var(--gray-50);
        font-weight: 600;
    }

    & > button {
        width: 100%;
        height: 60px;
        background: var(--gray-20);
        border-radius: 8px;
        padding: 10px 0;
    }

    & > button:hover {
        background: var(--gray-50);
        color: white;
    }
`