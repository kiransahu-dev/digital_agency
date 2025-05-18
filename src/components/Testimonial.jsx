import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John deo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve jod",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "John deo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/101/101",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Steve jod",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://picsum.photos/102/102",
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
          infinite: true,
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
    <div className="py-14 mb-10 container mx-auto md:pt-44 pt-24 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      <div className="container">
        {/* header sec */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            Client Testimonial
          </h1>
          <p className="font-semibold text-3xl">What Our Client Say About Us</p>
        </div>
        {/* testimonial sec */}
        <div>
          <Slider {...setting}>
            {TestimonialData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-sky-700/10">
                    {/* upper sec */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt="item/img"
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                      </div>
                    </div>
                    {/* bottom sec */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
