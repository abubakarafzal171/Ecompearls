import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (mobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobile]);
  return (
    <>
      {/* screen part */}
      <div className="w-full h-[8vh]  flex justify-between items-center px-4 mt-4 font-[oswald] sticky top-0 z-40 bg-white shadow-lg">
        <NavLink to={"/"} className="left flex items-center">
          <img
            src="logo.png"
            alt="logo"
            className="object-cover h-25 w-25"
          />
        </NavLink>
        <div className="middle hidden items-center justify-center md:flex gap-6 lg:gap-8 md:text-sm lg:text-md xl:text-lg ">
          <NavLink
            to="/objective"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Our Objective
          </NavLink>
          <NavLink
            to={"/team"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            All Services
          </NavLink>
          <NavLink to={"/casestudies"} className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }>
            Case Studies
          </NavLink>
          <NavLink
            to={"/payments"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Payments
          </NavLink>
          <NavLink
            to={"/testimonials"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Testimonials
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            About Us
          </NavLink>
        </div>
        <div className=" right hidden items-center justify-center md:flex gap-6 lg:gap-8 md:text-sm lg:text-md xl:text-lg ">
          <NavLink
            to={"/socials"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Social Links
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Location
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "border border-blue-500 p-2 rounded-xl bg-blue-500 text-white font-light"
                : "border border-blue-500 p-2 rounded-xl bg-blue-500 text-white font-light"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className="mobile pr-4 md:hidden" onClick={() => setMobile(true)}>
          <CiMenuFries className="text-5xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile part */}
      <div
        className={`${
          mobile ? "flex" : "hidden"
        } bg-white h-screen w-full fixed top-0  z-50 items-center flex-col justify-between py-6 font-[oswald] `}
      >
        <div className="top">
          <IoMdClose
            className="text-6xl cursor-pointer hover:text-red-500 transition-all duration-200 relative left-35 bottom-4"
            onClick={() => setMobile(false)}
          />
        </div>
        <div className="middle flex flex-col items-center justify-center gap-5 text-2xl font-semibold">
          <NavLink
            to={"/objective"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Our Objective
          </NavLink>
          <NavLink
            to={"/team"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to={"/services"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            All Services
          </NavLink>
          <NavLink
            to={"/casestudies"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to={"/payments"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Payments
          </NavLink>
          <NavLink
            to={"/testimonials"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Testimonials
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"/socials"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Social Links
          </NavLink>
          <NavLink
            to={"/location"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-500 transition-all duration-200"
            }
          >
            Location
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setMobile(false)}
            className={({ isActive }) =>
              isActive
                ? "border border-blue-500 p-1 rounded-xl mb-1 bg-blue-500 text-white font-light"
                : "border border-blue-500 p-1 rounded-xl mb-1 bg-blue-500 text-white font-light"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className="bottom flex gap-6 items-center justify-center">
          <FaFacebook className="cursor-pointer text-2xl  hover:text-blue-800 active:text-blue-800  transition-all duration-300" />
          <FaSquareInstagram className="cursor-pointer text-2xl  hover:text-pink-600 active:text-pink-600  transition-all duration-300" />
          <FaXTwitter className="cursor-pointer text-2xl hover:text-gray-700 active:text-gray-700  transition-all duration-300" />
          <FaYoutube className="cursor-pointer text-2xl hover:text-red-600 active:text-red-600  transition-all duration-300" />
          <FaTiktok className="cursor-pointer text-2xl hover:text-gray-600 active:text-gray-600  transition-all duration-300" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
