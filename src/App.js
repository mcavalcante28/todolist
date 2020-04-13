import React, {useState, useEffect} from 'react';
import './styles.css'



function App() {

  const [writeToDo, setWriteToDo] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function addTodo(e){
    e.preventDefault();
    setToDo([...toDo, {text: writeToDo, completed: false}]);
  }

  function deleteTodo(toDoIndex){   
    const filter = toDo.filter((item, index) => index !== toDoIndex)
    setToDo(filter);
  }

  function completeTodo(toDoIndex){
    const setCompleted = toDo;
    setCompleted[toDoIndex].completed = !setCompleted[toDoIndex].completed;
    setToDo([...setCompleted]);

    const completeds = toDo.filter(item => item.completed === true);
    setCompletedList([...completeds]);
  }

  return (
    <div className="full-container">
      <form onSubmit={addTodo}>
        <input value={writeToDo} onChange={e => setWriteToDo(e.target.value)}>
        </input>
        <button type='submit'>
          Add Todo
        </button>
      </form>
      <div>
        <div>
        {toDo.map((todo, index) => (
          <div key={index}>
          <p onClick={() => completeTodo(index)} 
          className={toDo[index].completed ? "completed_todo" : "notCompleted_todo"}>{todo.text}</p>
          <button onClick={() => deleteTodo(index)}></button>
          </div>
        ))}
         {completedList.map((complete, index) => (
          <div className='completed-container' key={index}>
          <p onClick={() => completeTodo(index)}>{complete.text}</p>
          </div>
        ))}

        </div>
      </div>

    </div>
  );
}

export default App;
