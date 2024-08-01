"use client";
import React, { useState } from "react";
import CustomHeader from "./CustomHeader";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceHover = () => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [permanentLinkId, setPermanentLinkId] = useState(null);

  const link = [
    { link: "Website Development", id: 1 },
    { link: "Mobile App Development", id: 2 },
    { link: "Artificial Intelligence", id: 3 },
    { link: "IOT Services", id: 4 },
    { link: "AR/VR App Development", id: 5 },
    { link: "Chatbot Development", id: 6 },
  ];

  const link_content = [
    {
      id: 1,
      head: "Website Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum minus, hic laudantium optio earum autem itaque nemo accusamus qui non quae maiores voluptatibus necessitatibus commodi ea ducimus. Maiores.",
      cont_link: "/",
      img: "/assets/service-page/hover-content/web.svg",
    },
    {
      id: 2,
      head: "Mobile App Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum minus, hic laudantium optio earum autem itaque nemo accusamus qui non quae maiores voluptatibus necessitatibus commodi ea ducimus. Maiores.",
      cont_link: "/",
      img: "/assets/service-page/hover-content/mobile.svg",
    },
    {
      id: 3,
      head: "Artificial Intelligence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum minus, hic laudantium optio earum autem itaque nemo accusamus qui non quae maiores voluptatibus necessitatibus commodi ea ducimus. Maiores.",
      cont_link: "/",
      img: "/assets/service-page/hover-content/ai.svg",
    },
    {
      id: 4,
      head: "IOT Service",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum minus, hic laudantium optio earum autem itaque nemo accusamus qui non quae maiores voluptatibus necessitatibus commodi ea ducimus. Maiores.",
      cont_link: "/",
      img: "/assets/service-page/hover-content/iot.svg",
    },
    {
      id: 5,
      head: "AR/VR Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum minus, hic laudantium optio earum autem itaque nemo accusamus qui non quae maiores voluptatibus necessitatibus commodi ea ducimus. Maiores.",
      cont_link: "/",
      img: "/assets/service-page/hover-content/arvr.svg",
    },
    {
      id: 6,
      head: "Chatbot Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum minus, hic laudantium optio earum autem itaque nemo accusamus qui non quae maiores voluptatibus necessitatibus commodi ea ducimus. Maiores.",
      cont_link: "/",
      img: "/assets/service-page/hover-content/chatbot.svg",
    },
  ];
  
  return (
    <>
      <div className="inner max-w-[100rem] mx-auto px-[5%] lg:py-0 py-10">
        <div className="header lg:mb-20 mb-12">
          <p className="text-center">Solutions for Your Success</p>
          <CustomHeader
            header1={
              <p className=" font-semibold">
                Delivering tailored <span className="text-[#ff5900]">tech</span>{" "}
                solutions to drive your{" "}
                <span className="text-[#ff5900]">success</span>
              </p>
            }
            header2="Success"
            className="before:hidden"
          />
        </div>
        <div className="">
          <div className="header lg:mb-16 mb-10">
            <p className=" text-[#ff5900] font-medium mb-6">CAPABILITIES</p>
            <h1 className=" lg:text-6xl md:text-5xl text-4xl">
              Capabilities to improve your{" "}
              <span className="text-[#ff5900]">Business</span>
            </h1>
          </div>
          <div className="services grid lg:grid-cols-2 gap-8">
            <div className="links-cont col-span-1">
              <ul>
                {link.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => {
                      setPermanentLinkId(null);
                      setActiveLinkId(item.id);
                    }}
                    onMouseLeave={() => {
                      setActiveLinkId(null);
                    }}
                    onClick={() => setPermanentLinkId(item.id)}
                    className="lg:text-3xl text-2xl font-semibold lg:py-7 py-4 flex items-center group cursor-pointer md:max-w-[26rem]"
                  >
                    <div
                      className={
                        (permanentLinkId===item.id ? `w-4` : `w-0`) +
                        ` h-4 mr-5 bg-[#ff5900] group-hover:w-4 ease-in-out duration-200 transition-all`
                      }
                    />
                    <span
                      className={
                        (permanentLinkId===item.id ? "text-white" : "") +
                        `text-white/50 group-hover:text-white ease-in-out duration-200 transition-all`
                      }
                    >
                      {item.link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 justify-center items-center relative lg:flex hidden">
              <div
                className={`default transition-opacity duration-200 ${
                  activeLinkId || permanentLinkId ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/service-page/coding.svg"
                />
              </div>
              <div className="hover-items absolute w-full h-full">
                {link_content.map((link, index) => (
                  <div
                    className={`link-cont relative transition-opacity duration-200 ${
                      activeLinkId === link.id || permanentLinkId === link.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    key={index}
                  >
                    <div className="absolute">
                      <div className="content">
                        <h1 className="text-2xl font-medium flex items-center mb-5">
                          <span className="w-2.5 h-2.5 block bg-[#ff5900] mr-5" />
                          {link.head}
                        </h1>
                        <p className="h-44">{link.content}</p>
                        <Link
                          href={link.cont_link}
                          className=" flex items-center"
                        >
                          Get in Touch <MoveRight className=" w-7 h-7 ml-5" />
                        </Link>
                      </div>
                      <div className="img-cont w-2/3 h-full ml-auto mr-5">
                        <Image
                          width={1000}
                          height={1000}
                          src={link.img}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHover;
