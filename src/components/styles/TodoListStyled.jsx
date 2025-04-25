import styled, { css } from "styled-components";

const commonStyles = css`
  color: ${({ theme }) => theme.colors.listText};
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TodoListStyled = styled.div`
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
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
`;

export const TodoListLeftStyled = styled.p`
  ${commonStyles}
`;

export const TodoListClearStyled = styled.button`
  border: none;
  background-color: transparent;
  min-height: 20px;
  ${commonStyles}
`;
