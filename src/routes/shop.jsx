import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import ProductCard from "../components/product-card";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return <ProductCard products={products} />;
};

export default Shop;
