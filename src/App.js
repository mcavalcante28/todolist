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

    const completeds = setCompleted.filter(item => item.completed === true);
    console.log(toDoIndex)
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
          <div> 
            {!toDo[index].completed ? (
              <div key={index}>
              <p onClick={() => completeTodo(index)} 
              className={"notCompleted_todo"}>{todo.text}</p>
              <button onClick={() => deleteTodo(index)}></button>
              </div>
            ) :null}
            </div>
        ))}
         {toDo.map((todo, index) => (
          <div> 
            {toDo[index].completed ? (
              <div className="completed-container" key={index}>
              <p onClick={() => completeTodo(index)} 
              >{todo.text}</p>
              <button onClick={() => deleteTodo(index)}></button>
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
