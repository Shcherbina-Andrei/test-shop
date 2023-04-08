import { Basket } from "./basket";

export type Order = {
  name: string;
  phone: string;
  basket: Basket;
}