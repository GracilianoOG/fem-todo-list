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
  --color-white: #fff;

  /* Neutral Colors - Light Theme */
  --color-very-light-gray: hsl(0, 0%, 98%);
  --color-very-light-grayish-blue: hsl(236, 33%, 92%);
  --color-light-grayish-blue: hsl(233, 11%, 84%);
  --color-dark-grayish-blue: hsl(236, 9%, 61%);
  --color-very-dark-grayish-blue: hsl(235, 19%, 35%);
  --color-btn-background: linear-gradient(var(--color-white), var(--color-white));

  /* Neutral Colors - Dark Theme */
  --color-very-dark-blue: hsl(235, 21%, 11%);
  --color-very-dark-desaturated-blue: hsl(235, 24%, 19%);
  --color-light-grayish-blue-dark: hsl(234, 39%, 85%);
  --color-light-grayish-blue-hover: hsl(236, 33%, 92%);
  --color-dark-grayish-blue-dark: hsl(234, 11%, 52%);
  --color-very-dark-grayish-blue-dark: hsl(233, 14%, 35%);
  --color-very-dark-grayish-blue-deep: hsl(237, 14%, 26%);
  --color-btn-background-dark: linear-gradient(var(--color-very-dark-desaturated-blue), 
    var(--color-very-dark-desaturated-blue));
  
  /* Measurements */
  --header-min-height: 12.5rem;
  --todo-gap: 0.625rem;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
}

*:focus-visible {
  outline: 2px dotted ${({ theme }) => theme.colors.outline};
  outline-offset: 4px;
}

#root {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  width: min(88%, 33.75rem);
}

body {
  background-color: ${({ theme }) => theme.colors.bodyBgColor};
  color: ${({ theme }) => theme.colors.bodyColor};

  &::before {
    background-image: url("${({ theme }) => theme.images.headerMobile}");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    height: var(--header-min-height);
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 48rem) {
  body::before {
    background-image: url("${({ theme }) => theme.images.headerDesktop}");
  }

  :root {
    --header-min-height: 18.75rem;
    --todo-gap: 1.5rem;
  }
}
`;
