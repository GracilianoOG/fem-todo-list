import styled from "styled-components";

export const ThemeSwitcherStyled = styled.button`
  --btn-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: var(--btn-size);
  width: var(--btn-size);

  @media screen and (min-width: 768px) {
    --btn-size: auto;
  }
`;

export const ThemeSwitcherIconStyled = styled.img`
  width: 100%;
`;
