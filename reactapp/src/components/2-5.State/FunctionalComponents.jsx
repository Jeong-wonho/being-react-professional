import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function FuctionalComponents() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>Hello, Functional!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
