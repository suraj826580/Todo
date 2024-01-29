import React, { useState } from "react";
import { TodoList } from "./TodoList";

const intialObj = {
  authorname: "",
  todo: "",
};
const AddTodo = () => {
  const [inputValue, setinputValue] = useState(intialObj);
  const [todoList, settodoList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputValue((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    settodoList((pre) => [...pre, inputValue]);
    setinputValue(intialObj);
    console.log(todoList);
  };
  const deleteTodoFunc = (index) => {
    // const filterdata = todoList.filter((item, ind) => ind != index);
    // settodoList(filterdata);
    const updateddata = [...todoList];
    updateddata.splice(index, 1);
    settodoList(updateddata);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue.authorname}
          name="authorname"
          id="authorname"
          onChange={handleChange}
          placeholder="authorname"
        />
        <input
          type="text"
          name="todo"
          value={inputValue.todo}
          id="todo"
          placeholder="type your todo"
          onChange={handleChange}
        />
        <input type="submit" value="Add Todo" />
      </form>
      {todoList.length > 0 ? (
        <TodoList data={todoList} deleteTodoFunc={deleteTodoFunc} />
      ) : (
        <div>
          <h1>No todo found</h1>
        </div>
      )}
    </>
  );
};

export default AddTodo;
