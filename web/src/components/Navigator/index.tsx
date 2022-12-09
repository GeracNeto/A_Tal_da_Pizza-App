import { Nav, StyledNavLink } from "./styles";

import { House, CookingPot } from "phosphor-react";

export function Navigator() {
  return (
    <Nav>
      <StyledNavLink to="/">
        <House size={32} weight="fill" color="#F97316" />
        Home
      </StyledNavLink>
      <StyledNavLink to="/kitchen">
        <CookingPot size={32} weight="fill" color="#F97316" />
        kitchen
      </StyledNavLink>
    </Nav>
  );
}
