import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ServiceCard = ({ service, className }) => {
  return (
    <Card
      className={cn(
        `border-[#FFB6B6] relative xl:w-[350px] sm:w-full w-[350px] max-w-[350px] mx-auto group overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.50)] rounded-none `,
        className
      )}
    >
      <CardHeader className="group-hover:scale-105 ease-in-out transition-all duration-200">
        <h1 className="sm:text-xl text-lg font-semibold text-white z-[3]">{service.title}</h1>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white group-hover:scale-105 ease-in-out transition-all duration-200 h-16 z-[3]">
          {service.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="relative overflow-hidden px-0">
        <div className="relative w-full h-64">
          <p className="text-sm mt-8 text-white w-[80%] absolute translate-x-[135%] group-hover:translate-x-16 ease-in-out transition-all duration-200 z-[3]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            dolores itaque officiis harum ab obcaecati beatae ex ducimus nihil
            optio sunt quibusdam, iure odio! Ad iusto quae nam vitae eius.
          </p>
          <div
            style={{
              backgroundImage: `linear-gradient(${service.blend}),url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode:'hue'
            }}
            className={cn(
              `w-full relative h-[16rem] transition-transform duration-200 ease-in-out group-hover:scale-150 group-hover:translate-x-[50%] group-hover:translate-y-[50%] group-hover:blur-lg z-[1] `
            )}
          >
            {/* <div className={cn("overlay w-full h-full absolute ", className)} /> */}
            {/* <Image
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              src={service.image}
              alt={service.title}
            /> */}
          </div>
        </div>
        <Link
          href="/"
          className=" flex items-center justify-center absolute -bottom-5 right-5 group-hover:bottom-5 ease-in-out duration-200 transition-all text-white z-[3]"
        >
          Expand <MoveRightIcon className="w-5 h-5 ml-2 animate-pulse" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
