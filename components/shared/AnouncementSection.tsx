import Link from "next/link";
import React from "react";

const homeLinks = [
  { title: "home", href: "/" },
  { title: "about us", href: "/about" },
  { title: "contact", href: "/contact" },
  { title: "faq", href: "/faq" },
  { title: "t&c", href: "/terms-conditions" },
];

const userProfileLinks = [
  { title: "9883323213", href: "/" },
  { title: "wishlist", href: "/wishlist" },
  { title: "compare", href: "/compare" },
  { title: "register", href: "/register" },
  { title: "login", href: "/login" },
];

const AnouncementSection = () => {
  return (
    <div className=" bg-slate-950  text-white h-11 lg:flex hidden">
      <div className="flex justify-between container items-center h-full ">
        <nav className=" flex gap-3 px-2">
          {homeLinks.map((link, i) => {
            return (
              <Link
                href={link.href}
                key={i}
                className="uppercase text-xs font-medium hover:text-pink-700  "
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
        <div>
          <Link href={"/"}>wishlist</Link>
        </div>
      </div>
    </div>
  );
};

export default AnouncementSection;
