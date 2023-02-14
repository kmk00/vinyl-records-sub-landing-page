import React from "react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterLine,
  RiSpotifyLine,
} from "react-icons/ri";
import { TbVinyl } from "react-icons/tb";
import { HiArrowSmUp } from "react-icons/hi";

function Footer() {
  return (
    <footer className=" flex md:justify-between justify-center gap-12 mx-20 px-4 my-8 text-white">
      <div className="flex gap-6  text-white">
        <RiFacebookCircleLine className="md:text-5xl text-3xl" />
        <RiInstagramLine className="md:text-5xl text-3xl" />
        <RiYoutubeLine className="md:text-5xl text-3xl" />
        <RiTwitterLine className="md:text-5xl text-3xl" />
        <RiSpotifyLine className="md:text-5xl text-3xl" />
        <TbVinyl className="md:text-5xl text-3xl" />
      </div>
      <a href="#nav">
        <HiArrowSmUp className="md:text-5xl text-xl" />
      </a>
    </footer>
  );
}

export default Footer;
