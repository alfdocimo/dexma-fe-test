import { Types } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case Types.INCREMENT_BALANCE:
      const newBalance = state.balance + action.amount;
      return { ...state, balance: newBalance };

    case Types.ADD_SELECTED_BEVERAGE:
      return {
        ...state,
        selectedBeverages: [...state.selectedBeverages, action.beverage],
      };
    default:
      return state;
  }
}
