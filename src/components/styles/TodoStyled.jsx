import styled, { css } from "styled-components";
import { box } from "../../theme/commonStyles";

export const TodoStyled = styled.li`
  ${box}
  border-bottom: 1px solid ${({ theme }) => theme.colors.todoBorder};
`;

export const TodoTextStyled = styled.p`
  flex: 1;
  font-size: 12px;

  ${({ $crossed }) =>
    $crossed &&
    css`
      color: ${({ theme }) => theme.colors.todoCrossed};
      text-decoration: line-through;
    `}

  @media screen and (min-width: 768px) {
    font-size: 17.6px;
  }
`;

export const TodoDeleteStyled = styled.button`
  --btn-size: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: var(--btn-size);
  width: var(--btn-size);

  @media screen and (min-width: 768px) {
    --btn-size: auto;
  }
`;

export const TodoDeleteIconStyled = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
`;
