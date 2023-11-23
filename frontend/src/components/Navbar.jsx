import React, { useState } from "react";
import { images } from "../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full p-4 flex items-center justify-between backdrop-blur-[4px] border border-slate-700 fixed z-[2]">
      <div className="cursor-pointer flex items-center justify-start">
        <img className="object-contain w-24 " src={images.logo} alt="Logo" />
      </div>
      <ul className="tab:flex mobile:hidden max-mobile:hidden flex-1 justify-center items-center list-none flex-row">
        {["home", "about", "contact", "work", "skills", "Projects"].map(
          (item, idx) => (
            <li
              className="mx-3 capitalize cursor-pointer "
              key={`link-${item}_${idx}`}
            >
              <a
                className="font-medium text-grayColor text-xl transition-all ease-in-out duration-300 hover:text-blueColor"
                href={`#${item}`}
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
      <div className="mobile:flex tab:hidden">
        <HiMenuAlt4
          className="cursor-pointer w-10 h-10 flex relative rounded-full justify-center items-center bg-blueColor text-whiteColor"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[80%] h-[100vh] flex items-end justify-end flex-col bg-whiteColor bg-menuWhitePng bg-cover bg-repeat shadow-lg shaodw-[rgba(168, 168, 168, 0.15)]"
          >
            <HiX
              className="text-3xl m-2 text-blueColor cursor-pointer"
              onClick={() => setToggle(false)}
            />
            <ul className="h-full w-full ">
              {["home", "about", "contact", "work", "skills", "Projects"].map(
                (item) => (
                  <li
                    className="mx-3 capitalize cursor-pointer my-8"
                    key={`link-${item}`}
                  >
                    <a
                      className="font-medium text-grayColor text-xl transition-all ease-in-out duration-300 hover:text-blueColor"
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
