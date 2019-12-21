import React from 'react';



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
                    <ul>
                        {props.todoItems.slice(1).map(i => (
                            <li key={i.id} >
                                <span className="item">{num++}. {i.todo}</span>
                                <span className="del" onClick={() => { props.onClickDelete(i) }}>x</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ToDoItem; 