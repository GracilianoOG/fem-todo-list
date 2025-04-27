import styled from "styled-components";

export const ThemeSwitcherStyled = styled.button`
  --btn-size: 20px;
  height: var(--btn-size);
  width: var(--btn-size);

  @media screen and (min-width: 768px) {
    --btn-size: auto;
  }
`;

export const ThemeSwitcherIconStyled = styled.img`
  width: 100%;
`;
