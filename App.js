import './style.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const url ="https://api.agify.io/?name=";
    let response = await axios.get(url+name);
    setAge(response.data.age);
  }
  

  const handleNameChange = (e) => {
    setName(e.target.value);
    setAge(null); 
  };
  


  return (
    <div className="container">
      <h1>Guess Your Age Based on Your Name!</h1>
      <form onSubmit={handleSubmit}>
      <div className="search">
        <input type="text" 
        className="input-box" 
        value={name} onChange={handleNameChange} 
        placeholder="Enter first or full name"/>
        <button className="btn" type='submit'>Search</button>
      </div>
        {age !== null && 
          <p className={`result ${age ? 'visible' : ''}`}>
            Based on the name <b>{name}</b>, we predict you’re <b>{age}</b>!
          </p>
        }
      </form>
    </div>
  );
}

export default App;
