import styled from "styled-components";

export const MenuContainer = styled.main`
  width: 100%;
  height: 100vh;

  background: ${(props) => props.theme["gray-100"]};
`;

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.white};
  border-radius: 0px 0px 20px 20px;

  height: fit-content;
  padding: 1.25rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${(props) => props.theme["gray-100"]};
    padding: 0 1.25rem;
    width: 23rem;
    border-radius: 20px;
    gap: 1rem;
  }
  input {
    background: none;
    border: none;

    width: 100%;

    padding: 0.8rem 0;

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme["orange-500"]};
    font-weight: bold;
  }
`;

export const CardMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 1rem;
  gap: 2rem;
`;
