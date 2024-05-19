import "./Input.css";

const Input = ({ placeholder }: { placeholder: string }) => {
  return <input className="form-input nav__search" placeholder={placeholder} />;
};

export default Input;