import Link from "next/link";
import { MdPhoneInTalk } from "react-icons/md";

const homeLinks = [
  { title: "home", href: "/" },
  { title: "about us", href: "/about" },
  { title: "contact", href: "/stores" },
  // { title: "faq", href: "/faq" },
  { title: "privacy-policy", href: "/privacy-policy" },
];

// const userProfileLinks = [
//   { title: "9883323213", href: "/" },
//   { title: "wishlist", href: "/wishlist" },
//   { title: "compare", href: "/compare" },
//   { title: "register", href: "/register" },
//   { title: "login", href: "/login" },
// ];

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
          <Link href={"/"} className="flex gap-2 items-center">
            <MdPhoneInTalk className="w-6 h-6" />
            9434340767{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnouncementSection;
