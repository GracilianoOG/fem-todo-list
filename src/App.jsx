import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoContext from "./context/TodoContext";
import { GlobalStyled } from "./components/styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/themes";
import DarkModeContext from "./context/DarkModeContext";
import { useDarkMode } from "./hooks/useDarkMode";
import { useTodos } from "./hooks/useTodos";
import { MainStyled } from "./components/styles/MainStyled";
import { DndInfoStyled } from "./components/styles/DndInfoStyled";

const App = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <TodoContext.Provider value={{ ...useTodos() }}>
        <GlobalStyled />
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
          <Header />
        </DarkModeContext.Provider>
        <MainStyled className="container">
          <TodoList />
          <DndInfoStyled>Drag and drop to reorder list</DndInfoStyled>
        </MainStyled>
      </TodoContext.Provider>
    </ThemeProvider>
  );
};

export default App;
