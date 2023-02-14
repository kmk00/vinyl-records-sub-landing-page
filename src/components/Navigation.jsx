import React from "react";

function Navigation() {
  return (
    <nav
      id="nav"
      className="bg-[#1d1b16] flex justify-between items-center  px-4 py-6"
    >
      <button className="flex gap-2 p-3 bg-[#00a5c0] text-white font-black">
        <p>SUNDAY BLUES</p>
      </button>
      <h3 className="text-white text-right uppercase font-black">
        CLUBE DO DISCO
      </h3>
    </nav>
  );
}

export default Navigation;
