import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-200">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <NavLink
              to="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Hem
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to="/services"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Tjänster
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to="/contact"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Kontakta oss
            </NavLink>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 Mello Rör AB, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
