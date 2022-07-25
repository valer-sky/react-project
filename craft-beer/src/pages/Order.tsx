import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';

const Order: React.FC = () => {
  const dispatch = useDispatch();
  const onClickClear = () => {
    dispatch(clearItems())
  };
    
  return(
    <div className="container conteiner--order">
      <h2 className="order__title">
        Заполните форму для заказа
      </h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero adipisci voluptate molestias exercitationem laudantium animi cum. Asperiores minus, porro eum molestiae eaque, voluptas cum corporis ea sapiente aspernatur, exercitationem cumque non vel magni.
      </p>
      <div className="cart__bottom-buttons">
        <Link to="/cart" className="button button--outline button--add go-back-btn">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span>Вернуться назад</span>
        </Link>
        <Link to="/"  onClick={onClickClear} className="button pay-btn">
          <span>Готово</span>
        </Link>
      </div>
    </div>
    )
}

export default Order;
