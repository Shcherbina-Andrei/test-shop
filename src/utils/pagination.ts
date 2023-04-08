import { Product } from "../types/product";

export const getPageCounts = (totalItems: number, limit: number) => Math.ceil(totalItems / limit);

export const getPagesArray = (totalPages: number) => {
  let arrayPages = []
    for (let i = 0; i < totalPages; i++) {
      arrayPages.push(i + 1);
    }

  return arrayPages;
}

export const getCurrentElements = (elements: Product[], currentPage: number, limit: number) => elements.slice((currentPage - 1) * limit, (currentPage - 1) * limit + Math.min(limit, elements.length - limit * (currentPage - 1)));