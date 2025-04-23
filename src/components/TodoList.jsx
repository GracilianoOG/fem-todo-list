import Todo from "./Todo";
import TodoPanel from "./TodoPanel";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list container round">
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} task={todo.task} />
        ))}
      </ul>
      <footer className="todo-list__footer">
        <p className="todo-list__completed">5 items left</p>
        <TodoPanel />
        <button className="todo-list__clear">Clear Completed</button>
      </footer>
    </div>
  );
};

export default TodoList;
