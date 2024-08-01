"use client";
import { ChevronDown, GlobeIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    {
      link: "/services",
      title: "Services",
      icon: <ChevronDown className="w-4 h-4 mt-0.5 ml-1 text-white/65" />,
    },
    {
      link: "/about-us",
      title: "About Us",
      icon: <ChevronDown className="w-4 h-4 mt-0.5 ml-1 text-white/65" />,
    },
    {
      link: "/career",
      title: "Career",
      icon: <ChevronDown className="w-4 h-4 mt-0.5 ml-1 text-white/65" />,
    },
    {
      link: "/contact-us",
      title: "Contact Us",
      icon: "",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, toggle]);

  return (
    <header>
      <nav className="bg-black/70 backdrop-blur-md w-full py-0 fixed top-0 text-white z-50">
        <div className="max-w-[100rem] mx-auto px-[5%] flex items-center justify-between">
          <Link
            onClick={() => {
              if (window.innerWidth < 1024) {
                handleToggle();
              }
            }}
            href="/"
            className=" block w-fit z-50"
          >
            <div className=" w-[33%] py-5 hover:w-28 ease-in-out duration-500 transition-all overflow-hidden">
              <div className="w-28">
                <Image
                  src="/assets/befog_logo.svg"
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          <div
            className={
              (isMobile && toggle ? "!right-0 " : "!-right-[104%] ") +
              " links lg:relative absolute lg:w-fit w-screen lg:h-auto h-screen top-0 right-0 ease-in-out duration-500 transition-all lg:bg-transparent bg-black flex justify-center items-center lg:!right-0 lg:backdrop-blur-none backdrop-blur-4px"
            }
          >
            <ul
              className={`flex lg:flex-row flex-col items-center lg:text-base text-xl`}
            >
              {links.map((link, index) => (
                <li key={index} className="group">
                  <Link
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        handleToggle();
                      }
                    }}
                    href={link.link}
                    className="flex items-center justify-center mx-3 py-2 px-2 group-hover:text-[#FF5900] transition-all ease-in-out duration-200"
                  >
                    {link.title}
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center justify-center">
            <div className="region flex z-50">
              <GlobeIcon />
              <span className="flex items-center ml-2.5 text-sm">
                India{" "}
                <ChevronDown className="w-4 h-4 mt-0.5 ml-1 text-white/65" />
              </span>
            </div>
            <span
              onClick={() => {
                handleToggle();
              }}
              className="toggle lg:hidden grid place-items-center relative w-8 h-8 bg-transparent ml-12"
            >
              {toggle ? (
                <FaXmark className=" text-xl absolute" />
              ) : (
                <MenuIcon className=" w-6 h-6 absolute" />
              )}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
