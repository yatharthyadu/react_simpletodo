import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem, Completed } from "./TodoItem";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (text) => {
    const playload = {
      title: text,
      status: false,
      id: Math.ceil(Math.random()*10000)
    };
    setTodosList([...todosList, playload]);
  };

  const handleStatus = (id) => {
    // console.log("id:", id);
    setTodosList([...todosList.map(e => e.id == id? {...e, status: !e.status}: e)]);
  }

  return ( 
    <div>
     <TodoInput getData={getData} />
     {
       todosList.map(e => (
        <div className="items">
          <TodoItem todo={e} handleStatus={handleStatus} />
        </div>
       ))
     }
     <h3>Show completed To-dos</h3>
     {
       todosList.map(e => (
        <div className="item">
          <Completed todo={e} handleStatus={handleStatus} />
        </div>
       ))
     }
    </div>
  );
}

export {Todo};