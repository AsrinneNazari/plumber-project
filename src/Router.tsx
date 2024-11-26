import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Services } from "./pages/Sevices";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Notfound";

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
