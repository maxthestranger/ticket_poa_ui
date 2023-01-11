const Button = ({ children, onClick, type }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-emerald-500 text-base font-bold py-3.5 w-full text-white rounded-md transition-all duration-100 ease-in hover:bg-emerald-600 focus:outline-none"
  >
    {children}
  </button>
);

export default Button;
