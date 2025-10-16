import React from "react";
import { FaRegEye, FaSearch, FaCogs, FaPlayCircle, FaChartBar } from "react-icons/fa";

const steps = [
  {
    title: "Understand Client Vision",
    desc: "We begin by understanding your business goals and unique needs.",
    icon: <FaRegEye className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Market & Competitor Research",
    desc: "Analyzing market trends and competitors to identify opportunities.",
    icon: <FaSearch className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Tailored Amazon Strategy",
    desc: "Creating customized Amazon strategies aligned with your goals.",
    icon: <FaCogs className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Execution & Optimization",
    desc: "Implementing strategies and continuously optimizing performance.",
    icon: <FaPlayCircle className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Reporting & Scaling",
    desc: "Tracking results, providing insights, and scaling your business.",
    icon: <FaChartBar className="w-10 h-10 text-blue-600" />,
  },
];

export default function HowWeAchieve() {
  return (
    <div className="w-full py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 mt-10">How We Achieve These Objectives</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center max-w-[500px] relative">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
              {step.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-[oswald] mb-2">{step.title}</h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">{step.desc}</p>

            {/* Connector line (only show if not last step) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-[-60px] w-[100px] h-[2px] bg-blue-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
