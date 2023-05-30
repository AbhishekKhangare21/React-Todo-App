import React from "react";
import "./sidebar.css";
import { BsArrowLeft, BsMicrosoft, BsFillShareFill } from "react-icons/bs";
import { TbCylinder } from "react-icons/tb";
import { GoGraph } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebarHeader">
          <div className="header">
            <div className="headerLogo">
              <h2>N</h2>
            </div>
            <h1>Name</h1>
            <div className="arrowLeft">
              <BsArrowLeft />
            </div>
          </div>
          <div className="middle">
            <div className="sidebarHome">
              <span>
                <BsMicrosoft />
              </span>
              <p>Home</p>
            </div>
            <div className="sidebarHome">
              <span>
                <GoGraph />
              </span>
              <p>Section 1</p>
            </div>
            <div className="sidebarHome">
              <span>
                <TbCylinder />
              </span>
              <p>Section 2</p>
            </div>
            <div className="sidebarHome">
              <span>
                <BsFillShareFill />
              </span>
              <p>Section 8</p>
            </div>
            <div className="sidebarHome">
              <span>
                <BsFillShareFill />
              </span>
              <p>Section 8</p>
            </div>
          </div>
        </div>
        <div className="sidebarFooter">
          <div className="btnGroup">
            <span>
              <div className="footerLogo">
                <h2>N</h2>
              </div>
              <span> $0.90</span>
            </span>
            <button>Buy SXYZ</button>
          </div>
          <div className="modes">
            <span className="public">
              <BsMicrosoft />
            </span>
            <button>dark</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
