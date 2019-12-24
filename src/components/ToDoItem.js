import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const ToDoItem = (props) => {

    let num = 1;

    return (
        <div className="todo-list">
            <div>
                <h3>My To Do</h3>
            </div>
            <div>
                <textarea onChange={(e) => { props.onTodoChange(e) }} value={props.newTodoText} className="text" />
            </div>
            <div>
                <button onClick={() => { props.addTodoItem() }} className="btn">add new task</button>
            </div>
            <div>
                <div className="todo-item">
                    <TransitionGroup component="ul">
                        {props.todoItems.slice(1).map(i => (
                            <CSSTransition 
                            key={i.id}
                            classNames={"note"}
                            timeout={1000}
                            >
                                <li>
                                    <span className="item">{num++}. {i.todo}</span>
                                    <span className="del" onClick={() => { props.onClickDelete(i) }}>x</span>
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        </div>

    )
}

export default ToDoItem; 