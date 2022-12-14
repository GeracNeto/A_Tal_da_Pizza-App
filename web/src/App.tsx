import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { AppContainer } from "./App.styles";

import { Navigator } from "./components/Navigator";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Kitchen } from "./pages/Kitchen";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <Navigator />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kitchen" element={<Kitchen />} />
          </Routes>
        </AppContainer>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
