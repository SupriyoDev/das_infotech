import Link from "next/link";

import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const navLinks = [
  { title: "Pc components", href: "/pc-components" },
  { title: "Laptops", href: "/laptops" },
  { title: "Stores", href: "/" },
  { title: "About", href: "/about" },
];

const Header = () => {
  return (
    <div className="bg-customBlue px-10 h-18 flex items-center sticky top-0 mt-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center container ">
        {/* logo  */}
        <div>
          <Link
            href={"/"}
            className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-white"
          >
            Das Infotech
          </Link>
        </div>

        {/* navigation links  */}
        <nav className="  lg:flex gap-4 hidden ">
          {navLinks.map((nav, i) => {
            return (
              <Link
                href={nav.href}
                key={i}
                className="text-white uppercase font-bold text-sm leading-relaxed hover:bg-red-500 py-6  px-3 "
              >
                {nav.title}
              </Link>
            );
          })}
        </nav>

        {/* search and cart  */}

        <div className=" flex gap-6 text-white items-center">
          <IoSearch className="lg:w-8 lg:h-8 w-5 h-5" />
          <PiShoppingCartSimpleBold className="lg:w-8 lg:h-8 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
