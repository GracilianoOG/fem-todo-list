import styled, { css } from "styled-components";
import { round } from "../../theme/commonStyles";

const commonStyles = css`
  color: ${({ theme }) => theme.colors.listText};
  font-size: 0.75rem;

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
  }
`;

export const TodoListStyled = styled.div`
  ${round}
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.listBg};
  margin: 0 auto 1rem;
`;

export const TodoListFooterStyled = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  position: relative;

  @media screen and (min-width: 48rem) {
    padding: 1rem 1.5rem;
  }
`;

export const TodoListLeftStyled = styled.p`
  ${commonStyles}
`;

export const TodoListClearStyled = styled.button`
  min-height: 1.25rem;
  transition: color 0.2s;
  ${commonStyles}

  &:hover {
    color: ${({ theme }) => theme.colors.filterBtnHover};
  }
`;
