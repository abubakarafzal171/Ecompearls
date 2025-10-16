import React from "react";
import { Link } from "react-router-dom";

const Aboutsection = () => {
  return (
    <div className="w-full h-full md:h-[45vh] py-6 flex flex-col md:flex-row items-center justify-center gap-6 ">
      <div className="left  w-[50%] flex justify-center items-center text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
        About <br /> EcomPearls
      </div>
      <div className="right flex flex-col gap-7 md:w-[50%] px-6 md:px-1 jucstify-center items-start">
        <p className="text-gray-800 text-base lg:text-lg text-justify  md:w-[80%] lg:-w[70%]">
          We are delighted to be your premier partner in navigating the
          fast-paced world of Amazon e-commerce. At EcomPearls, we pride
          ourselves on being a full-service agency, dedicated to delivering
          end-to-end solutions across every aspect of the Amazon platform. With
          our expertise, proven strategies, and commitment to excellence, we
          empower brands to scale globally and achieve sustainable growth
        </p>
        <Link to={'/about'} className="rounded-full bg-[#FFA550] font-light text-lg border px-4 py-2 w-fit cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-200">Discover More</Link>
      </div>
    </div>
  );
};

export default Aboutsection;
