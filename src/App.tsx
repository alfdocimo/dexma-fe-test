import React from "react";
import VendingMachineShell from "./components/VendingMachineShell";
import BeveragesList from "./components/BeveragesList";
import Payment from "./components/Payment";
import mockedList from "./__test__/mockedBeveragesList.json";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { colors } from "@dexma/ui-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <div>
      <ThemeProvider theme={colors}>
        <VendingMachineShell
          beverageLayout={<BeveragesList list={mockedList} />}
          paymentLayout={<Payment />}
        />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
