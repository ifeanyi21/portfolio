import React from "react";
import Socials from "../Socials";

const Footer = () => {
  return (
    <div className="bg-indigo-800 text-white min-h-[200px] mt-14 z-10 relative">
      <div className="pt-16">
        <Socials color={'white'} display={'justify-center'}/>
        <h6 className="text-center m-0">
          © {new Date().getFullYear()} Developed By: IfeanyiChukwu Eze
        </h6>
      </div>
    </div>
  );
};

export default Footer;
