import React from "react";
import "./input.css";
import { About, Skills, Testimonial, Work, Header, Footer } from "./container";

import { Navabar } from "./components";

export default function App() {
  return (
    <div className="bg-primaryWhiteColor">
      <Navabar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
