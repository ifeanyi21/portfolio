import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

const skills = [
  {
    id: 0,
    src: "/Images/html.png",
    name: "HTML",
  },
  {
    id: 1,
    src: "/Images/css.png",
    name: "CSS",
  },
  {
    id: 2,
    src: "/Images/javascript.png",
    name: "JavaScript",
  },
  {
    id: 3,
    src: "/Images/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id: 4,
    src: "/Images/tailwind.png",
    name: "Tailwind",
  },
  {
    id: 5,
    src: "/Images/react.png",
    name: "React",
  },
  {
    id: 6,
    src: "/Images/node.svg",
    name: "Nodejs",
  },
];

export default class Technologies extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 900,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          {skills.map((item) => {
            return (
              <div key={item.id}>
                <Image
                  src={item.src}
                  alt={`${item.name} Logo`}
                  width={100}
                  height={100}
                  className="mx-auto mb-1 min-h-[100px] object-contain"
                />
                <p className="text-xl text-center text-indigo-600 font-bold">
                  {item.name}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
