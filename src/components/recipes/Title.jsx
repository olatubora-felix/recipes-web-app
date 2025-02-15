/* eslint-disable react/prop-types */
const Title = ({ children, className = "text-xl font-semibold" }) => {
  return <h4 className={className}>{children}</h4>;
};

export default Title;
