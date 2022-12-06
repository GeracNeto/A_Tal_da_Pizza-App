import styled from "styled-components";

export const OrderContainer = styled.aside`
  width: 24.5rem;
  height: 100vh;
  background: ${(props) => props.theme.white};
  border-radius: 0px 0px 0px 50px;

  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1.5rem;

  span {
    font-size: 0.8rem;
  }

  header span {
    color: ${(props) => props.theme["gray-600"]};
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ResumeContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Total = styled.span`
  color: ${(props) => props.theme.black};
  font-weight: bolder;
`;

export const ButtonSubmit = styled.button`
  padding: 1rem 0;
  border-radius: 20px;
  border: none;

  color: ${(props) => props.theme.white};
  font-weight: bold;
  letter-spacing: 0.1rem;

  cursor: pointer;

  background: ${(props) => props.theme["orange-500"]};
`;
