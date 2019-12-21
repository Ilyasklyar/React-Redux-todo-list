const ADD_TODO = 'ADD-TODO';
const UPDATE_NEW_TODO_TEXT = 'UPDATE-NEW-TODO-TEXT';
const DELETE_TODO = 'DELETE_TODO';


let initialState = {
    todoItems: [
        { id: 0, todo: 'd' }
    ],
    newTodoText: '',
    current: 1
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {

            let newTodo = {
                id: state.current++,
                todo: state.newTodoText
            };
            state = { ...state };
            state.todoItems = [...state.todoItems];
            state.todoItems.push(newTodo);
            state.newTodoText = '';
            return state;
        }
        case UPDATE_NEW_TODO_TEXT: {
            state = { ...state };
            state.newTodoText = action.body;
            return state;
        }
        case DELETE_TODO: {
            state = { ...state };
            state.todoItems = state.todoItems.filter(e => e !== action.num);
            return state;
        }
        default:
            return state;
    }
}
export const addTodoActionCreator = () => ({ type: ADD_TODO })
export const updateNewTodoTextActionCreator = (text) => ({ type: UPDATE_NEW_TODO_TEXT, body: text })
export const deleteTodoAC = (e) => ({ type: DELETE_TODO, num: e })

export default todoReducer;