import { ButtonType } from "../../types";

const Button = ({ children, onClick, primary = false }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`text-white rounded-lg text-sm px-6 py-3 font-bold ${
        primary ? "bg-[#AD1FEA]" : "bg-[#4661E6]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
