import React, {useState} from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './styles.css'
import {format} from 'date-fns'



function App() {

  const [writeToDo, setWriteToDo] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function addTodo(e){
    e.preventDefault();
    setToDo([...toDo, {text: writeToDo, completed: false, date: format(new Date(), 'dd.MM.yy')}]);
  }

  function deleteTodo(toDoIndex){   
    const filter = toDo.filter((item, index) => index !== toDoIndex)
    setToDo(filter);
  }

  function completeTodo(toDoIndex){
    const setCompleted = toDo;
    setCompleted[toDoIndex].completed = !setCompleted[toDoIndex].completed;

    const completeds = setCompleted.filter(item => item.completed === true);
    console.log(toDoIndex)
    setCompletedList([...completeds]);
    localStorage.setItem('todos', [...toDo])
    localStorage.setItem('completeds', [...completeds])
  }


  return (
    <div className="full-container">
      <form onSubmit={addTodo}>
        <p> To do App </p>
        <input value={writeToDo} onChange={e => setWriteToDo(e.target.value)}>
        </input>
        <button type='submit'>
          Add Todo
        </button>
      </form>
      <div className="bottom-container">
        <div className="todo-list"> 
        <p> Lista por fazer </p>
        {toDo.map((todo, index) => (
          <div> 
            {!toDo[index].completed ? (
              <div className="todo-label" key={index}>
              <p onClick={() => completeTodo(index)} 
              className={"notCompleted_todo"}>{todo.text}</p>
              <button className="delete-button" onClick={() => deleteTodo(index)}>
              <FiTrash2 size={15} color="#000"/>
              </button>
              </div>
            ) :null}
            </div>
        ))}
        </div>
        <div className="todo-list">
        <p> Lista completos </p>
         {toDo.map((todo, index) => (
          <div> 
            {toDo[index].completed ? (
              <div className="completed-container" key={index}>
              <p onClick={() => completeTodo(index)} 
              >{todo.text}</p> 
              <button onClick={() => deleteTodo(index)}>
              <FiTrash2 size={15} color="#a8a8b3"/>
              </button>
              </div>
            ) :null}
            </div>
        ))}
        </div>

        </div>
      </div>
  );
}

export default App;
