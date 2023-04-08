import { Product } from './product';

export type Basket = BasketItem[];

export type BasketItem = {
  product: Product;
  quantity: number
}