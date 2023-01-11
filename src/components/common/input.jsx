const Input = ({ type, name, id, placeholder, onchange, value }) => (
  <input
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onchange}
    className="w-full border border-gray-300 rounded-[6px] px-5 py-4 focus:outline-none focus:border-primary placeholder:text-place placeholder:text-sm placeholder:font-bold"
  />
);

export default Input;
