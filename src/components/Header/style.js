import styled from "styled-components";

export const HeaderPage = styled.header`
  height: 80px;
  background: var(--gray-0);

  @media (max-width: 768px) {
    height: 140px;
  }
`;

export const Container = styled.div`
  height: 100%;
  padding: 0 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 10px;
  }

  & > img {
    width: 150px;
    height: 25px;
  }

  & > div {
    width: 100%;
    max-width: 365px;
    min-width: 300px;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
  }

  & input {
    width: 100%;
    height: 60px;
    padding: 0 15px;
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    font-size: 1rem;
  }

  & input:focus {
    border: 2px solid var(--gray-100);
  }

  & button {
    width: 105px;
    height: 40px;
    position: absolute;
    right: 10px;
    border-radius: 8px;
    background: var(--color-primary);
    color: white;
    font-weight: 500;
    font-size: 14px;
  }

  & button:hover {
    background: var(--color-primary-50);
  }
`;
