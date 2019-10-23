

export default function reducer (state, action){
    switch (action.type){
        case "ADD_TODO":
            if(state.todos.find(todo=>todo.text === action.payload)){
            return state
            }
            const newTodo = {id: new Date(), completed:false, text:action.payload}
            const newTodos = [...state.todos, newTodo]
            
            return{
                ...state, todos: newTodos
            }
        case "DELETE":
            const newTodoDelete = state.todos.filter(todo => todo.id !== action.payload.id)
            return{
                ...state, todos:newTodoDelete
            }
        case "SET_COMPLETE":
            const newTodoComplete = state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed : !todo.completed} : todo)
            return{
                ...state, todos:newTodoComplete
            }
        case "SET_CURRENT_TODO":
            return{
                ...state, currentTodo:action.payload
            }
        case "EDIT_TODO":
            const editTodo = {...state.currentTodo, text: action.payload}

            const indexEditTodo = state.todos.findIndex(todo=> todo.id === state.currentTodo.id)

            const editTodos = [
            ...state.todos.slice(0, indexEditTodo), 
            editTodo,
            ...state.todos.slice(indexEditTodo+1)]

            return{
                ...state, todos:editTodos, currentTodo:{}
            }
        default :{
            return state
        }
        
    }
}

