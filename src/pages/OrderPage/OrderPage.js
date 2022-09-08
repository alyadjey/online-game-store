import React from "react";
import "./OrderPage.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/utils";
import OrderItem from "../../components/OrderItem/OrderItem";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Your cart is empty</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} tovarov na summy {calcTotalPrice(items)} $.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
