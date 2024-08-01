import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CustomHeader from "./CustomHeader";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "App Developement",
      description:
        "Elevate your business with engaging mobile apps that captivate users, drive sales, and foster growth.",
      image: "/assets/card_image/app.jpg",
      bg: `bg-gradient-to-b from-[#1B0000] to-[#1B0000]`,
      blend: "#ff5900,#ff5900",
      // blend: "#1B0000,#1B0000",
    },
    {
      title: "Website Developement",
      description:
        "Create visually appealing and functional websites that attract visitors, convert leads, and build a strong online presence.",
      image: "/assets/card_image/web.jpg",
      bg: "bg-gradient-to-b from-[#130000] to-[#130000]",
      blend: "#ff5900,#ff5900",
      // blend: "#130000 ,#130000",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Leverage data-driven insights. Optimize operations. Make informed decisions. Drive business growth.",
      image: "/assets/card_image/ai.jpg",
      bg: "bg-gradient-to-b from-[#100202] to-[#100202]",
      blend: "#ff5900,#ff5900",
      // blend: "#100202 ,#100202",
    },
    {
      title: "IOT Service",
      description:
        "Connect devices and data. Create innovative solutions. Improve efficiency. Gain a competitive edge.",
      image: "/assets/card_image/iot.jpg",
      bg: "bg-gradient-to-b from-[#1F0003] to-[#2F0005]",
      blend: "#ff5900,#ff5900",
      // blend: "#1F0003 10%,#2F0005 90%",
    },
    {
      title: "AR/VR Service",
      description:
        "Immerse audiences in interactive experiences that drive sales, build brand awareness, and create lasting impressions.",
      image: "/assets/card_image/ar-vr.jpg",
      bg: "bg-gradient-to-b from-[#1C0003] to-[#37000F]",
      blend: "#ff5900,#ff5900",
      // blend: "#1C0003 10%,#37000F 100%",
    },
    {
      title: "Chatbot Service",
      description:
        "Provide efficient and personalized customer support, increase satisfaction, and build stronger customer relationships.",
      image: "/assets/card_image/chatbot.jpg",
      bg: "bg-gradient-to-b from-[#37000E] from-[32.39%] via-[#470013] via-[87.14%] to-[#36000E] to-[100%]",
      blend: "#ff5900,#ff5900",
      // "#470013 80%,#36000E 100%"
    },
  ];
  return (
    <>
      <section className="services lg:py-28 py-20 bg-[#000]">
        <div className="inner-services max-w-[100rem] mx-auto px-[5%] grid lg:grid-cols-2 lg:mb-40 mb-28">
          <div className="service-content col-span-1 flex justify-center items-center lg:mb-0 mb-16">
            <div className="content lg:pr-[10%] flex flex-col lg:items-start items-center">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:mb-12 mb-5">
                <span className="text-[#FF5900] font-semibold">Services</span>{" "}
                We{" "}
                <span className="after:h-1 after:w-[80%] w-full after:absolute relative after:block after:bottom-0 after:-right-3 after:bg-[#FF5900] after:rounded-full">
                  Provide
                </span>
              </h1>
              <p className="mb-5 lg:text-left text-center md:text-base text-sm">
                At Befog(A&W Technology), we blend innovation with precision to
                deliver tailored IT solutions. From crafting seamless web
                experiences to harnessing cutting-edge technologies, our expert
                team is dedicated to transforming ideas into impactful
                realities. Discover how we can empower your digital journey
                today.
              </p>
              <Button className=" w-fit lg:block hidden">Explore Now</Button>
            </div>
          </div>
          <div className="col-span-1 lg:px-0 md:px-[15%] flex items-center justify-center flex-col">
            <Image
            alt=""
              width={1000}
              height={1000}
              className="object-cover"
              src="/assets/services.svg"
            />
              <Button className=" w-fit lg:hidden block mt-8">Explore Now</Button>
          </div>
        </div>
        <div className="service-category max-w-[100rem] mx-auto px-[5%]">
          <div className="hed lg:mb-20 mb-8">
            <CustomHeader
              header1="Categories"
              header2="Service"
              className="before:-left-3"
            />
            <p className="text-center md:text-base text-sm">
              Streamlined web solutions for seamless online experiences.
            </p>
          </div>
          <div className="cards w-fit mx-auto grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 md:gap-5 gap-2">
            {services.map((service, index) => (
              <div className="service-cont col-span-1 md:scale-100 sm:scale-85" key={index}>
                <ServiceCard service={service} className={service.bg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
