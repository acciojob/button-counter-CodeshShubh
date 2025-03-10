
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setcounter] = useState(0)
  return (
    <div>
       <p>Button clicked {counter} times</p>
       <button onClick={()=>setcounter(prev=>prev+1)}>Click me</button>
    </div>
  )
}

export default App
