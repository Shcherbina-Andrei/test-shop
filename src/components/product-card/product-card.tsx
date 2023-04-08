import { Product } from '../../types/product';
import './product-card.css';

type CardType = {
  product: Product;
  addButtonHandler: () => void;
}

function ProductCard({product, addButtonHandler}: CardType): JSX.Element {
  return (
    <div className="product-card">
      <img className="product-card__image" src={product.image} width="300" height="300" alt="product-card" />
      <div className="product-card__description">
        <h3 className="product-card__title">{product.title}</h3>
        <span className="product-card__price">{product.regularPrice.value} {product.regularPrice.currency}</span>
      </div>
      <button className="product-card__add-button" type="button" onClick={addButtonHandler}>Добавить в корзину</button>
    </div>
  )
}

export default ProductCard;