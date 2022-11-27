import styled from "styled-components";

export const MenuContainer = styled.main`
  width: 100%;

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
`;
