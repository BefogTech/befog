import React from "react";
import { Button, buttonVariants } from "../ui/button";

const Banner = () => {
  return (
    <>
      <section className="banner w-full lg:text-left text-center">
        <div className="max-w-[100rem] mx-auto px-[5%] lg:py-0 py-10 grid lg:grid-cols-2 min-h-[35rem] lg:mb-20 mb-10 mt-10">
          <div className="content grid-cols-1 h-full flex flex-col justify-center">
            <p className="md:text-3xl text-xl text-[#FF5900] font-semibold lg:mb-8 mb-1.5">
              Design Your Digital Identity
            </p>
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5">
              Next Generation software{" "}
              <span className="text-[#FF5900]">services</span> for your{" "}
              <span className="text-[#FF5900]">business</span>.{" "}
            </h1>
            <p className="mb-6 md:text-base text-sm">
              we are committed to transforming ideas into tangible solutions
            </p>
            <div className="btns lg:block hidden">
              <Button className=" mx-2.5">Explore Now</Button>
              <Button
                className={buttonVariants({ variant: "outline" }) + "  mx-2.5"}
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="col-span-1 lg:mt-0 mt-8 h-full flex flex-col items-center justify-center">
            <video
              className="md:h-[90%] h-full w-full object-cover"
              muted
              loop
              autoPlay
            >
              <source src="/assets/globe.mp4" type="video/mp4" />
            </video>
            <div className="btns lg:hidden block mt-8">
              <Button className=" mx-2.5">Explore Now</Button>
              <Button
                className={buttonVariants({ variant: "outline" }) + "  mx-2.5"}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
