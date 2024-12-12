import plumbingImg from "./../img/plumbing-840835_1920.jpg";
import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
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
          <Button to={"/contact"} buttonText="Kontakta oss" />
        </div>
      </header>
    </>
  );
};
export default Header;
