import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const ToggleBars = ({ activeTab, isOpen, setIsOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <Sidebar activeTab={activeTab} toggle={toggle} />}
      <Navbar activeTab={activeTab} toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default ToggleBars;
