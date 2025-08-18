import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="m-4">
        <ol className="flex justify-evenly list-none text-white font-semibold">
            <li className="hover:text-sky-300 hover:underline cursor-pointer transition-colors">
                Home
            </li>
            <li className="hover:text-sky-300 cursor-pointer hover:underline transition-colors">
                Projects
            </li>
            <li className="hover:text-sky-300 cursor-pointer hover:underline transition-colors">
                Certificates
            </li>
            <li className="hover:text-sky-300 cursor-pointer hover:underline transition-colors">
                Responsibility
            </li>
        </ol>
      </nav>
    </>
  );
};

export default Navbar;
