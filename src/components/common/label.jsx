const Label = ({ children, htmlFor }) => (
  <label className="block text-base font-bold text-dark mb-5" htmlFor={htmlFor}>
    {children}
  </label>
);

export default Label;
