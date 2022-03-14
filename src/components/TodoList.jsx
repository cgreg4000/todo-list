import React, {useState} from "react";

const TodoList = () => {
    
    let [todoInput, setTodoInput] = useState("")
    let [todoArray, setTodoArray] = useState([])
    let [completed, setCompleted] = useState(false)

    const todoHandler = (e) => {
        e.preventDefault();
        let newTodo = {todoInput, completed}
        setTodoArray([...todoArray, newTodo])
        setTodoInput("")
    }

    const deleteTodo = (i) => {
        let filteredTodoArray = todoArray.filter((item, index)=>{
            return index!=i;
        })
        setTodoArray(filteredTodoArray)
    }

    const taskCompleted = (i) => {
        let copyOfTodoArray = [...todoArray]
        copyOfTodoArray[i].completed = !copyOfTodoArray[i].completed
        setTodoArray(copyOfTodoArray)
    }
    
    return(
        <>
            <h1 className="mb-3">Todo List</h1>

            <form className="form-group" onSubmit={todoHandler}>
                <input className="form-control" type="text" onChange={(e) => setTodoInput(e.target.value)} value={todoInput}/>
                <input className="btn btn-primary mt-3 mb-3 float-start" type="submit" value="Add" />
            </form>
            
            {
                todoArray.map( (item, i) => {
                    return <div className="flex mb-3" key={i}>
                        <div className="flex-2">
                            <input type="checkbox" onChange={()=>taskCompleted(i)} checked={todoArray[i].completed}/>
                            <p style={{ textDecoration: item.completed ? "line-through" : ""}}>{item.todoInput}</p>
                            
                        </div>
                        
                        <button onClick={() => deleteTodo(i)} className="btn btn-dark">Delete</button>
                    </div>
                    
                })
            }

        </>
    )
}

export default TodoList