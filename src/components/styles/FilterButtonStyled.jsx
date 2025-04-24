import styled, { css } from "styled-components";

export const FilterButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-dark-grayish-blue);
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  ${({ $selected }) =>
    $selected &&
    css`
      color: var(--color-bright-blue);
    `}
`;
