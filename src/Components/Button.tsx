import { NavLink } from "react-router-dom";

interface IButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  to?: string;
  click?: () => void;
}

export const Button = ({ buttonText, type, to, click }: IButtonProps) => {
  const buttonStyle =
    "w-full sm:w-auto inline-flex justify-center rounded-md bg-blue px-5 py-2 text-sm font-sans shadow-sm hover:bg-darkblue";

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
