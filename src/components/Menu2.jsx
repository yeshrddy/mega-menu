import React from "react";
import Popover from "./Menu3";

import { AiOutlineAppstore } from "react-icons/ai";

const Menu2 = () => {
  return (
    <Popover>
      <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
        
        <li>
          <a
            href="#"
            className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
          >
            Influence
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
          >
            Programming
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
          >
            Design
          </a>
        </li>
      </ul>
    </Popover>
  );
};

export default Menu2;
