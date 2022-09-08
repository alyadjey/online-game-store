import React from "react";
import Button from "../button/Button";
import CartItem from "../CartItem/CartItem";
import { calcTotalPrice } from "../utils";
import "./CartMenu.css";

const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total price:</span>
            <span>{calcTotalPrice(items)}$.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Place an order
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
