import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Foot from "./components/Foot";

const App = () => (
  <>
    <div className="bg-white shadow-xl w-full overflow-x-hidden">
      <div className="mx-24 relative">
        <Navbar />
      </div>
    </div>
    <div className="bg-ground">
      <div className="pt-10 relative">
        <div className="md:mx-24 mx-5">
          <Hero />
        </div>
        <div className="mt-10 bg-white">
          <Foot />
        </div>
      </div>
    </div>
  </>
);

export default App;
