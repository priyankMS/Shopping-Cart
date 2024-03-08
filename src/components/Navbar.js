import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="flex  justify-between  items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <img src={require('../assets/logo.png')} alt="logo" className="h-[150px]" />
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/">
            <p className="text-2xl">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart  className=" text-2xl"/>
              {cart.length > 0 && (
                <span className=" absolute  bg-green-500 text-slate-100 rounded-full  text-xs w-5 flex  justify-center items-center 
                 animate-bounce  -top-1 -right-2">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
