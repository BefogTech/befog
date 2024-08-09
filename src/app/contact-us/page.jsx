"use client";
import ContactForm from "@/components/custom/ContactForm";
import CustomHeader from "@/components/custom/CustomHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false);

  return (
    <section className="about-us w-full bg-black">
      {contactFormVisible ? (
        <ContactForm setContactFormVisible={setContactFormVisible} />
      ) : (
        <>
          <div className="">
            <div className="intro pt-52 pb-24 max-w-[100rem] mx-auto px-[5%]">
              <div className="header mb-16 flex flex-col items-center">
                <CustomHeader
                  header1="Contact Us"
                  header2="Contact"
                  className="before:hidden mb-10"
                />
                <p className="text-center mb-5">
                  Feel free to get in touch with us for any inquiries or
                  support.
                </p>
                <Button
                  className={buttonVariants({ variant: "outline" })}
                  onClick={() => setContactFormVisible(true)}
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="w-full py-24">
              <div className="w-full h-[25rem] border-2 border-[#ff5900] bg-[#ff590020] flex justify-center items-center">
                Get in touch with us for any inquiries or support. Our team is
                ready to assist you with your needs.
              </div>
              <div className="social flex items-center relative -top-16 w-1/2 mx-auto">
                <a
                  href="tel:+7985322738"
                  target="_blank"
                  className="w-28 h-28 p-5 border-2 border-[#ff5900] flex justify-center items-center mx-auto bg-black"
                >
                  <div className="-ml-1">
                    <Image
                      src="/assets/contact-us/phone.png"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
                <a
                  href="mailto:contact.us@befog.in"
                  target="_blank"
                  className="w-28 h-28 p-5 border-2 border-[#ff5900] flex justify-center items-center mx-auto bg-black"
                >
                  <div className="">
                    <Image
                      src="/assets/contact-us/mail.png"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/place/Cubispace/@26.9109169,80.9438857,17z/data=!3m1!4b1!4m6!3m5!1s0x399957732a46274b:0xe09917f505f98e8f!8m2!3d26.9109169!4d80.9464606!16s%2Fg%2F11ptq671jp?entry=ttu"
                  target="_blank"
                  className="w-28 h-28 p-7 border-2 border-[#ff5900] flex justify-center items-center mx-auto bg-black"
                >
                  <div className="">
                    <Image
                      src="/assets/contact-us/location.png"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className="max-w-[100rem] mx-auto px-[5%] py-24">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-16 heading2-bold">
                For specific questions, get in touch below
              </h1>
              <div className="accord-cont mb-12">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-white py-2">
                    <AccordionTrigger>Ask a question</AccordionTrigger>
                    <AccordionContent>Ask a question</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-white py-2">
                    <AccordionTrigger>Jobs seekers</AccordionTrigger>
                    <AccordionContent>Ask a question</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-white py-2">
                    <AccordionTrigger>Befog employees</AccordionTrigger>
                    <AccordionContent>Ask a question</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-white py-2">
                    <AccordionTrigger>
                      <p></p>
                    </AccordionTrigger>
                    <AccordionContent>Ask a question</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-white py-2">
                    <AccordionTrigger>
                      <p></p>
                    </AccordionTrigger>
                    <AccordionContent>Ask a question</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <p className="text-center">Feel free to reach out</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default page;
