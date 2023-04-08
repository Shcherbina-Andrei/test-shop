export type Product = {
  type: string;
  id: number;
  sku: string;
  title: string;
  image: string;
  brand: number;
  regularPrice: {
    currency: string;
    value: number;
  }
}

export type ProductJson = {
  type: string;
  id: number;
  sku: string;
  title: string;
  image: string;
  brand: number;
  regular_price: {
    currency: string;
    value: number;
  }
}