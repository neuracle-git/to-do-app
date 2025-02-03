import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoContainer({toDoList, deleteItem}) {
  return (
    
      <div className="container d-flex">
        {
            toDoList.map((todo,idx) => {

            return <ToDoItem todo={todo} idx={idx} deleteItem={deleteItem}/>
        } )
        }
        
      </div>
    
  );
}

export default ToDoContainer;
