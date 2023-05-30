import React, { useState } from "react";
import "./section.css";
import { TfiMouse } from "react-icons/tfi";
import AddTodo from "../../components/addTodo/AddTodo";
import EditTodo from "../../components/editTodo/EditTodo";

const Section = () => {
  const [sectionTodo, setSectionTodo] = useState({});
  console.log("sectionTodo", sectionTodo);

  return (
    <div className="section">
      <div className="sectionContainer">
        <h2>Section</h2>
        <div className="sectionDiv">
          <TfiMouse />
          <span>0.2 $XYZ</span>
          <button>Tier 1</button>
        </div>
      </div>
      <div className="sectionContainer2">
        <span className="add_todo">
          <AddTodo sectionTodo={sectionTodo} setSectionTodo={setSectionTodo} />
        </span>
        <span className="span2">
          <EditTodo sectionTodo={sectionTodo} setSectionTodo={setSectionTodo} />
        </span>
      </div>
    </div>
  );
};

export default Section;
