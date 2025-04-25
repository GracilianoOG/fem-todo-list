import styled, { css } from "styled-components";
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

export const ButtonStyled = styled.button`
  --btn-size: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  background-color: transparent;
  cursor: pointer;
  height: var(--btn-size);
  margin-right: 10px;
  width: var(--btn-size);

  &:hover {
    background-image: linear-gradient(#fff, #fff),
      ${({ theme }) => theme.colors.buttonGradient};
    ${commonStyles}
  }

  @media screen and (min-width: 768px) {
    --btn-size: 24px;
    margin-right: 24px;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background-repeat: no-repeat;
      background-position: center;
      ${commonStyles}
      ${commonSelectedStyles}

      &:hover {
        ${commonSelectedStyles}
      }
    `}
`;
