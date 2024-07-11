import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
// import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import store from "./Store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/product" element={<ProductList />} />
            <Route path="/contact" element={<Footer />} />
            <Route path="shopping-cart" element={<Cart />}></Route>
            <Route
              path="/product-detail/:productId"
              element={<ProductDetail />}
            />
            <Route index element={<HomePage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
        ?
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
