import "./cart-dropdown.scss";
import Button from "./button";

import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

import CartItem from "./cart-item";

import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((a) => (
          <CartItem cartItem={a} />
        ))}
      </div>
      <Button className="button-container" onClick={goToCheckoutHandler}>
        CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
