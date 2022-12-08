import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { AppContainer } from "./App.styles";

import { Navigator } from "./components/Navigator";
import { Menu } from "./components/Menu";
import { Order } from "./components/Order";

import { FormEvent, useEffect, useState } from "react";

import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <Navigator />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kitchen" element={<h1>kitchen</h1>} />
          </Routes>
        </AppContainer>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
