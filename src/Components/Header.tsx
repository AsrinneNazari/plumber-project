import { Link } from "react-router-dom";
import plumbingImg from "./../img/plumbing-840835_1920.jpg";
import { Nav } from "./Navbar";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <>
        <div className="sticky top-0 z-10 bg-white w-full flex items-center justify-between px-4 py-2 shadow-md">
        <Logo />
        <Nav />
    </div>
    <header
      className="relative w-full h-[70vh] bg-cover flex justify-center flex-wrap"
      style={{ backgroundImage: `url(${plumbingImg})` }}
    >
      <div className="flex justify-center items-center h-2/3">
        <Link
          to={"/contact"}
          className="w-full sm:w-auto inline-flex justify-center rounded-md bg-blue px-5 py-2 text-sm font-sans shadow-sm hover:bg-darkblue"
        >
          Kontakta oss
        </Link>
      </div>
    </header>
        </>
  );
};
