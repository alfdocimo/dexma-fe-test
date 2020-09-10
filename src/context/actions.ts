export enum Types {
  INCREMENT_BALANCE = "INCREMENT_BALANCE",
  ADD_SELECTED_BEVERAGE = "ADD_SELECTED_BEVERAGE",
}

const incrementBalance = (amount: number) => ({
  type: Types.INCREMENT_BALANCE,
  amount,
});

const addSelectedBeverage = (beverage) => ({
  type: Types.ADD_SELECTED_BEVERAGE,
  beverage,
});

export default {
  addSelectedBeverage,
  incrementBalance,
};
