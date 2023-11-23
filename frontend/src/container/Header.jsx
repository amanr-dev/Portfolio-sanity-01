import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../wrapper";

// import { AppWrap } from "../../wrapper";
import { images } from "../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div
    className="app__container bg-bgImg bg-center bg-repeat bg-cover relative
     "
  >
    {/* <div className="app__wrapper flex-col p-4 w-full items-center justify-center flex"> */}
    <div className="app__header app__flex items-center justify-center flex  flex-row h-full p-16 w-full max-tab:flex-col  mobile:p-12 desktop:pt-20 mobile:pt-28 max-mobile:pt-28">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info desktop:mr-0 desktop:w-[25%] max-tab:w-full flex-start flex  flex-col h-full justify-start desktop:bottom-[222px]"
      >
        <div className="app__header-badge items-end flex flex-col justify-end w-full desktop:justify-start desktop:items-start max-tab:items-start max-tab:justify-start">
          <div className="badge-cmp app__flex border-white rounded-lg shadow-lg shadow-slate-500 flex-row p-4 w-auto items-center justify-center flex bg-white ">
            <span className="text-3xl">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text text-slate-700 text-sm leading-loose text-left capitalize">
                Hello, I am
              </p>
              <h1 className="head-text text-slate-700 text-3xl font-semibold capitalize">
                Micael
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex items-center flex justify-center flex-col border-white rounded-lg shadow-lg shadow-slate-500 mt-12 p-4 w-aut bg-white">
            <p className="p-text text-right uppercase w-full text-slate-700 text-sm leading-6">
              Web Developer
            </p>
            <p className="p-text text-right uppercase w-full text-slate-700 text-sm leading-6">
              Freelancer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img flex items-end justify-end relative h-full"
      >
        <img
          className="object-contain w-full z-[1]"
          src={images.profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle bottom-0 h-[90%] left-0 absolute right-0 w-full z-0"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles flex flex-[0.75] items-start flex-col h-full justify-evenly ml-4 desktop:ml-16 gap-8 max-tab:flex-row max-tab:flex-wrap max-tab:pt-4"
      >
        {[images.redux, images.typescript, images.react, images.javascript].map(
          (circle, index) => (
            <div
              className="circle-cmp app__flex items-center flex justify-center bg-whiteColor rounded-full shadow-lg shadow-slate-500 odd:w-[100px] odd:h-[100px] w-[80px] h-[80px] desktop:odd:-ml-[50px] desktop:even:ml-5"
              key={`circle-${index}`}
            >
              <img className="w-1/2 h-1/2 " src={circle} alt="profile_bg" />
            </div>
          )
        )}
      </motion.div>
    </div>
  </div>
  // </div>
);

// export default AppWrap(Header, "home");
export default AppWrap(Header, "home");
