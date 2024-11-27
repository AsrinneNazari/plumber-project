import { Navbar } from "./Navbar";
import plumbingImg from "./../img/plumbing-840835_1920.jpg";

export const Header = () => {
  return (
    <header
      className="relative w-full h-[60vh] bg-auto bg-center"
      style={{ backgroundImage: `url(${plumbingImg})` }}
    >
      <Navbar />
    </header>
  );
};
