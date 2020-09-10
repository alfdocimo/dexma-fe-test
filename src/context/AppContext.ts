import { createContext } from "react";
import { IState } from "./initialState";

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string }) => void;
}

const AppContext = createContext({} as IContextProps);

export default AppContext;
