import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <NavLink to="/" className="hover:underline">
        Hem
      </NavLink>
      <NavLink to="/about" className="hover:underline">
        Om oss
      </NavLink>
      <NavLink to="/services" className="hover:underline">
        Tjänster
      </NavLink>
      <NavLink to="/contact" className="hover:underline">
        Kontakta oss
      </NavLink>
    </>
  );
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex w-full justify-end items-center">
        <div className="hidden md:flex w-full justify-end gap-6">
          <Navbar />
        </div>
        <div className="flex w-[75px] md:hidden justify-end">
          <button onClick={toggleBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 md:hidden bg-white">
          <Navbar />
        </div>
      )}
    </>
  );
};
