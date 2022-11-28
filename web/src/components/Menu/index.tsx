import { CardMenuContainer, HeaderContainer, MenuContainer } from "./styles";

import { MagnifyingGlass } from "phosphor-react";
import { Card } from "./Card";

export function Menu() {
  return (
    <MenuContainer>
      <HeaderContainer>
        <form>
          <input type="text" />
          <button type="submit">
            <MagnifyingGlass size={24} />
          </button>
        </form>
        <span>5 items in cart</span>
      </HeaderContainer>
      <CardMenuContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardMenuContainer>
    </MenuContainer>
  );
}
