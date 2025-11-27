import "./App.css";
import { ProductProvider } from "./Context/ProductContext";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <ProductProvider>
        <RouterProvider router={Router} />
      </ProductProvider>
    </>
  );
}

export default App;
