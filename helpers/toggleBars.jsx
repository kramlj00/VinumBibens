import React from "react";
// import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const ToggleBars = ({ setIsOpen, isOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
    </div>
  );
};

export default ToggleBars;
