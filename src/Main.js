import React, { useState } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";

export default function Main(props) {
  const [list, setList] = useState([props]);

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);

    
  }
  const przekresl = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
      event.target.style.setProperty('checked');
    }
  };

  return (
    <div>
      <div className="listt">
      <label>
        {list.map((todo) => (
            <p key={todo.id} onClick={przekresl}><input type="checkbox" className="checkbox-round" onClick={przekresl}/> {todo.todo}<button onClick={() => deleteTodo(todo.id)}>&times;</button></p>
          ))}
      </label>
      </div>
      <br />
      
      <div div className="right">
      <Link to="./Add.js">
        {" "}
        <button className="btn">+</button>
      </Link>
      </div>
    </div>
  );
}
