import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([
      {
        y: 100,
        opacity: 0,
      },
    ]);

    setTimeout(() => {
      setAnimateCard([
        {
          y: 0,
          opacity: 1,
        },
      ]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((w) => w.tags?.includes(item)));
      }
    }, 500);
  };

  // console.log(works.filter((w) => w.tags?.includes("React JS")));

  return (
    <>
      <h2 className="text-slate-700 text-3xl font-semibold head-test text-center capitalize flex-col w-full">
        {" "}
        My creative
        <span className="text-blueColor"> Portfolio </span>
        section
      </h2>
      <div className="appWorkFilter flex flex-row justify-center items-center flex-wrap text-center mx-16 my-2">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, idx) => (
            <div
              key={idx}
              onClick={() => handleWorkFilter(item)}
              className={`appWorkFilter flex items-center justify-center px-4 py-2  rounded-lg font-semibold cursor-pointer transition-all duration-300 ease-in m-2 hover:bg-blueColor hover:text-whiteColor
               ${
                 activeFilter === item
                   ? "bg-blueColor text-whiteColor "
                   : " bg-whiteColor text-slate-700"
               }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, idx) => (
          <div
            className="appWorkItem transition-all duration-300 ease-in cursor-pointer flex items-center justify-center w-[250px] flex-col m-2 p-4 rounded-lg bg-whiteColor  text-slate-700 hover:shadow-lg hover:shadow-slate-500 desktop:w-[350px] desktop:p-8 desktop:rounded-md"
            key={idx}
          >
            <div className="appWorkImg w-full h-[200px] relative  flex items-center justify-center">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={urlFor(work.imgUrl)}
                alt={work.name}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="appworkhover absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center rounded-lg opacity-0 transition-basic gap-8"
              >
                <a href={work.projectLink} target="_blank" rel="noreferer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-500 text-whiteColor cursor-pointer font-semibold transition-basic"
                  >
                    <AiFillEye className="text-whiteColor w-1/2 h-1/2" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-500 text-whiteColor cursor-pointer font-semibold transition-basic"
                  >
                    <AiFillGithub className="text-whiteColor w-1/2 h-1/2" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="appworkcontent p-2 w-full relative flex-col  flex items-center justify-center">
              <h4 className="boldtext mt-4 leading-6 ">{work.title}</h4>
              <p className="p-text " style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="appworktag absolute py-2 px-4 rounded-lg bg-primaryWhiteColor -top-[20px] flex items-center justify-center gap-1">
                {work.tags ? (
                  work.tags.map((t) => (
                    <p key={t} className=" text-slate-700 p-text">
                      #{t}
                    </p>
                  ))
                ) : (
                  <p className=" text-slate-700 p-text ">#Tag</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work), "work", "bg-primaryWhiteColor");
