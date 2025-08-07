import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task !== '') {
      setList([...list, task]);
      setTask('');
    }
  };

  const deleteTask = (i) => {
    const updatedList = list.filter((_, index) => index !== i);
    setList(updatedList);
  };

  return (
    <div>
      <h2>Simple To-Do</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
