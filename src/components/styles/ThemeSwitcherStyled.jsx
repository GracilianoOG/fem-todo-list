import styled from "styled-components";

export const ThemeSwitcherStyled = styled.button`
  --btn-size: 1.25rem;
  height: var(--btn-size);
  transition: transform 0.25s;
  width: var(--btn-size);

  &:hover {
    transform: scale(1.15);
  }

  @media screen and (min-width: 48rem) {
    --btn-size: auto;
  }
`;

export const ThemeSwitcherIconStyled = styled.img`
  width: 100%;
`;
