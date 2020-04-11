import React, {useState, useEffect} from 'react';
import './styles.css'
function App() {

  const [writeToDo, setWriteToDo] = useState('');
  const [toDo, setToDo] = useState(['Initia']);


  function addTodo(e){
    e.preventDefault();
    setToDo([...toDo, writeToDo]);
  }

  function endTodo(index){
    delete toDo[index];
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
          <input type="checkbox"> 
          </input>
          {todo}
          <button onClick={endTodo(index)}></button>
          </div>
        ))}

        </div>
      </div>

    </div>
  );
}

export default App;
