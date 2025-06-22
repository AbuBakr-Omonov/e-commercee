import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 px-4 py-10 md:px-10">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        <div>
          <h2 className="text-[24px] font-Pb mb-12">Funiro.</h2>
          <p className="text-[#9F9F9F] font-Pr">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>
        <div>
          <h3 className="text-[#9F9F9F] mb-7 font-Pm">Links</h3>
          <ul className="space-y-2 flex flex-col gap-11">
            <li><a href="#" className="hover:text-black font-Pm ">Home</a></li>
            <li><a href="#" className="hover:text-black font-Pm ">Shop</a></li>
            <li><a href="#" className="hover:text-black font-Pm ">About</a></li>
            <li><a href="#" className="hover:text-black font-Pm ">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9F9F9F] mb-7 font-pm">Help</h3>
          <ul className="space-y-2 flex flex-col gap-11">
            <li><a href="#" className="hover:text-black font-Pm ">Payment Options</a></li>
            <li><a href="#" className="hover:text-black font-Pm ">Returns</a></li>
            <li><a href="#" className="hover:text-black font-Pm ">Privacy Policies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9F9F9F] mb-7 font-Pm ">Newsletter</h3>
          <div className="flex items-center border-b border-black py-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-2 py-1 outline-none placeholder:text-sm"
            />
            <button className="ml-2 text-xs font-semibold hover:underline">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-xs text-gray-500 py-4 mt-6">
        2023 Funiro. All rights reserved
      </div>
    </footer>

  );
};

export default React.memo(Footer);
