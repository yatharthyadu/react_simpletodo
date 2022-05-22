import { useState } from "react";

const TodoInput = ({getData}) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          // console.log(e.target.value);
          setText(e.target.value);
        }}
        type="text"
        placeholder="Add a to-do..." 
      />
      <button onClick={() => {
        getData(text);
        }}
      >+</button>
    </div>   
  );
}

export {TodoInput};