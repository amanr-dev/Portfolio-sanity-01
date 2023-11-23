import React from "react";
import { BsTwitterX, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social items-center flex flex-col p-4 justify-center gap-2">
      <div className="items-center flex bg-whiteColor border border-slate-700  h-8 w-8 transition-all duration-200 ease-in-out justify-center rounded-full text-slate-500 cursor-pointer hover:text-blueColor">
        <BsTwitterX />
      </div>
      <div className="items-center flex bg-whiteColor border border-slate-700  h-8 w-8 transition-all duration-200 ease-in-out  justify-center rounded-full text-slate-500 cursor-pointer hover:text-blueColor">
        <BsInstagram />
      </div>
      <div className="items-center flex bg-whiteColor border border-slate-700  h-8 w-8 transition-all duration-200 ease-in-out justify-center rounded-full text-slate-500 cursor-pointer hover:text-blueColor">
        <BsGithub />
      </div>
      <div className="items-center flex bg-whiteColor border border-slate-700  h-8 w-8 transition-all duration-200 ease-in-out justify-center rounded-full text-slate-500 cursor-pointer hover:text-blueColor">
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
