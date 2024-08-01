import CustomHeader from "@/components/custom/CustomHeader";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <>
      <section className="about-us w-full bg-black">
        <div className="max-w-[100rem] mx-auto px-[5%]">
          <div className="intro py-12">
            <div className="header mb-16">
              <h1 className=" lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-black text-center text-[#FF590026]">
                Who we are
              </h1>
              <CustomHeader
                header1="About Us"
                header2=""
                className="before:hidden -mt-8"
              />
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1 flex justify-center items-center">
                <div className="content">
                  <p className="mb-6">
                    Befog (A&W Technology) is a leading tech solutions provider
                    established in 2023, specializing in innovative software
                    development and digital transformation services. Our mission
                    is to empower businesses through cutting-edge technology and
                    tailored solutions
                  </p>
                  <Button
                    className={
                      buttonVariants({ variant: "outline" }) + "  mx-2.5"
                    }
                  >
                    More Details
                  </Button>
                </div>
              </div>
              <div className="col-span-1">
                <Image
                alt=""
                  src="/assets/about-us/about-banner.svg"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          <div className="accordion py-12">
            <div className="content mb-16">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-8">
                Creating positive <span className="text-[#ff5900]">change</span>
              </h1>
              <p className="lg:w-[50%]">
                We’re committed to creating positive change around the world and
                ensuring we act as responsible business leaders for our people,
                our clients, and the communities we call home
              </p>
            </div>
            <div className="accord-cont mb-32">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Code of Business Athics</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Sustainability</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Inclusion and Diversity</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Responsive AI</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Apprenticeship</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="header relative mb-20">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold w-[55%] text-center mx-auto">
                We help many of Professionals be more effective at their
                Bussiness
              </h1>
              <div className="img-cont w-80 absolute">
              <Image alt="" width={1000} height={1000} src='/assets/about-us/header-bg.jpg' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
