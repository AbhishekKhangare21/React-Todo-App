import React, { useEffect, useState } from "react";
import "./addTodo.css";
import { AiOutlinePlus } from "react-icons/ai";
import swal from "sweetalert";
import List from "../todo/List";

const getLocalList = () => {
  let List = localStorage.getItem("list");

  if (List) {
    return JSON.parse(List);
  } else {
    return [];
  }
};

const AddTodo = ({ sectionTodo, setSectionTodo }) => {
  const [todoList, setTodoList] = useState("");
  const [list, setList] = useState(getLocalList());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleList = (e) => {
    e.preventDefault();
    if (todoList) {
      const todoListWithId = {
        id: new Date().getTime().toString(),
        title: todoList,
      };
      setList([...list, todoListWithId]);
      setTodoList("");
    } else {
      swal({
        text: "Todo-List cannot be empty!",
        icon: "warning",
      });
    }
  };

  return (
    <div className="addTodo">
      <form onSubmit={(e) => handleList(e)} className="listTodo">
        {list.map((L) => (
          <List
            todo={L}
            key={L.id}
            sectionTodo={sectionTodo}
            setSectionTodo={setSectionTodo}
          />
        ))}

        <input
          placeholder="Add Todo-List"
          className="todoInput"
          onChange={(e) => setTodoList(e.target.value)}
          value={todoList}
        />

        <div className="plus" onClick={(e) => handleList(e)}>
          <AiOutlinePlus />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
