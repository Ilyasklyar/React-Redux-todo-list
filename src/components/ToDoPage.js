import React from 'react';
import { updateNewTodoTextActionCreator, addTodoActionCreator } from '../redux/reducer-todo';
import ToDoItem from './ToDoItem'



const ToDoPage = (props) => {

    let state = props.store.getState().allReducers;
    let todoElements = <ToDoItem store={props.store} />;
    let newTodoText = state.newTodoText;

    let onTodoChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewTodoTextActionCreator(body));
    }

    let addTodoItem = () => props.store.dispatch(addTodoActionCreator());


    return (
        <div className="todo-list">
            <div>
                <h3>My To Do</h3>
            </div>
            <div>
                <textarea onChange={onTodoChange} value={newTodoText} className="text"/>
            </div>
            <div>
                <button onClick={addTodoItem} className="btn">add new task</button>
            </div>
            <div>
                {todoElements}
            </div>
        </div>
    )
}
export default ToDoPage;