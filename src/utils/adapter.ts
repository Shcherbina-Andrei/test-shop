import { Product, ProductJson } from '../types/product';
import { productImages } from '../content';

export const adaptProductsToClient = (ProductsJson: ProductJson[]): Product[] => {
  return ProductsJson.map((product: ProductJson, index) => {
    return {
      type: product.type,
      id: product.id,
      sku: product.sku,
      title: product.title,
      image: productImages[index],
      brand: product.brand,
      regularPrice: product['regular_price']
    }
  })
}