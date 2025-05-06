import styled, { css, keyframes } from "styled-components";
import check from "../../assets/icons/icon-check.svg";

const commonStyles = css`
  background-clip: content-box, border-box;
  border-color: transparent;
  background-origin: border-box;
`;

const commonSelectedStyles = css`
  background-image: url("${check}"),
    ${({ theme }) => theme.colors.buttonGradient};
`;

const spin = keyframes`
  100% { transform: rotate(360deg); }
`;

export const ButtonStyled = styled.button`
  --btn-size: 1.25rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  height: var(--btn-size);
  margin-right: 0.625rem;
  width: var(--btn-size);
  transition: border-color 0.15s;

  &:hover {
    animation: ${spin} 1s infinite linear;
    background-image: ${({ theme }) => theme.colors.buttonBgHover},
      ${({ theme }) => theme.colors.buttonGradient};
    ${commonStyles}
  }

  @media screen and (min-width: 48rem) {
    --btn-size: 1.5rem;
    margin-right: 1.5rem;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background-repeat: no-repeat;
      background-position: center;
      ${commonStyles}
      ${commonSelectedStyles}

      &:hover {
        animation: none;
        ${commonSelectedStyles}
      }
    `}
`;
