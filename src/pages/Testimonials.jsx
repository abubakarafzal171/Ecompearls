import React from "react";
import Banner from "../components/Banner";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 300, suffix: "+", label: "Brands Currently Managed" },
  { value: 150, suffix: "+", label: "Teams Currently Managed" },
  { value: 7, suffix: "+ Years", label: "Proven Experience" },
];

const testimonials = [
  {
    feedback:
      "EcomPearls helped me scale my Amazon FBA business in ways I couldn’t imagine. Their product research and launch strategies are world-class!",
    image: "/src/assets/images/rev1.png",
  },
  {
    feedback:
      "Thanks to EcomPearls, our brand is now competing in the top 5 of our niche. Their dedication and expertise is unmatched.",
    image: "/src/assets/images/rev2.png",
  },
  {
    feedback:
      "The team at EcomPearls is highly professional. From sourcing to scaling, they guided us at every step with proven strategies.",
    image: "/src/assets/images/rev3.png",
  },
  {
    feedback:
      "Working with EcomPearls has been a game-changer. Their growth-focused strategies helped us double sales in just 6 months!",
    image: "/src/assets/images/rev4.png",
  },

];

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        headline={"Reviews of EcomPearls"}
        para={
          "Discover how we’ve helped brands overcome challenges, scale their Amazon presence, and achieve their full potential. Real results. Real success stories."
        }
      />

      {/* Stats Section with CountUp */}
      <section
        ref={ref}
        className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 text-white"
      >
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-4xl font-bold">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={3}
                    suffix={stat.suffix}
                  />
                )}
              </h3>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials with Review Images */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From powerful testimonials to real client reviews, explore how
            we’ve driven growth and solved challenges for Amazon brands.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
              >
                <FaQuoteLeft className="text-3xl text-indigo-500 mb-4" />
                <p className="text-gray-600 italic flex-1">"{t.feedback}"</p>
                <img
                  src={t.image}
                  alt="Client Review"
                  className="mt-6 w-full rounded-lg shadow"
                />
                <div className="flex justify-center mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Client Reviews and Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            See how we’ve helped Amazon sellers succeed. Watch their stories and
            imagine what’s possible for your business.
          </p>

          {/* Responsive YouTube Video */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/vLAsYlKq_eE"
              title="Client Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Local Videos in Uniform Frames */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {["vid1.mp4", "vid2.mp4", "vid3.mp4"].map((vid, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <video className="w-full h-64 object-cover" controls>
                  <source src={`/src/assets/videos/${vid}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
