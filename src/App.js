import React, {useContext, useReducer} from 'react';
import Form from './Form'
import TodoList from './TodoItem'
import reducer from './reducer'
import TodosContext from './context'
import './App.css';


function App() {

  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <TodosContext.Provider value={{state, dispatch}}>
    <div style={{textAlign:"left"}}>
      <Form/>
      <TodoList/>
   
    </div>
    </TodosContext.Provider>
  );
}

export default App;
