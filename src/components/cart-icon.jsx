import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./cart-icon.scss";

import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const onClickHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={onClickHandler} />
      <span className="item-count" onClick={onClickHandler}>
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
