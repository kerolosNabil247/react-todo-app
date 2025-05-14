import TodoCard from "./TodoCard";

export default function Child2({tasks, onTodoDelete, onTodoComplete}) {

    
  return (
    <div className="m-2">
      <div className="row justify-content-center">
        <div className="col-6 text-secondary">
          <h2>Let's get some work done!</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {tasks.map((item) => (
            <TodoCard
            key={item.id}
            task={item}
            onDelete={onTodoDelete}
            onComolete={onTodoComplete}
            ></TodoCard>
        ))}
        {/* <TodoCard></TodoCard> */}
      </div>
      
    </div>
  );
}
