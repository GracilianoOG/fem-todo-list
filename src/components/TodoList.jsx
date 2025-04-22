import Todo from "./Todo";
import TodoPanel from "./TodoPanel";

const TodoList = () => {
  return (
    <div className="todo-list container round">
      <ul>
        <Todo text="Complete online JavaScript course" />
        <Todo text="Jog around the park 3x" />
        <Todo text="10 minutes meditation" />
        <Todo text="Read for 1 hour" />
        <Todo text="Pickup groceries" />
        <Todo text="Complete Todo App on Frontend Mentor" />
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
