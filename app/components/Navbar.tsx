"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navlinks = [
  {
    route: "Home",
    link: "",
    id: "home",
  },
  {
    route: "About us",
    link: "/",
    id: "about",
  },
  {
    route: "Resources",
    link: "/",
    id: "resources",
    icon: "images/arrow-up.svg",
  },
  {
    route: "Contact us",
    link: "/",
    id: "contact-us",
  },
  {
    route: "Blog",
    link: "/",
    id: "Blog",
  },
];

interface NavbarProps {
  className?: string; // Explicitly typing the className prop as string
}
const Navbar: React.FC<NavbarProps> = ({ className }) => {
  //   const pathname = usePathname();
  //   console.log(pathname);
  //   const currentPath = pathname?.split("/")[2];
  //   console.log(currentPath);
  return (
    <>
      <div className="w-full bg-white xl:px-28 px-4 flex justify-between gap-6 py-12">
        <img src="images/logo-main.svg" alt="" />
        <div className="flex items-center justify-between gap-2 lg:gap-10 text-black">
          {navlinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`text-base font-semibold transition-all p-[10px] text-nowrap duration-200 text-ash hover:text-black
                 `}
            >
              <span className="flex gap-2">
                {item.route}
                {item.icon && item.route === "Resources" && (
                  <img src={item.icon} alt="" />
                )}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Button size={"lg"} className="rounded-3xl bg-dark-green">
            Get Started
          </Button>
          <Button
            size={"icon"}
            className="rounded-full bg-dark-green ml-[-6px] "
          >
            <img src="/arrow.svg" alt="" className="p-2" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
