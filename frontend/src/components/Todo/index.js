import React, {useState, useEffect} from "react";
import axios from '../../axios'
import Form from "../Form";
import TodoList from "../TodoList";
import Key from "../Key";
import "./styles.css";

function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    // console.log(input, "input")

    const fetchData = async () => {
        try {
            const response = await axios.get('/todos')
            setTodos(response.data);
            
        } catch (err) {
            console.log(err.message);
            
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

const addTodo = async (e)=>{
    e.preventDefault();
    if(input.length == 0) return null;
    await axios.post("/todos", [{
        ...todos, 
        text: input,
        completed: false
    },]);
    fetchData();
    setInput('');
    console.log("addedTodo");
}

    console.log(todos, "todos");

    


  return (
    <div className="todos">
        <h2>What are your plans for today?</h2>
      <Form input = {input} setInput= {setInput} addTodo={addTodo}/>
      <h3>Here's what you said you would do:</h3>
      
      <TodoList todos = {todos} fetchData={fetchData}/>
      <Key />
    </div>
  );
}

export default Todo;

