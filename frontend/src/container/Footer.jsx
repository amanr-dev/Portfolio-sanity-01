import React, { useState, useEffect } from "react";
import { images } from "../constants";
import { client } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsSubmited(true);
    });
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-700 flex-1 flex flex-col text-center mt-8">
        Contact with me
      </h2>
      <div className="appFooterCards w-full justify-evenly items-center flex-wrap-reverse my-8 max-tab:flex-col flex flex-row">
        <div className="appFooterCard min-w-[400px] flex-row flex justify-start m-4 p-4 items-center rounded-md cursor-pointer bg-[#fef4f5] transition-basic shadow-sm shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 ">
          <img
            src={images.email}
            alt="email"
            className="w-[40px] h-[40px] m-2"
          />
          <a
            href="mailto:hellow@me.com"
            className="text-sm font-bold text-slate-700"
          >
            Email me
          </a>
        </div>
        <div className="appFooterCard min-w-[400px] flex-row flex justify-start m-4 p-4 items-center rounded-md cursor-pointer bg-[rgba(158,245,255,0.49)] transition-basic shadow-sm shadow-slate-500 hover:shadow-lg hover:shadow-slate-500">
          <img
            src={images.mobile}
            alt="email"
            className="w-[40px] h-[40px] m-2"
          />
          <a
            href="tel: +1234567890"
            className="text-sm font-bold text-slate-700"
          >
            Call me
          </a>
        </div>
      </div>
      {!isSubmited ? (
        <div className="appFooterForm flex-col m-3  justify-center items-center flex max-tab:w-full max-tab:my-4">
          <div className="justify-center items-center flex rounded-sm bg-primaryWhiteColor m-4 transition-basic  w-full">
            <input
              type="text"
              className="p-text"
              name="name"
              placeholder="Enter your Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="justify-center items-center flex  rounded-sm bg-primaryWhiteColor m-4 transition-basic w-full">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="justify-center items-center flex rounded-sm bg-primaryWhiteColor m-4 transition-basic  w-full">
            <textarea
              name="message"
              placeholder="Leave a Message"
              cols="30"
              rows="10"
              value={message}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="rounded-md px-8 py-4 border-none bg-blueColor font-medium text-whiteColor mt-8 font-serif cursor-pointer "
            onClick={handleSubmit}
          >
            {loading ? "Submiting..." : "Submit"}
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <h4 className="text-3xl text-blueColor font-bold capitalize">
            Thanks you for Getting in touch.🙌
          </h4>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer), "contact", "bg-white");
