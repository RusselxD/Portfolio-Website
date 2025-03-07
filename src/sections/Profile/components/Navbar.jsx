import React from "react";

import logo from '../../../assets/Logo.svg'

const Navbar = () => {
    return (
     <div className="border border-black h-16 w-full flex justify-between items-center">
          <div className="flex justify-center items-center">
               <img src={logo} className="h-10 2-10 mr-2"/>
               <h1 className="text-xl font-semibold">Russel</h1>
          </div>
          <div>Navs</div>
     </div>
    )
};

export default Navbar;
