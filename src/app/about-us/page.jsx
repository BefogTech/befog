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
import Link from "next/link";
import { MoveRight } from "lucide-react";
import CaseStudyFrame from "@/components/custom/CaseStudyFrame";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  const members = [
    {
      image: "/assets/team/anushree.jpg",
      name: "Anushree Saxena",
      position: "HR Manager",
      alt: "Anushree Saxena",
    },
    {
      image: "/assets/team/nikhil.jpg",
      name: "Nikhil Kumar Gupta",
      position: "Frontend Developer",
      alt: "Nikhil Kumar Gupta",
    },
    {
      image: "/assets/team/aditya.jpg",
      name: "Aditya Kannaujiya",
      position: "UI/UX Designer",
      alt: "Aditya Kannaujiya",
    },
  ];
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

          <div className="accordion py-28">
            <div className="content mb-16">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-8 heading2-bold">
                Creating positive <span className="text-[#ff5900]">change</span>
              </h1>
              <p className="lg:w-[50%]">
                We’re committed to creating positive change around the world and
                ensuring we act as responsible business leaders for our people,
                our clients, and the communities we call home
              </p>
            </div>
            <div className="accord-cont mb-44">
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
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center heading2-bold">
                We help many of Professionals be more effective at their
                <span className="text-[#ff5900] ml-5">Bussiness</span>
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

          <div className="values py-24">
            <div className="header mb-24">
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
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-t from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
                <div className="value-card w-full border-2 border-[#ff5900] bg-[#ff590007] rounded-2xl py-24 px-10 mb-3 relative group overflow-hidden">
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
                <div className="h-32 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-b from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
              </div>
              <div className="col-2 w-full mx-1.5">
                <div className="h-16 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-t from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
                <div className="border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl mb-3 py-10 px-10">
                  <h1 className="text-center text-xl mb-5">Innovation</h1>
                  <p className="text-center">
                    Innovation is at the heart of everything we do
                  </p>
                </div>
                <div className="border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl mb-3 py-16 px-10 core-value relative overflow-hidden">
                  {/* <span className="w-10 h-10 absolute bg-[#ff59001f] shadow-2xl shadow-[#ff59001f] rounded-full"/> */}
                  <span className="w-40 h-40 absolute block -right-8 rounded-full" />
                  <h1 className="text-center text-2xl">Core Values</h1>
                </div>
                <div className="border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl mb-3 py-10 px-10">
                  <h1 className="text-center text-xl mb-5">Innovation</h1>
                  <p className="text-center">
                    Innovation is at the heart of everything we do
                  </p>
                </div>
                <div className="h-16 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-b from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
              </div>
              <div className="col-3 w-full mx-1.5">
                <div className="h-32 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-t from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
                <div className="value-card w-full border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl py-24 px-10 mb-3 relative group overflow-hidden">
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
                <div className="h-20 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-b from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team py-12">
            <div className="header mb-5">
              <CustomHeader
                header1="Leadership Team"
                header2="Team"
                className="before:hidden"
              />
            </div>
            <div className="founder grid grid-cols-7 gap-16 mx-auto mb-40">
              <div className="sanjay-photo col-span-2 rounded-tr-3xl overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/sanjay-sir.jpg"
                  className="w-full h-full"
                  alt="Sanjay Mehrotra"
                />
              </div>
              <div className="sanjay-intro col-span-5 flex items-center justify-center">
                <div className="inner">
                  <h1 className="text-[#ff5900] font-semibold mb-5">
                    Founder & Director
                  </h1>
                  <h1 className="text-4xl font-medium mb-3 heading2-bold">
                    Mr. Sanjay Mehrotra
                  </h1>
                  <div className="mb-10">
                    <p className="mb-3">
                      Welcome to Befog! As the founder of this innovative IT
                      startup, I'm thrilled to share our vision and journey. At
                      Befog, we strive to push the boundaries of technology,
                      delivering solutions that meet today's needs and
                      anticipate tomorrow's challenges.
                    </p>
                    <p>
                      Our story began with a belief that technology can
                      transform businesses and enrich lives. We've built a team
                      of passionate and talented individuals who are dedicated
                      to innovation and excellence. Together, we're committed to
                      empowering organizations to reach their fullest potential
                      through the power of technology.
                    </p>
                  </div>
                  <Button className={buttonVariants({ variant: "outline" })}>
                    Explore Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="team-members">
              <div className="team-intro mb-16">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5 heading2-bold">
                  Meet <span className="text-[#ff5900]">Our Team</span>
                </h1>
                <p>
                  Meet our dynamic team of passionate innovators, dedicated
                  towards bringing you cutting-edge solutions and exceptional
                  service.
                </p>
              </div>
              <div className="members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {members.map((member, index) => (
                  <div className="col-span-1" key={index}>
                    <div className="w-fit mx-auto">
                      <div className="img-cont w-64 h-[19rem] rounded-tr-3xl overflow-hidden mb-5 relative">
                        <Image
                          width={1000}
                          height={1000}
                          src={member.image}
                          alt={member.alt}
                        />
                      </div>
                      <div className="member-info">
                        <h1 className="font-semibold text-xl text-center mb-1.5">
                          {member.name}
                        </h1>
                        <p className="text-center text-[#ff5900] font-semibold">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="case-study py-20 mt-20 grid grid-cols-6 gap-10">
            <div className="header col-span-2 flex justify-center flex-col">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5 heading2-bold">
                <p>View Our</p>
                <p className="text-[#ff5900]">Case Study</p>
              </h1>
            </div>
            <div className="col-span-4">
              <CaseStudyFrame />
            </div>
          </div>

          <div className="contact py-20 flex flex-col justify-center items-center">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-16 heading2-bold text-center">
              Contact
            </h1>
            <div className="w-1/3 mb-16">
              <form>
                <Input placeholder="Email" className="w-full text-black mb-5" />
                <Textarea
                  placeholder="Message"
                  className="mt-1.5 shadow-md resize-none text-black mb-5"
                  rows="5"
                />
                <Button
                  className={
                    buttonVariants({ variant: "outline" }) +
                    " relative left-1/2 transform -translate-x-1/2"
                  }
                >
                  Submit
                </Button>
              </form>
            </div>
            <p className="text-center w-1/2 mb-8">
              Ready to transform your business? Get in touch with us today to
              discuss how Befog (A&W Technology) can help you achieve your
              goals.
            </p>
            <Button>Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
