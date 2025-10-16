import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="w-full  py-16 px-6 text-center rounded-2xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold  mb-6 text-gray-800">
        Ready to Align Your Goals with EcomPearls?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
        At EcomPearls, we believe in building long-term success stories for our
        clients. Whether you’re looking to scale your Amazon business, enhance
        product visibility, or expand globally, our strategies are tailored to
        your unique needs. Let’s partner together and take your ecommerce
        journey to the next level.
      </p>
      <Link to={'/contact'} className="bg-[#FFA550] text-black font-semibold px-8 py-3 rounded-full shadow-md cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-200">
        Get a Free Consultation
      </Link>
    </div>
  );
}
