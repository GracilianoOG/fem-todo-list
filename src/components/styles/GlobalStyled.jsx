import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root {
  /* Primary Colors */
  --color-bright-blue: hsl(220, 98%, 61%);
  --color-check-background: linear-gradient(
    135deg,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );

  /* Neutral Colors - Light Theme */
  --color-very-light-gray: hsl(0, 0%, 98%);
  --color-very-light-grayish-blue: hsl(236, 33%, 92%);
  --color-light-grayish-blue: hsl(233, 11%, 84%);
  --color-dark-grayish-blue: hsl(236, 9%, 61%);
  --color-very-dark-grayish-blue: hsl(235, 19%, 35%);

  /* Neutral Colors - Dark Theme */
  --color-very-dark-blue: hsl(235, 21%, 11%);
  --color-very-dark-desaturated-blue: hsl(235, 24%, 19%);
  --color-light-grayish-blue-dark: hsl(234, 39%, 85%);
  --color-light-grayish-blue-hover: hsl(236, 33%, 92%);
  --color-dark-grayish-blue-dark: hsl(234, 11%, 52%);
  --color-very-dark-grayish-blue-dark: hsl(233, 14%, 35%);
  --color-very-dark-grayish-blue-deep: hsl(237, 14%, 26%);
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
}

body {
  background-color: var(--color-very-light-gray);
  color: var(--color-very-dark-grayish-blue);
}

.box {
  align-items: center;
  display: flex;
  padding: 16px 20px;
}

.round {
  border-radius: 6px;
}

.theme-switcher {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.theme-switcher__icon {
  width: 20px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: min(88%, 540px);
}

@media screen and (min-width: 768px) {
  .box {
    padding: 20px 24px;
  }
}
`;
