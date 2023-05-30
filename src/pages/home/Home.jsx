import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Section from "../../components/section/Section";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="center">
        <Sidebar />
        <span>
          <Section />
        </span>
      </div>
    </div>
  );
};

export default Home;
