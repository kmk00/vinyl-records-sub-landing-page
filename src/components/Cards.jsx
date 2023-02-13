import React from "react";
import CardItem from "./CardItem";
import { data } from "../data.js";

function Cards() {
  return (
    <div className=" flex flex-col xl:grid xl:grid-cols-3 gap-4 items-center">
      {data.map((item) => (
        <CardItem key={item.id} card={item} />
      ))}
    </div>
  );
}

export default Cards;
