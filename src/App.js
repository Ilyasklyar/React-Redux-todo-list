import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ToDoContainer from './components/ToDoContainer'
import { Route } from 'react-router-dom';
import About from './components/About';


const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Route path='/home' render={() =>
        <ToDoContainer store={props.store} />}
      />
      <Route path='/about' component={About} />
    </div>
  );
}

export default App;
