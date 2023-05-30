import React from "react";
import "./editTodo.css";
import { BsArrowLeft } from "react-icons/bs";

const EditTodo = () => {
  return (
    <div className="editTodo">
      <div className="sub">
        <span>
          <BsArrowLeft />
        </span>
        <span className="subheading"> Edit Todo</span>
      </div>
      <input className="editTitle" placeholder="Edit Todo" />
      <div className="formContainer ">
        <form>
          <p className="todoDesc todo">
            <textarea
              className="addTodoDesc"
              placeholder="Add Todo Description"
            />
          </p>
          <button className="btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
