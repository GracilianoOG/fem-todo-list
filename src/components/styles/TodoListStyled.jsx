import styled, { css } from "styled-components";
import { round } from "../../theme/commonStyles";

const commonStyles = css`
  color: ${({ theme }) => theme.colors.listText};
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TodoListStyled = styled.div`
  ${round}
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.listBg};
  margin: -27px auto 16px;
  z-index: 999;

  @media screen and (min-width: 768px) {
    margin-top: -54px;
  }
`;

export const TodoListFooterStyled = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`;

export const TodoListLeftStyled = styled.p`
  ${commonStyles}
`;

export const TodoListClearStyled = styled.button`
  min-height: 20px;
  transition: color 0.2s;
  ${commonStyles}

  &:hover {
    color: ${({ theme }) => theme.colors.filterBtnHover};
  }
`;
