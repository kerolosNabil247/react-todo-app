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
  return (
    <div className='container'>
      <div className="parent custom-parent-border">
        {/* here is the first child */}
        <div className="child1 custom-child-border m-2">
            <TodoApp onAddClick={handleOnAdd}></TodoApp>
        </div>
        {/* here is the second child */}
        <div className="child2 custom-child-border m-2">
            <Child2></Child2>
        </div>
      </div>
    </div>
  )
}
