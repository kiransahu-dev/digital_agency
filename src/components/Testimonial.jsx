import React from "react";
import Slider from "react-slick";
import ct2 from "../assets/ct-2.jpg";
import ct3 from "../assets/ct-3.jpg";
import ct4 from "../assets/ct-4.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Dr. Hrushikesh Sahu",
    role: "Sri Ram Hospital",
    text: "Aries Digitals transformed our online presence completely. From content planning to ad campaigns, everything was executed with strategy and clarity. We saw a 4x increase in leads within 3 months!",
    img: ct3,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Sivaram Pradhan",
    role: "Yosoda Nursing Home",
    text: "We needed a corporate infographic video for promotion, and Aries Digitals nailed it. The storytelling, visuals and editing were world-class.",
    img: ct2,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Jagadish Sahu",
    role: "Akshara Enterprises",
    text: "Aries Digitals transformed our furniture store from a ghost town into a thriving footfall location. Their strategies are creative, consistent and spot-on for our audience.",
    img: ct4,
    delay: 0.8,
  },
  {
    id: 4,
    name: "Jagadish Sahu",
    role: "Mabello Doors & Furniture Pvt. Ltd",
    text: "The product shoots by Aries Digitals elevated our brand instantly. Clean, professional, and perfectly lit exactly what our catalog needed.",
    img: ct4,
    delay: 0.8,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="mb-10 container mx-auto pt-16 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between"
      id="contactus"
    >
      <div className="container">
        {/* header sec */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto">
          <h1 className=" font-semibold text-[#a61040] md:text-4xl text-2xl tracking-wide">
            Client Testimonial
          </h1>
        </div>
        {/* testimonial sec */}
        <div className="py-10 px-4 md:px-10">
          <Slider {...setting}>
            {TestimonialData.map((item) => (
              <div key={item.id} className="px-2 h-full">
                <div className="flex flex-col justify-between h-full min-h-[250px] max-w-3xl mx-auto p-6 md:p-8 rounded-2xl shadow-xl bg-[#700d28] text-white transition-all duration-300 hover:shadow-2xl">
                  {/* Top */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      {item.role && (
                        <p className="text-md  text-white/80">{item.role}</p>
                      )}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-4">
                    <p className="text-sm leading-relaxed tracking-wide min-h-[100px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
