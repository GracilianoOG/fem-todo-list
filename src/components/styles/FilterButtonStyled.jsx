import styled, { css } from "styled-components";

export const FilterButtonStyled = styled.button`
  color: ${({ theme }) => theme.colors.filterBtn};
  font-size: 0.875rem;
  font-weight: 700;
  transition: color 0.2s;
  text-transform: capitalize;

  &:hover {
    color: ${({ theme }) => theme.colors.filterBtnHover};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      color: ${({ theme }) => theme.colors.filterBtnSelected};
    `}
`;
