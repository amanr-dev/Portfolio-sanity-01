import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container flex flex-row min-h-[100vh] w-full  ${className}`}
      >
        <SocialMedia />

        <div className="app__wrapper app__flex flex-1 flex-col w-full items-center justify-center flex">
          <Component />
          <div className="copywrite capitalize flex justify-end items-end w-full flex-col">
            <p className="text-sm text-slate-700 ">copywrite @Aman Rawat</p>
            <p className="text-sm text-slate-700">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
