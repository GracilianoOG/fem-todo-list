import styled from "styled-components";

export const ThemeSwitcherStyled = styled.button`
  --btn-size: 1.25rem;
  height: var(--btn-size);
  width: var(--btn-size);

  @media screen and (min-width: 48rem) {
    --btn-size: auto;
  }
`;

export const ThemeSwitcherIconStyled = styled.img`
  width: 100%;
`;
