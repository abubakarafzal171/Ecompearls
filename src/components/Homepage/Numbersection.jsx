import React from "react";
import { icons } from "../../assets/data";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const Numbersection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref}
    className="w-full bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] h-full lg:h-[80vh] flex flex-col justify-center items-center gap-10 pb-15 pt-10 px-4">
      <div className="top flex flex-col justify-center items-center gap-4 py-6">
        <h1 className="font-bold font-[outfit] text-4xl md:text-6xl lg:text-7xl text-blue-600">
          Boosting Businessess
        </h1>
        <p className=" text-center text-base md:text-md lg:text-lg text-gray-800">
          Our success is directly tied to the growth and expansion of our
          amazing clients.
        </p>
      </div>
      <div className="bottom flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-32">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="icon">
            <img src={icons.iconE} alt="" className="object-cover w-20 h-20" />
          </div>
          <div className="text text-5xl md:text-6xl lg:text-7xl font-bold font-[outfit] text-blue-600">
           {inView && <CountUp start={0} end={70} duration={3} prefix="$" suffix="M+" />}
          </div>
          <div className="text-2xl font-bold text-gray-700 ">
            Annual Amazon Revenue
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="icon">
            <img src={icons.iconC} alt="" className="object-cover w-20 h-20" />
          </div>
          <div className="text text-5xl md:text-6xl lg:text-7xl font-bold font-[outfit] text-blue-600">
              {inView && <CountUp start={0} end={150} duration={3}  suffix="+" />}
          </div>
          <div className="text-2xl font-bold text-gray-700 ">Team Members</div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="icon">
            <img src={icons.iconO} alt="" className="object-cover w-20 h-20" />
          </div>
          <div className="text text-5xl md:text-6xl lg:text-7xl font-bold font-[outfit] text-blue-600">
          {inView && <CountUp start={0} end={300} duration={3}  suffix="+" />}
          </div>
          <div className="text-2xl font-bold text-gray-700 ">
            Brands Managed
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="icon">
            <img src={icons.iconM} alt="" className="object-cover w-20 h-20" />
          </div>
          <div className="text text-5xl md:text-6xl lg:text-7xl font-bold font-[outfit] text-blue-600">
            {inView && <CountUp start={0} end={100} duration={3}  suffix="%" />}
          </div>
          <div className="text-2xl font-bold text-gray-700 ">
            Client Growth Focused
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbersection;
