import styled, { css } from "styled-components";

export const FilterButtonStyled = styled.button`
  color: ${({ theme }) => theme.colors.filterBtn};
  font-size: 14px;
  font-weight: 700;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.filterBtnHover};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      color: ${({ theme }) => theme.colors.filterBtnSelected};
    `}
`;
