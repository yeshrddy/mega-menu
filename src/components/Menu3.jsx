import React, { useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';

const items = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  { text: 'Item 4' },
  { text: 'Item 5' },
];

const Menu3 = () => {
  return (
    <div
      className={`absolute top-0 -left-2 transition translate-y-7 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] max-w-7xl transform`}
    >
      <div className="relative top-6 p-1 bg-white rounded-xl shadow-xl w-full">
        <div className="relative z-10">
          <ul className="whitespace-pre p-2.5 text-[0.9rem] flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center text-gray-600 p-[0.5em] font-semibold hover:text-pink-400 transition duration-300 hover:bg-gray-300 hover:bg-opacity-25 hover:rounded-s-md"
                >
                  <AiOutlineAppstore size={23} className="mr-2" />
                  <span className='mr-auto ml-1'>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu3;

