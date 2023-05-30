import React, { useEffect, useState } from "react";
import "./list.css";
import { FaUserCircle } from "react-icons/fa";
import { RiAddCircleFill, RiEditCircleFill } from "react-icons/ri";
import swal from "sweetalert";

const getLocalTodoList = (todo) => {
  const TodoList = localStorage.getItem(`todoList${todo.id}`);
  if (TodoList) {
    return JSON.parse(TodoList);
  } else {
    return [];
  }
};

const List = ({ todo, sectionTodo, setSectionTodo }) => {
  const [singleTodo, setSingleTodo] = useState({
    id: "",
    todoTitle: "",
    todoDesc: "",
  });
  const [todoList, setTodoList] = useState(getLocalTodoList(todo));
  console.log(todoList);

  useEffect(() => {
    localStorage.setItem(`todoList${todo.id}`, JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e) => {
    if (singleTodo.todoTitle && singleTodo.todoDesc) {
      const singleTodoWithId = {
        id: new Date().getTime().toString(),
        todoTitle: singleTodo.todoTitle,
        todoDesc: singleTodo.todoDesc,
      };
      setTodoList([...todoList, singleTodoWithId]);
      setSingleTodo({ id: "", todoTitle: "", todoDesc: "" });
    } else {
      swal({
        text: "Todo-List cannot be empty!",
        icon: "warning",
      });
    }
  };

  return (
    <div className="list">
      <p className="title">List : {todo.title}</p>
      <div className="todo">
        <div className="todoTitle">
          <div className="leftTodoTitle">
            <span className="user">
              <FaUserCircle color="#BBB5E2" />
            </span>
            <input
              className="addTodoInput"
              placeholder="Add Todo"
              value={singleTodo.todoTitle}
              onChange={(e) =>
                setSingleTodo({ ...singleTodo, todoTitle: e.target.value })
              }
            />
          </div>
          <span className="todoAdd" onClick={(e) => handleSubmit(e)}>
            <RiAddCircleFill color="#9C92DF" />
          </span>
        </div>
        <p className="todoDesc">
          <textarea
            className="addTodoDesc"
            placeholder="Add Todo Description"
            value={singleTodo.todoDesc}
            onChange={(e) =>
              setSingleTodo({ ...singleTodo, todoDesc: e.target.value })
            }
          />
        </p>
      </div>
      {/* ****************** add Todo **************** */}
      {todoList.map((t) => (
        <div className="todo" key={t.id}>
          <div className="todoTitle">
            <div className="leftTodoTitle">
              <span className="user">
                <FaUserCircle color="#BBB5E2" />
              </span>
              <p>{t.todoTitle}</p>
            </div>
            <span className="add" onClick={() => setSectionTodo(t)}>
              <RiEditCircleFill color="#9C92DF" />
            </span>
          </div>
          <p className="todoDesc">{t.todoDesc}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
