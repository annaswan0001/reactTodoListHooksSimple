import React, {useContext} from 'react'
import TodosContext from './context'


function TodoItem(props) {

const {state, dispatch} = useContext(TodosContext)
console.log(state.currentTodo)
    return (
        <div>
            <ul>
            {state.todos.map(todo=>
            <li key={todo.id}>
               <span
               style={{color:todo.completed ? "red": "blue"}}
               onClick={()=>{
                   dispatch({type:"SET_COMPLETE", payload:todo})}}
               > {todo.text}</span>
               <button
               onClick={
                   ()=>{dispatch({type:"DELETE", payload:todo});
                   console.log(todo.id)
               }}
               
               >DELETE</button>
               <button
               onClick = {()=>{dispatch({type:"SET_CURRENT_TODO", payload:todo})}}
               >EDIT</button>
            </li>
            
            )}
            </ul>
            
        </div>
    )
}



export default TodoItem

