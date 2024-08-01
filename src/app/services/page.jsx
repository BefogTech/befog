import ServiceFull from "@/components/custom/ServiceFull";
import ServiceHover from "@/components/custom/ServiceHover";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="services bg-black">
        <div className="inner max-w-[100rem] mx-auto px-[5%] lg:pt-0 lg:pb-20 pt-10 pb-20">
          <div className="intro grid md:grid-cols-2 lg:gap-10 md:gap-5">
            <div className="content grid-cols-1 h-full flex flex-col justify-center">
              <p className="md:text-3xl text-xl font-semibold lg:mb-8 mb-1.5">
                Innovating Tomorrow,
                <span className="text-[#ff5900]">Today</span>
              </p>
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5">
                Transforming Ideas into{" "}
                <span className="text-[#FF5900]">Digital Reality</span>
              </h1>
              <p className="mb-6 md:text-base text-sm">
                Befog (A&W Technology) is an innovative IT startup offering web
                development, web design, logo design, and cloud services. We
                deliver high-quality, customized solutions to meet our clients
                diverse tech needs.
              </p>
              <div className="btns lg:block hidden">
                <Button
                  className={
                    buttonVariants({ variant: "outline" }) + "  mx-2.5"
                  }
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="col-span-1 h-full flex flex-col items-center justify-center">
              <Image
              alt=""
                width={1000}
                height={1000}
                src="/assets/service-brain.png"
                className="object-cover"
              />
              <div className="btns lg:hidden block mt-5">
                {/* <Button className=" mx-2.5">Explore Now</Button> */}
                <Button
                  className={
                    buttonVariants({ variant: "outline" }) + "  mx-2.5"
                  }
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 lg:pb-20 pb-10">
          <ServiceHover />
        </div>
        <div className="lg:py-10 pb-20">
          <ServiceFull />
        </div>
      </section>
    </>
  );
};

export default page;
