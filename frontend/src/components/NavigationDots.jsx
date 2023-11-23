import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation items-center flex flex-col justify-center p-4">
      {["home", "about", "contact", "work", "skills", "Projects"].map(
        (item, idx) => (
          <a
            className="rounded-full h-[10px] w-[10px] m-1 transition-all ease-in-out duration-200 bg-slate-400"
            href={`#${item}`}
            key={`item-${idx}`}
            style={active == item ? { background: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
