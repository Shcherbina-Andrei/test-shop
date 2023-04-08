import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addProductToBasket } from '../../store/actions';
import ProductCard from '../product-card/product-card';
import './products-list.css';
import { getCurrentElements, getPageCounts, getPagesArray } from '../../utils/pagination';
import { Product } from '../../types/product';

function ProductsList(): JSX.Element {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch();

  const limitProducts = 6;
  const totalPages = getPageCounts(products.length, limitProducts);
  const pagesArray = getPagesArray(totalPages);

  const [currentPage, setCurrentPage] = useState(1);
  const currentProducts = products.length > limitProducts ? getCurrentElements(products, currentPage, limitProducts) : products;

  useEffect(() => {
    window.scrollTo(0, 0);
  },[currentPage])

  if (products.length === 0) {
    return (
      <div className="products">
        <p className="products__not-found">Товары не найдены</p>
      </div>
    )
  }

  

  const addButtonHandler = (product: Product) => {
    dispatch(addProductToBasket(product))
  }
  
  return (
    <div className="products">
      <ul className="products-list">
        {
          currentProducts.map((product) => (
            <li className="products-list__item" key={product.id}>
              <ProductCard product={product} addButtonHandler={() => addButtonHandler(product)}/>
            </li>
          ))
        }
      </ul>
      {products.length > limitProducts &&
        (
          <div className="products__pagination">
            {
              pagesArray.map((page) => (
                <span className={`products__pagination-button ${page === currentPage ? 'products__pagination-button--current': ''}`} key={page} onClick={() => setCurrentPage(page)}>
                  {page}
                </span>
              ))
            }
          </div>
        )}
    </div>
  )
}

export default ProductsList;