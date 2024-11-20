import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { About } from "./Pages/About";
import { Services } from "./Pages/Sevices";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Notfound } from "./Pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
    errorElement: <Notfound/>,
  },
]);
