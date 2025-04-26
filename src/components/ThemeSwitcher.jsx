import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import moon from "../assets/icons/icon-moon.svg";
import sun from "../assets/icons/icon-sun.svg";
import {
  ThemeSwitcherIconStyled,
  ThemeSwitcherStyled,
} from "./styles/ThemeSwitcherStyled";

const ThemeSwitcher = () => {
  const { isDark, setIsDark } = useContext(DarkModeContext);

  return (
    <ThemeSwitcherStyled onClick={() => setIsDark(!isDark)}>
      <ThemeSwitcherIconStyled src={!isDark ? moon : sun} alt="" />
    </ThemeSwitcherStyled>
  );
};

export default ThemeSwitcher;
