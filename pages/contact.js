import Socials from "@/components/Socials";
import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white container">
      <div className="relative isolate px-6 pt-14 lg:px-8 lg:min-h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[89.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mb-10">
          <h1 className="text-center text-5xl font-bold">Contact</h1>
        </div>

        <div className="row">
          <div className="col-lg-6 lg:py-56">
            <div>
              <h1 className="font-medium">Get In touch</h1>
              <p className="mb-1">
                If you are interested in working with me on your next project,
                please don't hesitate to reach out! I'm always excited to
                collaborate with new clients and create engaging digital
                solutions.
              </p>
              <p className="mb-1">
                You can contact me through the form below or send me an email at
                <a
                  href="mailto:ezeifeanyichukwu21@gmail.com"
                  className="font-bold text-indigo-600"
                >
                  {" "}
                  ezeifeanyichukwu21@gmail.com
                </a>
                . I will do my best to respond to your inquiry within 24-48
                hours.
              </p>
              <p>
                Thank you for considering me as your web developer, and I look
                forward to hearing from you soon!
              </p>
            </div>
            <div className="mt-4">
              <div className="flex">
                <FaMailBulk size={20} className="mr-2 text-indigo-600" />
                <span className="ml-2">
                  {" "}
                  <a
                    href="mailto:ezeifeanyichukwu21@gmail.com"
                    className="font-light text-gray-600 text-base"
                  >
                    {" "}
                    ezeifeanyichukwu21@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex mt-3">
                <FaPhone size={20} className="mr-2 text-indigo-600" />
                <span className="ml-2">
                  {" "}
                  <a
                    href="tel:+2348067749483"
                    className="font-light text-gray-600 text-base"
                  >
                    {" "}
                    + 234 806 774 9483
                  </a>
                </span>
              </div>
              <div className="mt-8">
                <Socials color={"rgb(55 48 163)"} display={""} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 lg:py-56">
            <form>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="font-medium mb-2">First name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border-indigo-600 sm:border-0 focus:border-indigo-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[1px]"
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <label className="font-medium mb-2">Last name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border-indigo-600 sm:border-0 focus:border-indigo-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[1px]"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <label className="font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border-indigo-600 sm:border-0 focus:border-indigo-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[1px]"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <label className="font-medium mb-2">Phone Number</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border-indigo-600 sm:border-0 focus:border-indigo-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[1px]"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <label className="font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-1 rounded-md border-indigo-600 sm:border-0 focus:border-indigo-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[1px]"
                    rows={"4"}
                  ></textarea>
                </div>
                <div className="col-lg-12 mb-3 justify-end flex">
                  <button className="font-medium text-base bg-indigo-600 p-2 rounded-lg text-white">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
