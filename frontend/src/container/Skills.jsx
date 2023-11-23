import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const q = '*[_type == "experiences"]';
    const qSkill = '*[_type == "skills"]';
    client.fetch(q).then((data) => {
      setExperience(data);
    });

    client.fetch(qSkill).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className="flex-1 flex w-full flex-col ">
      <h2 className="head-text text-slate-700 font-semibold capitalize text-3xl text-center max-tab:mt-4">
        Skills and Experience
      </h2>
      <div className="appSkillsContainer desktop:px-[50px] flex w-full mt-12 flex-row max-tab:w-3/4 max-tab:flex-col max-tab:m-auto">
        <motion.div className="appSkillsList  flex-1 flex flex-wrap mr-16 max-tab:mt-0 justify-center items-center w-full m-auto">
          {skills.map((skill, idx) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: "0.7" }}
              className="appSkillsItemAppFlex flex-col flex text-center m-4 transition-basic justify-center items-center"
              key={`${skill.name}_${idx}`}
            >
              <div
                className="appFlex rounded-full w-[80px] h-[80px]  hover:shadow-lg transition-baisc hover:shadow-slate-500 justify-center items-center flex max-tab:w-[40px] max-tab:h-[40px]"
                style={{
                  backgroundColor: skill.bgColor,
                }}
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className="w-1/2 h-1/2"
                />
              </div>
              <p className="p-text text-xl text-slate-700 mt-4 font-semibold capitalize">
                {" "}
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="skillExp flex flex-1 justify-center items-start flex-col desktop:mt-2 desktop:items-center">
          {experience?.map((exp, idx) => (
            <motion.div
              className="appSkillsExpItem flex flex-row w-full justify-start items-start mx-4"
              key={`${idx}_${exp.year}`}
            >
              <div className="appSkillsExpYear">
                <p className="bold-text text-xl text-blueColor font-bold mr-12 max-tab:mr-4">
                  {exp.year}
                </p>
              </div>
              <motion.div className="appSkillExpWorks flex-1 ">
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      className="appSkillexpWork flex flex-col justify-start items-start mb-4  cursor-pointer"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tooltip-id={work.name}
                      data-for={work.name}
                      key={work._key}
                    >
                      <h4 className="boldText font-bold text-slate-700 text-xl">
                        {work.name}
                      </h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skillsTooltip !max-w-[300px] !bg-whiteColor !text-slate-500 capitalize leading-6 !rounded-md !p-4 !text-center !desktop:max-w-[500px]"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(Skills), "skills", "bg-whiteColor");
