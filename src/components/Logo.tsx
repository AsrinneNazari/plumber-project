import { NavLink } from "react-router-dom";

const Logo = () => {
  /* Future logo here! */
  return (
    <>
      <NavLink
        to="/"
        className="flex justify-items-start font-roboto font-bold text-2xl "
      >
        Mello Rör AB
      </NavLink>
    </>
  );
};
export default Logo;
