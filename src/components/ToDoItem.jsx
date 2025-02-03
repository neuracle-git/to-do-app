import React from "react";

const ToDoItem = ({todo,idx, deleteItem}) => {
    console.log(idx);
    
  return (
    
      <div className="d-flex to-do-item" key={idx}>
        <p>{todo}</p>
        <input type="checkbox" name="tdone" />
        <button onClick={() => deleteItem(idx)}>delete</button>
      </div>
    
  );
};

export default ToDoItem;
