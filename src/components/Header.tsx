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
          <NavLink to="/contact" className="w-40 sm:w-auto inline-flex justify-center rounded bg-white px-6 py-3 text-lg font-semibold font-sans shadow-sm hover:bg-gray-100 whitespace-nowrap">Kontakta oss</NavLink>
        </div>
      </header>
    </>
  );
};
export default Header;
