import React from "react"; //{useContext}
// import { useTranslation } from "react-i18next";
// import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const { toggleTheme } = useContext(ThemeContext);
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 dark:text-gray border-b-2 border-blue-500"
      : "text-gray-3s00 dark:text-gray hover:text-blue-500";

  return (
    <nav className="bg-white  p-5 flex justify-between items-center shadow-md">
      <div className="text-lg  font-serif text-black-800 dark:text-black">
        {"Shopping-Cart App"}
      </div>

      <div className="text-lg font-serif text-black-800 dark:text-black hidden md:flex space-x-6 ">
        <NavLink to="/" className={linkClass}>
          Trang Chủ
        </NavLink>
        <NavLink to="/product" className={linkClass}>
          Sản Phẩm
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Liên Hệ
        </NavLink>
      </div>

      <div className="flex place-items-center space-x-4">
        {/* <FontAwesomeIcon
          icon={faMoon}
          onClick={toggleTheme}
          className="text-black-500 text-xl m-2 p-2 cursor-pointer"
        /> */}

        <NavLink to="/login" className={linkClass}>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink to="/shopping-cart" className={linkClass}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </NavLink>
        {/* <div className="flex place-items-center space-x-2">
          <button
            onClick={() => changeLanguage("en")}
            className="text-lg font-serif px-2 py-1 rounded-lg bg-white-500 text-black hover:bg-blue-600 focus:outline-none"
          >
            en
          </button>
          <button
            onClick={() => changeLanguage("vi")}
            className="text-lg font-serif px-2  py-1 rounded-lg bg-white-500 text-black hover:bg-blue-600 focus:outline-none"
          >
            vi
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
