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
    { id: 1, name: "coca-cola", price: 1, amount: 10 },
    { id: 2, name: "pepsi-cola", price: 4, amount: 10 },
    { id: 3, name: "mocka-cola", price: 3, amount: 10 },
    { id: 4, name: "orange-fanta", price: 3, amount: 10 },
    { id: 5, name: "lime-fanta", price: 3, amount: 10 },
    { id: 6, name: "crush-pineapple", price: 2, amount: 10 },
    { id: 7, name: "crush-peach", price: 1, amount: 10 },
    { id: 8, name: "sunkist-fruit-punch", price: 3, amount: 10 },
    { id: 9, name: "sunkist-pineapple", price: 4, amount: 10 },
  ],
};

export default state;
