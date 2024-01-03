import Image from "next/image";
import React from "react";

const availableProjects = [
  {
    id: 1,
    name: "TK-Couture",
    image: "/Images/tk-couture.png",
    url: "https://tk-couture.onrender.com",
    desc: "This is a fully built e-commerce website which is integrated with paystack.",
  },
  {
    id: 2,
    name: "Planet Khan Multimedia",
    image: "/Images/planet-khan.png",
    url: "https://planetkhan.vercel.app",
    desc: "Planet khan is a multimedia company that has worked with alot of brands.",
  },
];

const Projects = () => {
  return (
    <div className="container py-10">
      <div className="row">
        <div className="mb-16">
          <h3 className="text-center text-indigo-600 font-bold text-3xl">
            Projects
          </h3>
        </div>
        {availableProjects.map((item) => {
          return (
            <div className="col-md-6 mb-8" key={item.id}>
              <a href={item.url} target="_blank">
                <Image
                  className="w-full transition-transform hover:scale-105 rounded-md"
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              </a>
              <p className="text-center my-8 text-indigo-800 font-semibold">
                {item.name}
              </p>
              <p className="text-gray-800 text-center text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
