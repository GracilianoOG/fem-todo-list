import {
  HeaderContentStyled,
  HeaderStyled,
  HeaderTitleStyled,
} from "./styles/HeaderStyled";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <HeaderStyled className="container">
      <HeaderContentStyled>
        <HeaderTitleStyled>Todo</HeaderTitleStyled>
        <ThemeSwitcher />
      </HeaderContentStyled>
    </HeaderStyled>
  );
};

export default Header;
