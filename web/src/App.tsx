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

    setCart((item) => [...item, newItem]);
  }

  function deleteRequestCart(id: string) {
    const newCartUpdated: MenuProps[] = cart.filter((item) => item.id !== id);
    console.log(newCartUpdated);

    setCart(newCartUpdated);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Navigator />
        <Menu
          menu={menu}
          menuDataError={menuDataError}
          onAddRequest={addRequesttoCart}
        />
        <Order cart={cart} onDeleteRequestCart={deleteRequestCart} />
      </AppContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
