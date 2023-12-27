import { ArrowRight } from 'lucide-react';
import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai';

const Menu4 = () => {
  return (
    <div className={`absolute top-0 transition translate-y-7 -translate-x-96 opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50 w-[1000px] transform`}>
      <div className="relative top-6 p-12 bg-white rounded-xl shadow-xl w-full">
        <div className="relative z-10">
        <div className="w-full">
            <div className="mx-auto flex flex-col items-start space-x-8 md:flex-row">
                <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="mb-8 lg:mb-0">
                    <a
                     href="#"
                     className="cls mb-6 inline-flex items-center text-sm font-bold capitalize text-black transition duration-300 transform hover:text-pink-400 group"
                    >
                        <span className="mx-1">Company</span>
                        <span className="transition-transform transform group-hover:translate-x-1">
                            <ArrowRight size={16} style={{ transition: 'transform 300ms' }} />
                        </span>
                    </a>
                    <ul className="flex flex-col space-y-4 text-[14px] font-normal text-gray-500 cursor-pointer">
                        <li className="group hover:text-pink-400 transition duration-300 ">About us</li>
                        <li className="group hover:text-pink-400 transition duration-300 ">Company History</li>
                        <li className="group hover:text-pink-400 transition duration-300 ">Our Team</li>
                        <li className="group hover:text-pink-400 transition duration-300">Our Vision</li>
                        <li className="group hover:text-pink-400 transition duration-300">Press Release</li>
                    </ul>
                    </div>
                ))}
                </div>
            </div>
            {/* <hr className="my-4" /> */}
            </div>
        </div>
      </div>
    </div>
  )
}
export default Menu4;