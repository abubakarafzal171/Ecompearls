import React from "react";
import Banner from "../components/Banner";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Location = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        headline={"Our Office Location"}
        para={
          "Visit us at our main office in Bahawalnagar, Punjab, Pakistan. Find us easily on the map below."
        }
      />

      {/* Map Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1727.8179528882217!2d73.228492!3d29.989892000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d6f847536930d%3A0x41437fa9d8406024!2sEcommerce%20Pearls%20(Amazon)!5e0!3m2!1sen!2sus!4v1760613125160!5m2!1sen!2sus"
              width="1100"
              height="550"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-lg transition">
            <MdPhone className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h4 className="font-bold text-lg">Phone</h4>
            <p className="text-gray-700 mt-2">+92 306 8141828</p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-lg transition">
            <MdEmail className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-gray-700 mt-2">info@ecompearls.com</p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow p-8 hover:shadow-lg transition">
            <MdLocationOn className="text-4xl text-indigo-600 mx-auto mb-4" />
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

export default Location;
