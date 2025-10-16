import React from "react";
import { FaSearchengin } from "react-icons/fa6";
import { MdScreenSearchDesktop } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
const Ourservies = ({bg}) => {
  return (
   <>
    <div className={`w-full h-full flex flex-col justify-start items-center px-4 py-6 bg-[${bg}] pt-15 gap-15 pb-20`}>
      <div className="left  flex flex-col justify-start items-center gap-8 px-6">
        <h1 className="fontbold text-5xl md:text-7xl font-[parata]">
          Our Servies
        </h1>
        <p className="text-gray-800 w-[90%] text-justify text-base md:text-lg">
          How Our Amazon Experts Elevate Your Brand with Product Research,
          Sourcing, and Growth Strategies
        </p>
      </div>

      <div className="flex  flex-wrap  gap-10 justify-center items-center">
        <div className="flex flex-col  gap-4  text-center justify-center items-center  md:w-[45%] lg:w-[20%]">
          <div className="line h-[1px] w-[30vh] bg-black rounded"></div>
          <div className="icon text-5xl md:text-6xl lg:text-7xl text-red-500">
            <FaSearchengin />
          </div>
          <div className="text-5xl font-[oswald] text-gray-800">
            Product Research
          </div>
          <p className="text-gray-900 w-[70%]">
            Our strategic consulting services offer tailored solutions to
            address your specific business challenges and opportunities. We work
            closely with you to develop innovative strategies that drive growth
            and success.
          </p>
        </div>
        <div className="flex flex-col  gap-4  text-center justify-center items-center  md:w-[45%] lg:w-[20%]">
          <div className="line h-[1px] w-[30vh] bg-black rounded"></div>
          <div className="icon text-5xl md:text-6xl lg:text-7xl text-red-500">
        <MdScreenSearchDesktop />
          </div>
          <div className="text-5xl font-[oswald] text-gray-800">
          Sourcing
          </div>
          <p className="text-gray-900 w-[70%]">
          After identifying products, we provide reliable and cost-effective sourcing. Partnering with trusted suppliers in China and beyond, we handle verification, negotiation, and quality checks—ensuring consistency, reduced risk, and sustainable profitability.
          </p>
        </div>
        <div className="flex flex-col  gap-4  text-center justify-center items-center  md:w-[45%] lg:w-[20%]">
          <div className="line h-[1px] w-[30vh] bg-black rounded"></div>
          <div className="icon text-5xl md:text-6xl lg:text-7xl text-red-500">
          <AiOutlineStock />
          </div>
          <div className="text-5xl font-[oswald] text-gray-800">
           PPC Management
          </div>
          <p className="text-gray-900 w-[70%]">
          We specialize in strategic Amazon PPC campaigns that boost visibility and sales. Through keyword research, bid optimization, and performance tracking, we ensure efficient ad spend, higher conversions, and stronger brand presence.
          </p>
        </div>
        <div className="flex flex-col  gap-4  text-center justify-center items-center  md:w-[45%] lg:w-[20%]">
          <div className="line h-[1px] w-[30vh] bg-black rounded"></div>
          <div className="icon text-4xl md:text-5xl lg:text-5xl text-red-500">
       <BsFillSendFill />
          </div>
          <div className="text-5xl font-[oswald] text-gray-800">
           Amazon SEO
          </div>
          <p className="text-gray-900 w-[70%]">
           Success on Amazon starts with visibility. We optimize titles, bullet points, descriptions, and keywords to align with Amazon’s A9 algorithm. With smart keyword research and compelling copy, we boost rankings, drive clicks, and convert shoppers—building a solid foundation for long-term sales growth.
          </p>
        </div>
      </div>
    </div>
   </>
  );
};

export default Ourservies;
