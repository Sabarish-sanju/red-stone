import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorComponent from "../components/ErrorComponent";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/ProductDetail";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Checkout from "../Pages/Checkout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Products",
    element: <Products />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Cart",
    element: <Cart />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Signup",
    element: <Signup />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
    errorElement: <ErrorComponent />,
  },
]);

export default Router;
