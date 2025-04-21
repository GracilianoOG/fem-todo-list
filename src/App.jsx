import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoPanel from "./components/TodoPanel";

const App = () => {
  return (
    <>
      <Header />
      <TodoList />
      <TodoPanel />
    </>
  );
};

export default App;
