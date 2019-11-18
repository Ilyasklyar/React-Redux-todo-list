import React from 'react';
import './App.css';
import ToDoPage from './components/ToDoPage'

const App = (props) => {
  return (
    <div className="App">
      <ToDoPage store={props.store} />
    </div>
  );
}

export default App;
