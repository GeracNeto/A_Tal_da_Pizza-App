import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 7.6rem;
  height: 100vh;

  background: ${(props) => props.theme.white};
  border-radius: 0px 0px 50px 0px;

  padding: 1.875rem 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  border-radius: 10px;

  text-decoration: none;

  color: ${(props) => props.theme.black};

  &.active {
    background: ${(props) => props.theme["orange-50"]};
  }
`;
