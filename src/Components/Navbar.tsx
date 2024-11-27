import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-400 min-h-16 p-4 text-white">
        <h3 className="flex justify-start text-3xl"><NavLink to="/">Mello rör AB</NavLink></h3>
        <div className="flex justify-end gap-6">
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/about">Om oss</NavLink>
          <NavLink to="/services">Tjänster</NavLink>
          <NavLink to="/contact">Kontakta oss</NavLink>
        </div>
      </div>
    </>
  );
};
