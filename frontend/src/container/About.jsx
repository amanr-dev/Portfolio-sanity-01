import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import { client, urlFor } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="flex w-full flex-col flex-[1] ">
      <h2 className="text-slate-700 text-3xl font-semibold head-test text-center capitalize">
        {" "}
        I Know that
        <span className="text-blueColor"> Good Web & App</span>
        <br />
        means
        <span className="text-blueColor"> Good Business</span>
      </h2>
      <div className="app__profiles flex justify-center items-start flex-wrap mt-8">
        {abouts?.map((item, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item w-[120px] flex justify-start items-start flex-col m-4 desktop:w-[250px] desktop:h-[450px] desktop:my-8 desktop:mx-4 "
            key={item.title + idx}
          >
            <img
              className="w-full h-[170px] object-cover rounded-lg desktop:h-[320px]"
              src={urlFor(item.imgUrl)}
              alt={item.title}
            />
            <h2
              className="text-slate-700 font-semibold text-2xl bold-text"
              style={{ marginTop: 20 }}
            >
              {item.title}
            </h2>
            <p className="bold-text text-base" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About), "about", "bg-whiteColor");
