import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-[3em] text-white">
      <div className="px-[45px] py-[94px] bg-dark-green w-full rounded-[20px]">
        <div className="flex flex-col gap-[125px] w-full">
          <div className="flex justify-between w-full h-full">
            <div className="flex flex-col justify-between">
              <img src="images/Logo.svg" alt="Logo" />
              <img src="images/logo-sticker.svg" alt="logo sticker" />
            </div>
            <div className="flex flex-col gap-[30px] text-xl">
              <span className="text-lighter-yellow">Company</span>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Partners</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Cookies Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[30px] text-xl">
              <span className="text-lighter-yellow">Resources</span>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Help Center</a>
                </li>
                <li>
                  <a href="">Partners</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Learn </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[30px] text-xl">
              <span className="text-lighter-yellow">Legal</span>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[30px] text-xl">
              <span className="text-lighter-yellow">Socials</span>
              <div className="flex flex-col gap-2.5">
                <Link
                  href={""}
                  className="p-[13px] bg-white rounded-full flex w-fit"
                >
                  <Image
                    src="/instagram-filled.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </Link>
                <Link
                  href={""}
                  className="p-[13px] bg-white rounded-full w-fit"
                >
                  <Image
                    src="/facebook-filled.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </Link>
                <Link
                  href={""}
                  className="p-[13px] bg-white rounded-full w-fit"
                >
                  <Image
                    src="/linkedin-filled.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </Link>
                <Link
                  href={""}
                  className="p-[13px] bg-white rounded-full w-fit flex items-center justify-center"
                >
                  <Image
                    src="/x-filled.svg"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[84px] items-center">
            <img src="/images/watermark.svg" alt="Watermark" />
            <p className="text-xl font-normal text-gray-400">
              Copyright © 2024 Young & Skilled Initiative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
