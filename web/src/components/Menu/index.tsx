import { CardMenuContainer, HeaderContainer, MenuContainer } from "./styles";

import { MagnifyingGlass } from "phosphor-react";
import { Card } from "./Card";

import { useEffect, useState } from "react";

import axios from "axios";

export interface MenuProps {
  id: string;
  foodName: string;
  price: number;
  foodPicture: string;
}

export function Menu() {
  const [menu, setMenu] = useState<MenuProps[]>([]);
  const [menuDataError, setMenuDataError] = useState<string | null>(null);

  useEffect(() => {
    axios("http://localhost:3333/menu")
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        setMenuDataError(error.message);
      });
  }, []);

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
        {menuDataError ? (
          <h1>{menuDataError}</h1>
        ) : (
          menu.map((item) => (
            <Card
              key={item.id}
              foodName={item.foodName}
              price={item.price}
              foodPicture={item.foodPicture}
            />
          ))
        )}
      </CardMenuContainer>
    </MenuContainer>
  );
}
