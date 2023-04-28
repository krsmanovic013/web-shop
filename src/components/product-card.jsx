import "./product-card.scss";
import Button from "./button";

import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";

const ProductCard = ({ products }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products);
  return (
    <div className="products-container">
      {products.map(({ name, id, imageUrl, price }) => (
        <div className="product-card-container" key={id}>
          <img src={imageUrl} alt={name} />
          <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{`$${price}`}</span>
          </div>
          <Button
            className={"button-container inverted"}
            onClick={addProductToCart}
          >
            Add to cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
