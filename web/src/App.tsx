import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { AppContainer } from "./App.styles";

import { Navigator } from "./components/Navigator";
import { Menu } from "./components/Menu";
import { Order } from "./components/Order";

import { useEffect, useState } from "react";
import axios from "axios";

export interface MenuProps {
  id: string;
  foodName: string;
  price: number;
  foodPicture: string;
  qty: number;
}

function App() {
  const [menu, setMenu] = useState<MenuProps[]>([]);
  const [menuDataError, setMenuDataError] = useState<string>("");
  const [cart, setCart] = useState<MenuProps[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/menu")
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        setMenuDataError(error.message);
      });
  }, []);

  function addRequesttoCart(id: string) {
    const newItemArray: MenuProps[] = menu.filter((item) => item.id === id);
    const newItem: MenuProps = newItemArray[0];

    let isItemInTheList: boolean = false;

    cart.forEach((element) => {
      if (element.id === id) {
        isItemInTheList = true;
        alert("This item already is in your cart");
      }
    });

    if (newItemArray.length !== 0 && isItemInTheList === false) {
      setCart((item) => [...item, newItem]);
    } else {
      setCart((item) => [...item]);
    }
  }

  function deleteRequestCart(id: string) {
    const newCartUpdated: MenuProps[] = cart.filter((item) => item.id !== id);
    console.log(newCartUpdated);

    setCart(newCartUpdated);
  }

  function serchItemInMenu(foodSearch: string) {
    axios(`http://localhost:3333/menu/${foodSearch}`)
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        setMenuDataError(error);
      });
  }

  function handleAddQty(id: string, query: string) {
    const newCart: MenuProps[] = cart.filter((item) => {
      if (item.id === id && query === "add") {
        item.qty += 1;
        return [...cart];
      } else if (item.id === id && query === "sub") {
        item.qty -= 1;
        return [...cart];
      } else {
        return [...cart];
      }
    });

    setCart(newCart);
  }

  console.log(cart);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Navigator />
        <Menu
          menu={menu}
          menuDataError={menuDataError}
          onAddRequest={addRequesttoCart}
          onSerchItemInMenu={serchItemInMenu}
        />
        <Order
          cart={cart}
          onDeleteRequestCart={deleteRequestCart}
          onHandleAddQty={handleAddQty}
        />
      </AppContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
