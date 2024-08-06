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
import ServiceCard from "@/components/custom/ServiceCard";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { MoveRight } from "lucide-react";

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
            <div className="header relative mb-40 w-[55%] mx-auto">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">
                We help many of Professionals be more effective at their
                Bussiness
              </h1>
              <div className="img-cont w-80 absolute -right-20">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src="/assets/about-us/header-bg.jpg"
                />
              </div>
            </div>
          </div>

          <div className="values py-12">
            <div className="header mb-16">
              <h1 className=" lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-black text-center text-[#FF590026]">
                Core Values
              </h1>
              <CustomHeader
                header1="Your Trust"
                header2=""
                className="before:hidden -mt-8"
              />
              <p className="text-center">
                {" "}
                We are committed to delivering top-notch services that exceed
                our clients' expectations
              </p>
            </div>
            <div className="cards flex justify-between">
              <div className="col-1 w-full mx-1.5">
                <div className="h-20 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="h-full w-full bg-black rounded-2xl"></div>
                </div>
                <div className="card w-full border-2 border-[#ff5900] rounded-2xl py-24 px-10 mb-3 relative group overflow-hidden">
                  <h1 className="text-center text-xl mb-5">Sustainability</h1>
                  <p className="text-center mb-3">
                    We are committed to sustainable practices that benefit our
                    clients
                  </p>
                  <p className="h-36 text-center relative group-hover:left-0 left-[120%] group-hover:bottom-0 -bottom-20 ease-in-out duration-200 transition-all">
                    Our solutions are tailored to meet the unique requirements
                    of each client, ensuring maximum value and impact
                  </p>
                  <Link
                    href="/about-us"
                    className="flex items-center absolute group-hover:bottom-8 -bottom-20 right-10 ease-in-out duration-200 transition-all"
                  >
                    Expand <MoveRight className="ml-1.5 w-5 h-5" />
                  </Link>
                </div>
                <div className="h-32 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-80% rounded-2xl mb-3 p-0.5">
                  <div className="h-full w-full bg-black rounded-2xl"></div>
                </div>
              </div>
              <div className="col-2 w-full mx-1.5">
                <div className="h-16 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-85% rounded-2xl mb-3 p-0.5">
                  <div className="h-full w-full bg-black rounded-2xl"></div>
                </div>
                <div className="border-2 border-[#ff5900] rounded-2xl mb-3 py-10 px-10">
                  <h1 className="text-center text-xl mb-5">Innovation</h1>
                  <p className="text-center">
                    Innovation is at the heart of everything we do
                  </p>
                </div>
                <div className="border-2 border-[#ff5900] rounded-2xl mb-3 py-16 px-10">
                  <h1 className="text-center text-2xl">Core Values</h1>
                </div>
                <div className="border-2 border-[#ff5900] rounded-2xl mb-3 py-10 px-10">
                  <h1 className="text-center text-xl mb-5">Innovation</h1>
                  <p className="text-center">
                    Innovation is at the heart of everything we do
                  </p>
                </div>
                <div className="h-16 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-80% rounded-2xl mb-3 p-0.5">
                  <div className="h-full w-full bg-black rounded-2xl"></div>
                </div>
              </div>
              <div className="col-3 w-full mx-1.5">
                <div className="h-32 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  {" "}
                  <div className="h-full w-full bg-black rounded-2xl"></div>
                </div>
                <div className="card w-full border-2 border-[#ff5900] rounded-2xl py-24 px-10 mb-3 relative group overflow-hidden">
                  <h1 className="text-center text-xl mb-5">
                    Customer-Centricity
                  </h1>
                  <p className="text-center mb-3">
                    We prioritize our customers' needs and satisfaction above
                    all clients
                  </p>
                  <p className="h-36 text-center relative group-hover:left-0 left-[120%] group-hover:bottom-0 -bottom-20 ease-in-out duration-200 transition-all">
                    Our solutions are tailored to meet the unique requirements
                    of each client, ensuring maximum value and impact
                  </p>
                  <Link
                    href="/about-us"
                    className="flex items-center absolute group-hover:bottom-8 -bottom-20 right-10 ease-in-out duration-200 transition-all"
                  >
                    Expand <MoveRight className="ml-1.5 w-5 h-5" />
                  </Link>
                </div>
                <div className="h-20 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-70% rounded-2xl mb-3 p-0.5">
                  <div className="h-full w-full bg-black rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="team py-12">
            <div className="header mb-8">
              <CustomHeader
                header1="Leadership Team"
                header2="Team"
                className="before:hidden"
              />
            </div>
            <div className="founder grid grid-cols-4 gap-10 w-[90%] mx-auto">
              <div className="sanjay-photo col-span-1 rounded-tr-3xl overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/sanjay-sir.jpg"
                  className="w-full h-full"
                />
              </div>
              <div className="sanjay-intro col-span-3 flex items-center justify-center">
                <div className="inner">
                  <h1 className="text-[#ff5900] font-semibold mb-8">Founder & CEO</h1>
                  <h1 className="text-4xl mb-3">Mr. Sanjay Mehrotra</h1>
                  <p className="mb-10">
                    Led by our CEO, John Doe, our team comprises talented
                    professionals with diverse expertise in software
                    development, project management, and digital strategy. We
                    foster a culture of collaboration and continuous learning
                  </p>
                  <Button className={buttonVariants({ variant: "outline" })}>
                    Explore Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
