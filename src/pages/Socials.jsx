import React from "react";
import Banner from "../components/Banner";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdLanguage } from "react-icons/md";

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com/ecompearls",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/company/ecompearls",
    color: "from-blue-700 to-blue-900",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/ecompearls",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/ecompearls",
    color: "from-sky-400 to-sky-600",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: "https://youtube.com/@ecompearls",
    color: "from-red-500 to-red-700",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://tiktok.com/@ecompearls",
    color: "from-gray-800 to-black",
  },
];

const Socials = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <Banner
        headline={"Connect With Us"}
        para={
          "Stay connected with Ecompearls through our official social channels. Join our community and follow the latest updates, tips, and e-commerce success stories."
        }
      />

      {/* Social Links */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${social.color} text-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105`}
            >
              <div className="text-6xl mb-4">{social.icon}</div>
              <h3 className="text-2xl font-bold">{social.name}</h3>
              <p className="mt-2 text-white/80 text-center">
                Follow us on {social.name} and stay updated.
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Reach Us Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Reach Out to Us</h2>
          <p className="text-gray-600 mt-2">
            Get in touch with EcomPearls for business inquiries, support, or collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <MdPhone className="text-4xl text-indigo-600 mb-4" />
            <h4 className="font-bold text-lg">Phone</h4>
            <p className="text-gray-700 mt-2">+92 306 8141828</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <MdEmail className="text-4xl text-indigo-600 mb-4" />
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-gray-700 mt-2">info@ecompearls.com</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <MdLanguage className="text-4xl text-indigo-600 mb-4" />
            <h4 className="font-bold text-lg">Website</h4>
            <p className="text-gray-700 mt-2">www.ecompearls.com</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition">
            <MdLocationOn className="text-4xl text-indigo-600 mb-4" />
            <h4 className="font-bold text-lg">Office</h4>
            <p className="text-gray-700 mt-2">
              First Floor, Nadra Office, <br />
              Chishtian Road, Bahawalnagar, Punjab, Pakistan
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socials;
