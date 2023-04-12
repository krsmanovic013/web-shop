import "./button.scss";
const Button = ({ className, children, ...otherProps }) => {
  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
