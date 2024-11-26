import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-end overflow-hidden gap-y-10px">
        <div>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/about">Om oss</NavLink>
          <NavLink to="/services">Tjänster</NavLink>
          <NavLink to="/contact">Kontakta oss</NavLink>
        </div>
      </div>
    </>
  );
};
