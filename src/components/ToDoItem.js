import React from 'react';

import { deleteTodo } from '../redux/reducer-todo';


const ToDoItem = (props) => {
    let state = props.store.getState().allReducers;

    let num = 1;

    let onClickDelete = (e) => props.store.dispatch(deleteTodo(e));

    return (
        <div className="todo-item">
            <ul>
                {state.todoItems.slice(1).map(i => (
                    <li key={i.id} >
                        <span className="item">{num++}. {i.todo}</span>
                        <span className="del" onClick={() => onClickDelete(i)}>x</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoItem; 