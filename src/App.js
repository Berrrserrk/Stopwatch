import React from 'react';
import './App.css';
import Timer from './Component/Timer';

function App() {
  return (
    <div className="container">
     {[1, 2, 3, 4, 5, 6].map((index) => (
        <Timer key={index} index={index} />
      ))}
    </div>
  );
}

export default App;

