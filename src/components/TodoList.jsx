import React from 'react'
import './TodoList.css'
import TodoApp from './TodoApp'
import Child2 from './Child2'

export default function TodoList() {
  return (
    <div className='container'>
      <div className="parent custom-parent-border">
        <div className="child1 custom-child-border m-2">
            <TodoApp></TodoApp>
        </div>
        <div className="child2 custom-child-border m-2">
            <Child2></Child2>
        </div>
      </div>
    </div>
  )
}
