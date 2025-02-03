import React, { useState } from "react";

function InputContainer({todotext, writeToDo, addToDoList}) {
    
    function handleSubmit(e){        
        e.preventDefault();
        addToDoList()
    }

  return (
    <div>
      <div className="input-container">
        <input onChange={writeToDo} type="text" value={todotext} />
        <button onClick={handleSubmit}>+</button>
      </div>
    </div>
  );
}

export default InputContainer;
