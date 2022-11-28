import { Nav } from "./styles";

import { House } from "phosphor-react";

export function Navigator() {
  return (
    <Nav>
      <a href="#">
        <House size={32} weight="fill" color="#F97316" />
        Home
      </a>
    </Nav>
  );
}
