import React from "react";
import Banner from "../components/Banner";
import Cta from "../components/Cta";
import FaqsandTestimonials from "../components/Homepage/FaqsandTestimonials";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <Banner
        headline={"Get in Touch"}
        para={
          "We’d love to hear from you! Reach out to our team for inquiries, partnerships, or support."
        }
      />

      {/* Contact Info + Form */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Contact Details</h2>
            <p className="text-gray-700">
              Have questions about our services? Our team is here to help you
              with Amazon growth strategies, consultations, and support.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-indigo-600">Email</h4>
                <p className="text-gray-800">ceo@ecompearls.org</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-600">Phone</h4>
                <p className="text-gray-800">+92 306 8141828</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-600">Office</h4>
                <p className="text-gray-800">
                  Bahawalnagar, Punjab, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h3>
            <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs + Testimonials */}
      <section className="pt-20  bg-white">
        <FaqsandTestimonials />
      </section>
    </div>
  );
};

export default Contact;
