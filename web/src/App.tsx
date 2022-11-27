import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { AppContainer } from "./App.styles";

import { Navigator } from "./components/Navigator";
import { Menu } from "./components/Menu";
import { Order } from "./components/Order";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <Navigator />
        <Menu />
        <Order />
      </AppContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
