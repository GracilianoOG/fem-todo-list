import styled, { css } from "styled-components";

export const FilterButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.filterBtn};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.filterBtnHover};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      color: ${({ theme }) => theme.colors.filterBtnSelected};
    `}
`;
