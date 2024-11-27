import { Nav} from "./Navbar";
import plumbingImg from "./../img/plumbing-840835_1920.jpg";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header
      className="relative w-full h-[60vh] bg-auto bg-center flex-wrap"
      style={{ backgroundImage: `url(${plumbingImg})` }}
    >
      <div className="sticky top-0 z-10 bg-white w-full flex items-center justify-between px-6 py-4 shadow-md">
      <Logo/>
      <Nav />
      </div>
    </header>
  );
};
