import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  });

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme !== "light", toggleDarkMode];
};
