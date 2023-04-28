import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  return (
    <div className="cart-item-container" key={id}>
      <img src={imageUrl} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity}x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
