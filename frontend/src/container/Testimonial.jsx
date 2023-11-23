import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonial, setTestimonial] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const q = '*[_type == "testimonials"]';
    const qBrands = '*[_type == "brands"]';
    client.fetch(q).then((data) => {
      setTestimonial(data);
    });

    client.fetch(qBrands).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonial && (
        <>
          <div className="appTestimonial flex-1 w-full flex-col flex justify-center items-center max-tab:flex-col mt-12 max-tab:w-full">
            <div className="appTestiitem w-2/3 min-h-[250px] bg-whiteColor items-center flex p-8 gap-4 rounded-md shadow-slate-500 shadow-md transition-basic desktop:min-w-[450px]">
              <img
                src={urlFor(testimonial[currentIndex].imgurl)}
                alt="Testimonials"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="appTestiContent flex flex-1 h-full px-4 flex-col text-left justify-around items-start">
                <p className="p-text text-2xl leading-8 text-slate-700">
                  {testimonial[currentIndex].feedback}
                </p>
                <div>
                  <h4 className="boldtext font-bold text-slate-700 mt-4 ">
                    {testimonial[currentIndex].name}
                  </h4>
                  <h5 className="boldtext font-semibold text-slate-500 mt-2">
                    {testimonial[currentIndex].company}
                  </h5>
                </div>
              </div>
            </div>
            <div className="testiBtns flex flex-row mt-4 ">
              <div
                className="justify-center items-center flex w-[50px] h-[50px] rounded-full bg-whiteColor m-4 transition-basic "
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonial.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft className="text-3xl text-blueColor cursor-pointer hover:text-slate-500" />
              </div>
              <div
                className="justify-center items-center flex w-[50px] h-[50px] rounded-full bg-whiteColor m-4 transition-basic "
                onClick={() =>
                  handleClick(
                    currentIndex === testimonial.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight className="text-3xl text-blueColor cursor-pointer hover:text-slate-500" />
              </div>
            </div>
          </div>
        </>
      )}
      <div className="brands max-tab:w-[80%] flex-wrap mt-8 justify-center items-center flex  w-full">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
            className="w-[200px] m-6 flex justify-center items-center"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              className="w-full h-auto object-cover hover:grayscale-0 grayscale desktop:w-[200px] desktop:m-8 max-tab:w-[120px] max-tab:m-4 "
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonial),
  "Testimonial",
  "bgPrimaryWhiteColor"
);
