import { CardMenuContainer, HeaderContainer, MenuContainer } from "./styles";

import { MagnifyingGlass } from "phosphor-react";
import { Card } from "./Card";

import { useEffect, useState } from "react";

import axios from "axios";
import { MenuProps } from "../../App";

interface FoodProps {
  menu: MenuProps[];
  menuDataError: string;
  onAddRequest: (id: string) => void;
}

export function Menu({ menu, menuDataError, onAddRequest }: FoodProps) {
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
              id={item.id}
              foodName={item.foodName}
              price={item.price}
              foodPicture={item.foodPicture}
              onAddRequestOnClick={onAddRequest}
            />
          ))
        )}
      </CardMenuContainer>
    </MenuContainer>
  );
}
