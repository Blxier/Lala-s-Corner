import React, { useState } from "react";
import "../App.css";
import Logo from "../assets/logo-brown.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <header>
      <div className="p-2 flex justify-between items-center">
        <img className="w-48 md:w-64" src={Logo} alt="React Logo" />
        <div className="hidden md:block text-2xl bg-black text-ground px-5 py-1 rounded-full">
          SIGN IN
        </div>

        <nav
          className={
            toggle
              ? "block md:hidden fixed left-0 right-0 top-16 py-2 h-full bg-black px-6 w-1/2 sm:w-1/2 md:w-1/4 transition ease-in-out delay-150 mt-0 z-20"
              : "block md:hidden fixed left-0 right-0 top-16 py-2 h-full bg-black px-6 w-1/2 md:w-1/4 transition ease-in-out delay-150 -translate-x-96  mt-0 z-20"
          }
        >
          <ul className="text-white">
            <li className="border-b border-gray-700 pt-4 ml-4">
              <a href="#home">SIGN IN</a>
            </li>
          </ul>
        </nav>

        <button className="block md:hidden" onClick={handleToggle}>
          {!toggle ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
