import { createReducer } from '@reduxjs/toolkit';
import productsJSON from '../data/products.json';
import brands from '../data/brands.json';
import { adaptProductsToClient } from '../utils/adapter';
import { addProductToBasket, clearBasket, filterByBrand, getAllProducts, removeProductFromBasket, resetFilter } from './actions';
import { Product } from '../types/product';
import { Brand } from '../types/brand';
import { Basket } from '../types/basket';
import { filterProductsByBrand } from '../utils/filtering';

const products = adaptProductsToClient(productsJSON);

type InitialState = {
  products: Product[];
  brands: Brand[];
  basket: Basket;
}

const initialState: InitialState = {
  products: products,
  brands: brands,
  basket: [],
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllProducts, (state) => {
      state.products = products
    })
    .addCase(filterByBrand, (state, action) => {
      state.products = filterProductsByBrand(products, action.payload);
    })
    .addCase(resetFilter, (state) => {
      state.products = products;
    })
    .addCase(addProductToBasket, (state, action) => {
      const productIndex = state.basket.findIndex((basketItem) => basketItem.product.id === action.payload.id);
      if (productIndex >= 0) {
        state.basket[productIndex] = {...state.basket[productIndex], quantity: state.basket[productIndex].quantity + 1}
      } else {
        state.basket = [...state.basket, {product: action.payload, quantity: 1}];
      }
    })
    .addCase(removeProductFromBasket, (state, action) => {
      const productIndex = state.basket.findIndex((basketItem) => basketItem.product.id === action.payload.id);
      if (state.basket[productIndex].quantity === 1) {
        state.basket = [...state.basket.slice(0, productIndex), ...state.basket.slice(productIndex + 1,)];
      } else if (state.basket[productIndex].quantity > 1) {
        state.basket[productIndex] = {...state.basket[productIndex], quantity: state.basket[productIndex].quantity - 1};
      }
    })
    .addCase(clearBasket, (state) => {
      state.basket = [];
    })
})

export {reducer};

