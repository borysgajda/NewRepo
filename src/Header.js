import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const newDate = useRef(new Date());

  const [currentDay, setCurrentDay] = useState(newDate.current.getDate());
  const [currentMonth, setCurrentMonth] = useState(newDate.current.getMonth());
  const [currentYear, setCurrentYear] = useState(newDate.current.getFullYear());
  setInterval(() => {
    newDate.current = new Date();
    setCurrentDay(newDate.current.getDay());
    setCurrentMonth(newDate.current.getMonth());
    setCurrentYear(newDate.current.getYear());
  }, 10000000);
  
  const dayIndex = new Date().getDay();
  const getDayName = (dayIndex) =>{
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
  }
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

  useEffect(() => {
    console.log(day);
    console.log(month);
    console.log(year);
  });
  return (
    <header className="header">
      <h1 className="header--title">{day}</h1>
      <h5 className="header--dayy"> {dayName} <br></br>{monthName}, {year}</h5>
      <h4 className="header--project">
        <img src="calendar.png" className="header--image" alt="Calendar" />
      </h4>
    </header>
  );
}