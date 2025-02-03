import { useState } from 'react';
import './App.css'
import InputContainer from './components/InputContainer'
import ToDoContainer from './components/ToDoContainer'

function App() {  

  const [todotext, setToDoText] = useState('');

  const [toDoList, setToDoList] = useState([]);

  function writeToDo(e){
   setToDoText(e.target.value);
  }

  function addToDoList(){

    if (todotext!=''){
      setToDoList([...toDoList, todotext])
      setToDoText('')
    }
  }

  function deleteItem(todoIdx){
    setToDoList((prevToDo) => prevToDo.filter((prevItem,prevIdx) => {
      return prevIdx != todoIdx
    }))
  }

    
  return (
    <main>
      <h1>To Do List App</h1>
     
      <InputContainer todotext={todotext} writeToDo={writeToDo} addToDoList={addToDoList}/>
      <ToDoContainer toDoList={toDoList} deleteItem={deleteItem}/>
     
      
    </main>
  )
}

export default App
