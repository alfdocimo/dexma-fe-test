import React, { useReducer } from "react";
import VendingMachineShell from "./components/VendingMachineShell";
import BeveragesList from "./components/BeveragesList";
import Payment from "./components/Payment";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { colors } from "@dexma/ui-components";
import { initialState, reducer, AppContext } from "./context";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ThemeProvider theme={colors}>
        <AppContext.Provider value={{ state, dispatch }}>
          <VendingMachineShell
            beverageLayout={<BeveragesList list={state.beverages} />}
            paymentLayout={<Payment />}
          />
        </AppContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
