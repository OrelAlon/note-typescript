import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>React </p>
      </div>
    </div>
  );
}

export default App;
