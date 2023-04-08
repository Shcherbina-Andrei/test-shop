import { createAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

export const getAllProducts = createAction('products/get');

export const filterByBrand = createAction<number[]>('products/filterByBrand');

export const resetFilter = createAction('products/resetFilter');

export const addProductToBasket = createAction<Product>('basket/addProduct');

export const removeProductFromBasket = createAction<Product>('basket/removeProduct');

export const clearBasket = createAction('basket/clearBasket');