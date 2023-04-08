import { useAppDispatch } from '../../hooks';
import { addProductToBasket, removeProductFromBasket } from '../../store/actions';
import { Basket } from '../../types/basket';
import { Product } from '../../types/product';
import './basket-card.css';

type BasketTypes = {
  basketItems: Basket
}

function BasketCard({basketItems}: BasketTypes): JSX.Element {
  const dispatch = useAppDispatch();

  const increaseButtonHandler = (product: Product) => {
    dispatch(addProductToBasket(product));
  }

  const decreaseButtonHandler = (product: Product) => {
    dispatch(removeProductFromBasket(product));
  }

  return (
    <div className="order__basket basket">
        <h2 className='basket__title'>Ваши товары:</h2>
        <ul className="basket__products-list">
          {
            basketItems.map((basketItem) => (
              <li className="basket__product-item" key={basketItem.product.id}>
                <div className="basket__product-image">
                  <img src={basketItem.product.image} width="30" height="30" alt={basketItem.product.title} />
                </div>
                <div className="basket__product-title">{basketItem.product.title}</div>
                <div className="basket__product-quantity">
                  <button className="basket__button basket__button--decrease" onClick={() => decreaseButtonHandler(basketItem.product)}>-</button>
                  <span className="basket__product-number">{basketItem.quantity}</span>
                  <button className="basket__button basket__button--increase" onClick={() => increaseButtonHandler(basketItem.product)}>+</button>
                </div>
                <div className="basket__product-price">{basketItem.product.regularPrice.value} {basketItem.product.regularPrice.currency}</div>
              </li>
            ))
          }
        </ul>
        <p className="basket__total-price">
          <span className="basket__total-price-result">Итого: </span>
          {
            basketItems.reduce((sum, basketItem) => (sum + basketItem.product.regularPrice.value * basketItem.quantity), 0).toFixed(2)
          } {basketItems[0].product.regularPrice.currency}
        </p>
      </div>
  )
}

export default BasketCard;