import React from 'react';
import './App.css';
import ToDoContainer from './components/ToDoContainer'

const App = (props) => {
  return (
    <div className="App">
      <ToDoContainer store={props.store} />
    </div>
  );
}

export default App;
