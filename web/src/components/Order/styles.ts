import styled from "styled-components";

export const OrderContainer = styled.aside`
  width: 24.5rem;
  height: 100vh;
  background: ${(props) => props.theme.white};
  border-radius: 0px 0px 0px 50px;

  padding: 1.5rem 1.25rem;

  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
`;
