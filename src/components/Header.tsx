import { NavLink } from "react-router-dom";
import plumbingImg from "./../img/plumbing-840835_1920.jpg";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-[1] mx-auto bg-white flex justify-between px-4 py-3 shadow-md">
        <Logo />
        <Nav />
      </div>
      <header
        className="relative w-full h-[70vh] bg-cover flex justify-center flex-wrap"
        style={{ backgroundImage: `url(${plumbingImg})` }}
      >
        <div className="flex justify-center items-center h-2/3">
          <NavLink to="/contact" className="px-8 py-4 bg-white text-black text-lg font-sans rounded transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100">Kontakta oss</NavLink>
        </div>
      </header>
    </>
  );
};
export default Header;
