import { HeaderStyled, HeaderTitleStyled } from "./styles/HeaderStyled";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTitleStyled>Todo</HeaderTitleStyled>
      <ThemeSwitcher />
    </HeaderStyled>
  );
};

export default Header;
