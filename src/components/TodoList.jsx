import React, { useState } from 'react'
import './TodoList.css'
import TodoApp from './TodoApp'
import Child2 from './Child2'

export default function TodoList() {

    const [tasks, setTasks] = useState([])

    const handleOnAdd = (TodoData) => {
        // console.log(TodoData);
        if (TodoData.trim() != ''){ 
            const newTask = {
                id: crypto.randomUUID(),
                text: TodoData,
                completed: false
            };
            setTasks([...tasks, newTask]);
        }
    }

    const handleOnTodoDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleOnTodoComplete = (id) => {
        setTasks(tasks.map((item) => 
            item.id === id ? {...item, completed: !item.completed} : item
    ))}
  return (
    <div className='container mt-5'>
      <div className="parent custom-parent-border">
        {/* here is the first child */}
        <div className="child1 custom-child-border m-2">
            <TodoApp onAddClick={handleOnAdd}></TodoApp>
        </div>
        {/* here is the second child */}
        <div className="child2 custom-child-border m-2">
            <Child2 
            tasks={tasks}
            onTodoDelete={handleOnTodoDelete}
            onTodoComplete={handleOnTodoComplete}
            ></Child2>
        </div>
      </div>
    </div>
  )
}
