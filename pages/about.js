import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-hero-pattern h-[500px] bg-cover bg-fixed sm:bg-top bg-right flex items-center mb-16">
          <div className="md:w-1/2">
            <h1 className="font-extrabold text-5xl mb-8">About Me</h1>
            <p className="text-muted text-xl font-normal">
              Welcome to my frontend web developer portfolio! I'm Ifeanyichukwu
              Eze, a passionate and experienced frontend web developer dedicated
              to crafting engaging user experiences and visually stunning
              websites. With a keen eye for design and a love for coding, I
              specialize in creating intuitive and impactful digital solutions.
            </p>
          </div>
        </div>
        <div className="col-12 mb-16">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 sm:text-left md:text-center text-left mb-4">
                <h1 className="font-extrabold text-2xl mb-2">My Journey</h1>
                <p>
                  From an early age, I developed a strong interest in technology
                  and design. I embarked on my web development journey with a
                  focus on frontend development, where I could combine my
                  creative instincts with my technical skills. Over the years, I
                  have honed my expertise in HTML, CSS, and JavaScript,
                  continuously expanding my knowledge and keeping up with the
                  latest industry trends.
                </p>
              </div>
              <div className="col-md-4 sm:text-left md:text-center text-left mb-4">
                <h1 className="font-extrabold text-2xl mb-2">My Approach</h1>
                <p>
                  I believe that great web development goes beyond lines of
                  code. It's about understanding your brand, your target
                  audience, and your goals to create a website that truly
                  represents your vision. I approach each project with a blend
                  of creativity and technical proficiency, ensuring that the
                  final result not only meets your expectations but exceeds
                  them.
                </p>
              </div>
              <div className="col-md-4 sm:text-left md:text-center text-left mb-4">
                <h1 className="font-extrabold text-2xl mb-2">
                  Collaboration and Communication
                </h1>
                <p>
                  I value collaboration and believe that a successful project is
                  built on open and transparent communication. I work closely
                  with my clients, taking the time to listen, understand their
                  needs, and provide valuable insights throughout the
                  development process. Your satisfaction is my top priority, and
                  I strive to deliver results that align with your unique
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="/Ifeanyichukwu Eze Dev.pdf"
            className="border-0 bg-indigo-800 text-white p-3 rounded-lg font-bold text-xl hover:bg-indigo-500"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
