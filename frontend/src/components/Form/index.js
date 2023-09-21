
import React from "react"
import "./styles.css"


function Form({input, setInput, addTodo}){
    return(
        <div className="formDiv">

            <input className="create_form_input" value={input} onChange={(e) => setInput(e.target.value)} type="text" name="" id="" />
            <button className="create_form_button" type="submit" onClick={(e) => addTodo(e)}>Add</button>
    
        </div>
    )
}

export default Form