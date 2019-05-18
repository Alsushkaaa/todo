import React,{ useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("First task");
  const [list,setList] = useState ([])

  const handleChange = (event) =>{
    let value = event.target.value;
    setName(value);
  }
  const handleClick = () =>{
    if (name) {
    setList(list.concat(name));
    setName("");
    }
  }
  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <ol>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  );
}

export default App;
