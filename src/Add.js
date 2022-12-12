import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Add(props) {
  const newDate = useRef(new Date());

  const [currentDay, setCurrentDay] = useState(newDate.current.getDate());
  const [currentMonth, setCurrentMonth] = useState(newDate.current.getMonth());
  const [currentYear, setCurrentYear] = useState(newDate.current.getFullYear());
  const [currentHours, setCurrentHours] = useState(newDate.current.getHours());
  const [currentMinutes, setCurrentMinutes] = useState(
    newDate.current.getMinutes()
  );
  setInterval(() => {
    newDate.current = new Date();
    setCurrentDay(newDate.current.getDay());
    setCurrentMonth(newDate.current.getMonth());
    setCurrentYear(newDate.current.getYear());
    setCurrentHours(newDate.current.getHours());
    setCurrentMinutes(newDate.current.getMinutes());
  }, 10000000);

  const dayIndex = new Date().getDay();
  const getDayName = (dayIndex) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
  };

  const monthIndex = new Date().getDay();
  const getMonthName = (dayIndex) => {
    const month = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    return month[monthIndex];
  };

  const dayName = getDayName(dayIndex);
  const monthName = getMonthName(dayIndex);

  const day = `${currentDay}`;
  const month = `${currentMonth + 1}`;
  const year = `${currentYear}`;
  const minutes = `${currentMinutes}`;
  const hours = `${currentHours}`;

  useEffect(() => {
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(hours);
    console.log(minutes);
  });

  console.log(props.id);

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);
    setInput("");
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

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
      <div className="header">
        <h1 className="header--title">
          <Link to="/">
            <button className="btn4">⬅ List</button>
          </Link>
        </h1>
        <h4 className="header--project">
          <button className="btn3" onClick={() => addTodo(input)}>
            Save
          </button>
        </h4>
      </div>

      <h1 className="h1--left">New Task</h1>
      <div className="add--newtask">
        <h3 className="add--remind">Remind</h3>
        <p className="ppp">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </p>
      </div>

      <div className="date--time">
        <img src="calendar.png" className="header--image" alt="Calendar" />
        <h5 className="header--dayy">
          {" "}
          {dayName}, {monthName} {year}
        </h5>
      </div>

      <div className="date--time">
        <h1 className="header--title">
          <img src="clock.png" className="header--image" alt="clock" />
        </h1>
        <h4 className="header--dayy">
          {hours}:{minutes}
        </h4>
      </div>

      <input
        className="imput"
        type="text"
        placeholder="Here will be the text of the new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="listt">
        <label>
          {list.map((todo) => (
            <p key={todo.id} onClick={przekresl}>
              <input type="checkbox" className="checkbox-round" />
              {todo.todo}    <button className="btn-small" onClick={() => deleteTodo(todo.id)}>&times;</button>
            </p>
          ))}
        </label>
      </div>
    </div>
  );
}
