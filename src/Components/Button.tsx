import { NavLink } from "react-router-dom";

interface IButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  to?: string;
  click?: () => void;
}

const Button = ({ buttonText, type, to, click }: IButtonProps) => {
  const buttonStyle =
    "w-32 max-w-fit sm:w-auto inline-flex justify-center rounded bg-blue px-5 py-2 text-sm font-sans shadow-sm hover:bg-darkblue";

  if (to) {
    return (
      <NavLink to={to} className={buttonStyle}>
        {buttonText}
      </NavLink>
    );
  }

  return (
    <>
      <button type={type} className={buttonStyle} onClick={click}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
