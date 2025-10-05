import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    desc: "Boost your online visibility and grow your audience with data-driven marketing campaigns.",
    icon: "📈",
  },
  {
    title: "Web Development",
    desc: "Modern, fast, and scalable websites and web apps built with the latest technologies.",
    icon: "💻",
  },
  {
    title: "Graphic Design",
    desc: "Stunning visuals, branding, and creative designs to make your brand stand out.",
    icon: "🎨",
  },
  {
    title: "E-Commerce Solution",
    desc: "Powerful e-commerce platforms with seamless checkout and secure integrations.",
    icon: "🛒",
  },
  {
    title: "Video Editing",
    desc: "Professional video editing and motion graphics to enhance your brand storytelling.",
    icon: "🎬",
  },
];

const OurServices = () => {
  const scrollRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#1E2532] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-400 text-sm md:text-base">
            We provide innovative digital solutions to help your business grow.
          </p>
        </div>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="
            flex lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory
            scroll-smooth pb-4 scrollbar-hide
          "
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 snap-center w-[85%] sm:w-[70%] lg:w-auto
                bg-gradient-to-b from-[#2A3142] to-[#3B2A56] p-[2px] rounded-2xl
                hover:scale-[1.03] transition-transform duration-300
              "
            >
              <div className="bg-[#1a1f2b] rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <button className="mt-6 text-sm text-[#9C40FF] font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-8 lg:hidden">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-gradient-to-r from-[#5B2BE0] to-[#9C40FF] hover:opacity-90 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-gradient-to-r from-[#5B2BE0] to-[#9C40FF] hover:opacity-90 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
