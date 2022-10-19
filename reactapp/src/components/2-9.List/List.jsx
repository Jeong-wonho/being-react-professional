import React from "react";

export default function List() {
  //   const numbers = [1, 2, 3, 4, 5];
  //   return (
  //     <ul>
  //       {numbers.map((item) => (
  //         <li key={item.toString()}>{item}</li>
  //       ))}
  //     </ul>
  //   );
  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Training" },
    { id: 3, text: "Study" },
    { id: 4, text: "Go Sleep" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
