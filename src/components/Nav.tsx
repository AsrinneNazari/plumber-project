import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface INavLinkProps {
  click: () => void;
}

const NavLinks = ({ click }: INavLinkProps) => {
  return (
    <>
      <NavLink
        to="/"
        className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        onClick={click}
      >
        Hem
      </NavLink>
      <NavLink
        to="/services"
        className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        onClick={click}
      >
        Tjänster
      </NavLink>
      <NavLink
        to="/contact"
        className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        onClick={click}
      >
        Kontakta oss
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); /* Closes menu if desktop size */
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* @see https://blog.bitsrc.io/using-react-hooks-to-recognize-respond-to-current-viewport-size-c385009005c0 */
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

export default Nav;
