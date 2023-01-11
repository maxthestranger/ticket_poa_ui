const Button = ({ children, type, ...props }) => (
  <button
    type={type}
    className="bg-emerald-500 text-base font-bold py-3.5 w-full text-white rounded-md transition-all duration-100 ease-in hover:bg-emerald-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
    {...props}
  >
    {children}
  </button>
);

export default Button;
