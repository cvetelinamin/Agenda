import React from 'react';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
     {props.children}
    </div>
  );
}

export default App;
