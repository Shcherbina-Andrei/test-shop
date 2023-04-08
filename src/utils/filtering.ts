import { Product } from '../types/product';

export const filterProductsByBrand = (products: Product[], brandsId: number[]) => 
  products.filter((product) => 
    {
      for (let i = 0; i < brandsId.length; i++) {
        if (brandsId[i] === product.brand) {
          return true;
        }
      }
      return false;
    });