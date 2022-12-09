import { CardMenuContainer, HeaderContainer, MenuContainer } from "./styles";

import { Card } from "./Card";

import { MenuProps } from "../../pages/Home";

interface FoodProps {
  menu: MenuProps[];
  menuDataError: string;
  onAddRequest: (id: string) => void;
  onSerchItemInMenu: (foodSearch: string) => void;
}

export function Menu({
  menu,
  menuDataError,
  onAddRequest,
  onSerchItemInMenu,
}: FoodProps) {
  return (
    <MenuContainer>
      <HeaderContainer>
        <form>
          <input
            type="text"
            onChange={(event) => onSerchItemInMenu(event.target.value)}
            placeholder="Search in menu..."
          />
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
