import React from "react";
import "./editTodo.css";
import { BsArrowLeft } from "react-icons/bs";

const EditTodo = ({ sectionTodo, setSectionTodo }) => {
  return (
    <div className="editTodo">
      <div className="sub">
        <span>
          <BsArrowLeft />
        </span>
        <span className="subheading"> Edit Todo</span>
      </div>
      <input
        className="editTitle"
        value={sectionTodo.todoTitle}
        placeholder="Edit Todo"
        onChange={() => {}}
      />
      <div className="formContainer ">
        <form>
          <p className="todoDesc todo">
            <textarea
              value={sectionTodo.todoDesc}
              className="addTodoDesc"
              placeholder="Add Todo Description"
              onChange={() => {}}
            />
          </p>
          <button className="btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
