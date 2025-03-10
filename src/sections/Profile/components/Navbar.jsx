import React from "react";

import logo from '/russel.svg'

const Navbar = () => {
    return (
     <div className="translate-y-7 h-20 w-full flex justify-between items-center">
          <div className="flex justify-center items-center">
               <img src={logo} className="h-10 md:h-12 mr-2"/>
               <h1 className="text-xl md:text-2xl font-semibold">Russel</h1>
          </div>
          <div></div>
     </div>
    )
};

export default Navbar;
