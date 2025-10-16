import React from "react";
import Banner from "../components/Banner";
import Cta from "../components/Cta";

const About = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        headline={"About EcomPearls"}
        para={
          "Discover our story, values, and vision that drive us to empower businesses worldwide through innovative Amazon and e-commerce strategies."
        }
      />

      {/* Company Story */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded with a passion for transforming businesses, EcomPearls has
            grown into a trusted partner for Amazon sellers and brands around
            the globe. From humble beginnings in Bahawalnagar, Pakistan, we’ve
            expanded our expertise to support clients in the USA, UK, Canada,
            and Australia. <br />
            <br />
            With a dedicated team of e-commerce strategists, we focus on product
            research, brand growth, and scalable strategies to help our partners
            achieve long-term success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses by providing professional Amazon and
              e-commerce consulting services that deliver measurable growth,
              innovation, and sustainable success.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading global partner for Amazon sellers and brands,
              recognized for our commitment to excellence, creativity, and
              transforming digital businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Building trust through transparency and honesty." },
              { title: "Innovation", desc: "Continuously evolving with creative solutions." },
              { title: "Collaboration", desc: "Working together for collective growth." },
              { title: "Excellence", desc: "Delivering outstanding results every time." },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl shadow hover:bg-indigo-50 hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Culture</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At EcomPearls, we believe in fostering a culture of creativity,
            collaboration, and continuous learning. Our team thrives in an
            environment that values innovation and encourages new ideas, making
            sure every member plays a vital role in our clients’ success.
          </p>
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </div>
  );
};

export default About;
