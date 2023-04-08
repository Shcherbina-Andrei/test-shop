import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './order-page.css';
import BasketCard from '../../components/basket/basket-card';
import SuccessMessage from '../../components/succes-message/success-message';
import { clearBasket } from '../../store/actions';
import axios from 'axios';

function OrderPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const basketItems = useAppSelector(state => state.basket);

  const [clientData, setClientData] = useState({name: '', phone: ''});
  const [openedMessage, setOpenedMessage] = useState(false);

  if (basketItems.length === 0) {
    return (
      <section className="shop__order-page order">
        <h2 className="shop__title">Ваша корзина пуста</h2>
        <Link className="shop__to-main-link" to="/">К покупкам</Link>
      </section>
    )
  }

  const orderFormHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const order = {
      ...clientData,
      basket: basketItems
    };

    try {
      await axios.post('https://app.aaccent.su/js/confirm.php', JSON.stringify(order));;
      setOpenedMessage(true);
    } catch (err) {
      alert('При подключении к серверу возникла ошибка. Повторите позднее');
    }
  }

  const closeMessageHandler = () => {
    setOpenedMessage(false);
    dispatch(clearBasket());
    navigate('/');
  }

  return (
    <section className="shop__order-page order">
      <BasketCard basketItems={basketItems} />

      <form className="order__client-info" onSubmit={orderFormHandler}>
        <div className="order__inputs-wrapper">
          <label className="order__client-name">
            Ваше имя:
            <input className="order__input" type="text" value={clientData.name} onChange={(evt) => setClientData({...clientData, name: evt.target.value})} minLength={4} required/>
          </label>
          <label className="order__client-phone">
            Ваш телефон:
            <input className="order__input" type="tel" value={clientData.phone} onChange={(evt) => setClientData({...clientData, phone: evt.target.value})} 
              pattern="((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$" title="Введите корректный номер телефона" required />
          </label>
        </div>
        <button className="order__submit-button">Оформить заказ</button>
      </form>
      <SuccessMessage active={openedMessage} setActive={closeMessageHandler} />
    </section>
  )
}

export default OrderPage;