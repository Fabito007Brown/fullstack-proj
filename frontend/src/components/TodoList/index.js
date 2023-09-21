import React from 'react'
import "./styles.css"
import axios from '../../axios'

function TodoList({todos, fetchData}){

    

    const updateTodo = async (id) =>{
        try {
            const response = await axios.put(`/todos/${id}`,{
                id
            })

            fetchData()
            return response.data.json
        } catch (error) {
            console.log(error.message)
            
        }
    };

    const deleteTodo = async (id) =>{
        try {
            const response = await axios.delete(`/todos/${id}`,{
                id
            })

            fetchData()
            return response.data.json
        } catch (error) {
            console.log(error.message)
            
        }
    };



    return(
        <div className='todoList'>
            {todos?.map((todo) =>(
                <div className='row' key={todo._id}>
                    <p onClick={() => updateTodo(todo._id)} isCompleted={todo.completed === true} className='text'>{todo.text}</p>
                    <p className='delete' onClick={() => deleteTodo(todo._id)}>X</p>
                </div>
            ))}
        </div>
    )
}

export default TodoList