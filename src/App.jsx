import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <Header />
      <TodoList />
      <div className="todo-panel todo round">
        <button className="todo-panel__btn">All</button>
        <button className="todo-panel__btn">Active</button>
        <button className="todo-panel__btn">Completed</button>
      </div>
    </>
  );
};

export default App;
