import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  const social = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/befogtech/mycompany/",
    },
    { icon: <FaInstagram />, link: "https://www.instagram.com/befogtech/" },
    { icon: <FaSquareFacebook />, link: "https://www.facebook.com/techapli" },
  ];

  const use_case = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Service",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
    {
      title: "Career",
      link: "/",
    },
    {
      title: "Opportunity",
      link: "/",
    },
    {
      title: "Direct Contact",
      link: "/",
    },
  ];

  const services = [
    {
      title: "App Development",
      link: "/",
    },
    {
      title: "Website Development",
      link: "/",
    },
    {
      title: "Cloud Services",
      link: "/",
    },
    {
      title: "SEO",
      link: "/",
    },
    {
      title: "Support",
      link: "/",
    },
    {
      title: "Developers",
      link: "/",
    },
  ];

  const explore = [
    {
      title: "About the Company",
      link: "/",
    },
    {
      title: "All Services",
      link: "/",
    },
    {
      title: "Courses",
      link: "/",
    },
    {
      title: "One to One Support",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  return (
    <>
      <footer className="bg-black text-white px-[2%] mt-auto relative">
        <div className="line w-full mx-auto h-px bg-[#ff5900]" />
        <div className="footer-container max-w-[100rem] mx-auto px-[3%] py-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
          <div className="md:col-span-1 sm:col-span-2 block lg:mb-0 md:mb-5 mb-3">
            <div className="logo-cont w-fit">
              <Link href='/' ><Image
              alt=""
                width={1000}
                height={1000}
                className="w-40"
                src="/assets/befog_logo.svg"
              />
              <p className="text-center mt-1">A&W Technologies</p></Link>
            </div>
            <div className="social mt-5 block">
              <ul className="flex text-2xl">
                {social.map((media, index) => (
                  <li key={index} className="mx-2">
                    <a href={media.link} target="_blank">
                      {media.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
            <h1 className=" font-semibold text-[#ff5900] mb-5">Use Cases</h1>
            <ul>
              {use_case.map((link, index) => (
                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                  <Link href={link.link} className="py-0.5 block w-full">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
            <h1 className=" font-semibold text-[#ff5900] mb-5">Services</h1>
            <ul>
              {services.map((link, index) => (
                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                  <Link href={link.link} className="py-0.5 block w-full">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1 sm:col-span-2">
            <h1 className=" font-semibold text-[#ff5900] mb-5">Explore</h1>
            <ul>
              {explore.map((link, index) => (
                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                  <Link href={link.link} className="py-0.5 block w-full">
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="md:my-1.5 my-0 md:text-base text-sm">
                <a href="" className="py-0.5 block w-full">Go to Top</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
