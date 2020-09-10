import { IBeverage } from "../interfaces/beverage";

export interface IState {
  balance: number;
  selectedBeverages: [];
  beverages: IBeverage[];
}

const state: IState = {
  balance: 10,
  selectedBeverages: [],
  beverages: [
    { name: "coca-cola", price: 1, amount: 10 },
    { name: "pepsi-cola", price: 4, amount: 10 },
    { name: "mocka-cola", price: 3, amount: 10 },
    { name: "orange-fanta", price: 3, amount: 10 },
    { name: "lime-fanta", price: 3, amount: 10 },
    { name: "crush-pineapple", price: 2, amount: 10 },
    { name: "crush-peach", price: 1, amount: 10 },
    { name: "sunkist-fruit-punch", price: 3, amount: 10 },
    { name: "sunkist-pineapple", price: 4, amount: 10 },
  ],
};

export default state;
