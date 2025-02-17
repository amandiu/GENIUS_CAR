import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Components/About/About";
import Services from "./Pages/Home/Service/Services";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Root from "./Components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div style={{ textAlign: "center", padding: "20px" }}>Page Not Found</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 15px" }}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
