import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { RiRocketLine } from "react-icons/ri";

const Whychoose = () => {
  return (
    <div className="py-16 md:pb-60 px-4 h-full w-full bg-[#F9FAFB]">
      {/* Top Section */}
      <div className="top pb-12 flex flex-col gap-6 justify-center items-center font-[outfit]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Why Choose Us
        </h1>
        <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 w-[90%] md:w-[70%]">
          Discover the advantages of choosing our services for your needs. We
          are committed to providing exceptional value and quality to our
          clients.
        </p>
      </div>

      {/* Bottom Cards */}
      <div className="bottom flex flex-wrap justify-center items-center gap-6">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-2xl w-[90vw] md:w-[35vw] lg:w-[20vw] shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          <div className="icon text-4xl md:text-5xl lg:text-6xl text-blue-600">
            <FaUserTie />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 text-center">
            Experienced Professionals
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            Our team consists of highly skilled professionals across multiple
            industries. We bring solutions that are designed for measurable
            success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-2xl w-[90vw] md:w-[35vw] lg:w-[20vw] shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          <div className="icon text-4xl md:text-5xl lg:text-6xl text-green-600">
            <FiSettings />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 text-center">
            Customized Solutions
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            We design tailored strategies that perfectly match your unique
            business needs and help achieve sustainable growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-2xl w-[90vw] md:w-[35vw] lg:w-[20vw] shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          <div className="icon text-4xl md:text-5xl lg:text-6xl text-indigo-600">
            <FaChartLine />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 text-center">
            Proven Track Record
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            Our case studies and client success stories demonstrate consistent
            results and measurable business impact.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-2xl w-[90vw] md:w-[35vw] lg:w-[20vw] shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          <div className="icon text-4xl md:text-5xl lg:text-6xl text-red-600">
            <MdSupportAgent />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 text-center">
            Dedicated Support
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            Our support team ensures that you receive timely assistance and
            continuous guidance whenever you need it.
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-2xl w-[90vw] md:w-[35vw] lg:w-[20vw] shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          <div className="icon text-4xl md:text-5xl lg:text-6xl text-amber-500">
            <AiOutlineDollar />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 text-center">
            Cost-Effective
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            We provide transparent and affordable pricing without hidden fees,
            ensuring maximum value for your investment.
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col gap-4 justify-center items-center bg-white p-6 rounded-2xl w-[90vw] md:w-[35vw] lg:w-[20vw] shadow-md hover:shadow-lg hover:scale-105 ease-in duration-300">
          <div className="icon text-4xl md:text-5xl lg:text-6xl text-purple-600">
            <RiRocketLine />
          </div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-900 text-center">
            Future-Ready Approach
          </h1>
          <p className="text-center text-sm md:text-base text-gray-700">
            We leverage the latest technologies and innovative practices to keep
            your business ahead of the competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
