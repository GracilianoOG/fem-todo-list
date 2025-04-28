import { useLayoutEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = mode => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setMode(newTheme);
  };

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  return [theme !== "light", toggleDarkMode];
};
