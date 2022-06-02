import actiontypes from "../actiontypes";
import axios from 'axios';

export const getTodoCatalog = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:8080/api/todos')
        /* const res = await axios.get('https://jsonplaceholder.typicode.com/todos') */
        dispatch(setTodos(res.data))
    }
}

export const setTodos = todos => {
    return {
        type: actiontypes().todoCatalog.set,
        payload: todos
    }
}

// SINGLE TODO


export const getTodoById = id => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:8080/api/todos/${id}`)
        dispatch(setOneTodo(res.data))
    }
}

export const setOneTodo = todo => {
    return {
        type: actiontypes().todo.set,
        payload: todo
    }
}

export const clearTodo = () => {
    return {type: actiontypes().todo.clear}
}

//CREATE TODO 
export const createTodo = (title, desc, date) => {
    return () => {
        const todo = {
            title,
            desc,
            date,
            created: Date.now()
        }
        axios.post('http://localhost:8080/api/todos', todo)
    }
}


