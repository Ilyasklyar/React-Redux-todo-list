import React from 'react';
import { updateNewTodoTextActionCreator, addTodoActionCreator, deleteTodoAC } from '../redux/reducer-todo';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';


const ToDoContainer = (props) => {

    let onTodoChange = (e) => {
        let body = e.target.value;
        props.updateNewTodoTextActionCreator(body);
    }

    let addTodoItem = () => props.addTodoActionCreator();

    let onClickDelete = (e) => props.deleteTodoAC(e);

    return (
        <ToDoItem {...props} onTodoChange={onTodoChange} addTodoItem={addTodoItem} onClickDelete={onClickDelete} />
    )
}

let mapStateToProps = (state) => {
    return {
        todoItems: state.todoReducer.todoItems,
        newTodoText: state.todoReducer.newTodoText
    }
}

export default connect(mapStateToProps,
    { addTodoActionCreator, updateNewTodoTextActionCreator, deleteTodoAC })(ToDoContainer);