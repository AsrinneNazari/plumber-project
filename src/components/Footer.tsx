import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-200 bg-slate-200">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <NavLink
              to="/"
              className="text-base leading-6 text-gray-700 hover:text-black"
            >
              Hem
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to="/services"
              className="text-base leading-6 text-gray-700  hover:text-black"
            >
              Tjänster
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to="/contact"
              className="text-base leading-6 text-gray-700  hover:text-black"
            >
              Kontakta oss
            </NavLink>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 Mello Rör AB, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
