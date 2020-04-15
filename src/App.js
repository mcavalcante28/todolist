import React, {useState} from 'react';
import { FiTrash2, FiPenTool } from 'react-icons/fi';
import './styles.css'
import {format} from 'date-fns'
import {Popup} from 'semantic-ui-react'



function App() {

  const [writeToDo, setWriteToDo] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [editedToDo, edittToDo] = useState([]);


  function addTodo(e){
    e.preventDefault();
    setToDo([...toDo, {text: writeToDo, completed: false, date: format(new Date(), 'dd.MM.yy'), editing: false}]);
    setWriteToDo(['']);
  }

  function deleteTodo(toDoIndex){   
    const filter = toDo.filter((item, index) => index !== toDoIndex)
    setToDo(filter);
  }

  function completeTodo(toDoIndex){
    const setCompleted = toDo;
    setCompleted[toDoIndex].completed = !setCompleted[toDoIndex].completed;

    const completeds = setCompleted.filter(item => item.completed === true);
    setCompletedList([...completeds]);
  }
  function editMode(toDoIndex){
    const setEdited = toDo;

    setEdited[toDoIndex].editing = !setEdited[toDoIndex].editing;

    const editing = setEdited.filter(item => item.editing === true);
    setCompletedList([...editing]);
  }


  function editTodo(toDoIndex){
    const setEdited = toDo;

    setEdited[toDoIndex].text = editedToDo;
    setEdited[toDoIndex].editing = false;

    const completeds = setEdited.filter(item => item.editing === true);
    setCompletedList([...completeds]);
    edittToDo([]);
  }


  return (
    <div className="full-container">
      <form onSubmit={addTodo}>
        <p> To Do App </p>
        <input value={writeToDo} onChange={e => setWriteToDo(e.target.value)}>
        </input>
        <button type='submit'>
          Add Todo
        </button>
      </form>
      <div className="bottom-container">
        <div className="todo-list"> 
        <p> Fazer </p>
        {toDo.map((todo, index) => (
          <div className="itens-container"> 
              <div className="invisible">
                {todo.date}
              </div>
            {!toDo[index].completed ? (
              <div className="todo-label" key={index}>
                <Popup
                trigger={<p onClick={() => completeTodo(index)} 
                className="notCompleted_todo">{todo.text}<br/></p>}
                content={<div className="popup-div">
                <p>Criado em: {todo.date}</p>
                </div>}
                />
              <button className="delete-button" onClick={() => deleteTodo(index)}>
              <FiTrash2 size={15} color="#000"/>
              </button>
              {!todo.editing ? (
                <button className="delete-button" onClick={() => editMode(index)}>
                <FiPenTool size={15} color="#000"/>
                </button>
              ): (
                <div className="todo-label">
                <input value={editedToDo} onChange={e => edittToDo(e.target.value)}/>
                <button className="delete-button" onClick={() => editTodo(index)}>
                <FiPenTool size={15} color="#000"/>
                </button>
                </div>
              )}
              </div>
            ) :null}
            </div>
        ))}
        </div>
        <div className="todo-list">
        <p> Feitos </p>
         {toDo.map((todo, index) => (
          <div className="todo-label" key={index}> 
            {toDo[index].completed ? (
              <div className="completed-container" key={index}>
              <p onClick={() => completeTodo(index)} 
              >{todo.text}</p> 
              <button className="delete-button" onClick={() => deleteTodo(index)}>
              <FiTrash2 size={15} color="#000"/>
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
