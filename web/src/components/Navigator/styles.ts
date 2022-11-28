import styled from "styled-components";

export const Nav = styled.nav`
  width: 7.6rem;
  height: 100vh;

  background: ${(props) => props.theme.white};
  border-radius: 0px 0px 50px 0px;

  padding: 1.875rem 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;

    text-decoration: none;

    color: ${(props) => props.theme.black};
  }
`;
