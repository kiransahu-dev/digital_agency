import React from "react";
import Slider from "react-slick";
import ct1 from "../assets/brand/1.png";
import ct2 from "../assets/brand/10.png";
import ct3 from "../assets/brand/16.png";
import ct4 from "../assets/brand/9.png";

const TestimonialData = [
  {
    id: 1,
    name: "Dr. Hrushikesh Sahu",
    role: "Sri Ram Hospital",
    text: "Aries Digitals transformed our online presence completely. From content planning to ad campaigns, everything was executed with strategy and clarity. We saw a 4x increase in leads within 3 months!. We especially appreciated their transparent communication and consistent support throughout.",
    img: ct3,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Shubham Kumar Sahu",
    role: "Hotel Shree Raghunathaa",
    text: "Aries Digitals significantly improved our online presence and helped us reach more customers for our pure vegetarian offerings. Their professionalism and understanding of our brand made a real impact on our growth. The state of the art is storytelling, visuals and editing.",
    img: ct2,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Manmeswer Patnaik",
    role: "Aroscai Technologies Pvt. Ltd.",
    text: "Swayam and Team Aries Digitals have changed the vibe of our social media. They took our stress out of posting on Facebook and Instagram by delivering creative, high-quality content as well as managing influencer network and ad traffic efficiently. Professional, responsive, and highly adaptive.",
    img: ct1,
    delay: 0.8,
  },
  {
    id: 4,
    name: "Abhishek Patro",
    role: "Hotel Moti Pvt. Ltd.",
    text: "Recently I associated my digital marketing with Swayam of Aries Digitals. I had only expected him to do the basics but to my amazement he even got Bonus of his team with insights and expertise in this field. I recommend Aries Digitals if you want to increase your visibility in this competitive era.",
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
        <div className="space-y-4 p-6 text-center max-w-150 mx-auto">
          <h1 className=" font-semibold text-[#a61040] md:text-4xl text-2xl tracking-wide">
            Client Testimonial
          </h1>
        </div>
        {/* testimonial sec */}
        <div className="py-10 px-4 md:px-10">
          <Slider {...setting}>
            {TestimonialData.map((item) => (
              <div key={item.id} className="px-2 h-full">
                <div className="flex flex-col justify-between h-full min-h-62.5 max-w-3xl mx-auto p-6 md:p-8 rounded-2xl shadow-xl bg-linear-to-br from-[#a61040] to-[#7d0c31] text-white transition-all duration-300 hover:shadow-2xl">
                  {" "}
                  {/* Top */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full border-2 border-white bg-black/50 object-contain"
                    />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {item.name}
                      </p>
                      {item.role && (
                        <p className="text-md text-white/80">{item.role}</p>
                      )}
                    </div>
                  </div>
                  {/* Bottom */}
                  <div className="mt-4">
                    <p className="text-sm leading-relaxed tracking-wide min-h-25">
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
