import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface INavLinkProps {
  click: () => void;
}

export const NavLinks = ({ click }: INavLinkProps) => {
  return (
    <>
      <NavLink to="/" className="hover:underline" onClick={click}>
        Hem
      </NavLink>
      <NavLink to="/about" className="hover:underline" onClick={click}>
        Om oss
      </NavLink>
      <NavLink to="/services" className="hover:underline" onClick={click}>
        Tjänster
      </NavLink>
      <NavLink to="/contact" className="hover:underline" onClick={click}>
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
      <div className="flex justify-items-center">
        <nav className=" md:block md:flex md: max-w-md flex flex-[1] items-center justify-end">
          <div className="hidden md:flex justify-end gap-6">
            <NavLinks click={toggleBar} />
          </div>
        </nav>
        {isOpen && (
          <div className="flex flex-col mt-4 basis-full justify-center justify-items-center md:hidden px-8 gap-9">
            <NavLinks click={toggleBar} />
          </div>
        )}
      </div>
      <div className="flex w-[75px] md:hidden justify-end items-start">
        <button onClick={toggleBar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </>
  );
};
