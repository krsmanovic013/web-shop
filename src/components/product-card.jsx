import "./product-card.scss";
import Button from "./button";

const ProductCard = ({ products }) => {
  return (
    <div className="products-container">
      {products.map(({ name, id, imageUrl, price }) => (
        <div className="product-card-container" key={id}>
          <img src={imageUrl} alt={name} />
          <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{`$${price}`}</span>
          </div>
          <Button className={"button-container inverted"}>Add to cart</Button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
