import React from "react";
import Cards from "./Cards";
import Comments from "./Comments";

function Main() {
  return (
    <div className="bg-gradient-to-t from-[#CC9225] to-white px-8 py-8">
      <Cards />
      <Comments />
    </div>
  );
}

export default Main;
