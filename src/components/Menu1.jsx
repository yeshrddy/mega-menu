import React from "react";

const Menu1 = () => {
  return (
    <div className="absolute w-full top-0 transition translate-y-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
      <div className="mx-auto max-w-7xl absolute top-6 p-6 bg-white rounded-xl shadow-xl">
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                
                <li>
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    <AiOutlineAppstore size={23} className="min-w-max" />
                    Accept payments
                    <p className="text-gray-500 font-normal">
                      Pre-build payments page
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Closed Captioning
                    <p className="text-gray-500 font-normal">
                      Use AI to generate captions
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                Extensions
              </p>
              <ul className="mt-3 text-[15px]">
                <li>
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Plugins
                    <p className="text-gray-500 font-normal">
                      Tweak existing functionality
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Batch uploads
                    <p className="text-gray-500 font-normal">
                      Get your time back
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Social sharing
                    <p className="text-gray-500 font-normal">
                      Generate content for socials
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu1;
