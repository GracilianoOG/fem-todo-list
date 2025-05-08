import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { GlobalStyled } from "./components/styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/themes";
import DarkModeContext from "./context/DarkModeContext";
import { useDarkMode } from "./hooks/useDarkMode";
import { MainStyled } from "./components/styles/MainStyled";
import { DndInfoStyled } from "./components/styles/DndInfoStyled";
import Footer from "./components/Footer";
import TodoProvider from "./providers/TodoProvider";

const App = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyled />
      <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
        <Header />
      </DarkModeContext.Provider>
      <MainStyled>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
        <DndInfoStyled>Drag and drop to reorder list</DndInfoStyled>
      </MainStyled>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
