"use client";
import React, { useEffect, useRef } from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceFull = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top center",
            scrub: true,
            once: true,
            onEnter: () => {
              gsap.fromTo(
                section,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3 }
              );
            },
            onLeaveBack: () => {
              gsap.set(section, { y: 0, opacity: 1 });
            },
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const serviceData = [
    {
      header: "Website Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "/assets/service-page/service-full/web.svg",
    },
    {
      header: "Mobile Application Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus.",
      img: "/assets/service-page/service-full/app.svg",
    },
    {
      header: "Artifical Intelligence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "/assets/service-page/service-full/ai.svg",
    },

    {
      header: "IOT Service",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "/assets/service-page/hover-content/iot.svg",
    },
    {
      header: "AR/VR Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "/assets/service-page/hover-content/arvr.svg",
    },
    {
      header: "Chatbot Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a molestias molestiae reprehenderit quisquam commodi incidunt asperiores saepe inventore repudiandae, natus doloribus. Tenetur saepe quis eius dignissimos, unde facere ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "/assets/service-page/hover-content/chatbot.svg",
    },
  ];

  return (
    <>
      <div className="inner max-w-[100rem] mx-auto px-[7%] lg:py-0 py-10">
        {serviceData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="grid lg:grid-cols-3 grid-cols-2 lg:gap-20 gap-10 lg:py-16 py-8"
          >
            <div
              className={
                (index % 2 === 0
                  ? "lg:order-1 lg:justify-start "
                  : "lg:order-2 lg:justify-end ") +
                "col-span-2 flex items-center"
              }
            >
              <div
                className={
                  (index % 2 === 0
                    ? "lg:items-start lg:justify-start"
                    : "lg:items-end lg:justify-end") +
                  " content flex flex-col lg:w-[80%] w-full"
                }
              >
                <h1 className="md:text-3xl text-2xl font-medium lg:mb-10 mb-5">{item.header}</h1>
                <p
                  className={(index % 2 === 0 ? "lg:text-left" : "lg:text-right")+' md:text-base text-sm'}
                >
                  {item.content}
                </p>
                <Button
                  className={
                    buttonVariants({ variant: "outline" }) +
                    " text-[#ff5900] w-fit lg:mt-10 mt-5"
                  }
                >
                  Contact
                </Button>
              </div>
            </div>
            <div
              className={
                (index % 2 === 0 ? "lg:order-2 " : "lg:order-1 ") +
                "lg:col-span-1 col-span-2 lg:w-full md:w-[50%] sm:w-[70%] w-full mx-auto"
              }
            >
              <Image
              alt=""
                width={1000}
                height={1000}
                src={item.img}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceFull;
