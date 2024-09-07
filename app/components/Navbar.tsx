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
    id: "rent",
  },
  {
    route: "Resources",
    link: "/",
    id: "short let",
    icon: "images/arrow-up.svg",
  },
  {
    route: "Contact us",
    link: "/",
    id: "short let",
  },
  {
    route: "Blog",
    link: "/",
    id: "short let",
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
      <div className="w-full bg-white px-28 flex justify-between py-12">
        <img src="images/logo-main.svg" alt="" />
        <div className="flex items-center justify-between gap-10 text-black">
          {navlinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`text-base font-semibold transition-all p-[10px] duration-200 text-ash hover:text-black
                 `}
              //  ${currentPath === item.id ? "text-black" : "text-ash"}
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
        <div className="flex">
          <Button size={"lg"} className="rounded-3xl bg-dark-green">
            Get Started
          </Button>
          <Button size={"icon"} className="rounded-full bg-dark-green"></Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
