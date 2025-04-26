import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import moon from "../assets/icons/icon-moon.svg";
import sun from "../assets/icons/icon-sun.svg";

const ThemeSwitcher = () => {
  const { isDark, setIsDark } = useContext(DarkModeContext);

  return (
    <button className="theme-switcher" onClick={() => setIsDark(!isDark)}>
      <img className="theme-switcher__icon" src={!isDark ? moon : sun} alt="" />
    </button>
  );
};

export default ThemeSwitcher;
