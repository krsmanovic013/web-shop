import "./categories.scss";
import CategoryItem from "./category-item";

const Categories = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Categories;
