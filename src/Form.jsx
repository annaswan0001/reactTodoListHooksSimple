import React, { useContext, useState, useEffect } from "react";
import TodosContext from "./context";

function Form(props) {
  const [inputValue, setInput] = useState("");

  const { state, dispatch } = useContext(TodosContext);

  const addInput = e => {
    e.preventDefault();
    if (state.currentTodo.text) {
      dispatch({ type: "EDIT_TODO", payload: inputValue });
    } 
    else {
        if(inputValue){
            dispatch({ type: "ADD_TODO", payload: inputValue });
        }
     
    }
    setInput("");
  };




  useEffect(() => {
    if (state.currentTodo.text) {
      setInput(state.currentTodo.text);
    }
    else{
        setInput("")
        }
  }, [state.currentTodo.id]);



  return (
    <div>
      <form onSubmit={addInput}>
        <input
          type="text"
          onChange={e => {
            setInput(e.target.value);
          }}
          value={inputValue}
        />
      </form>
    </div>
  );
}

export default Form;
