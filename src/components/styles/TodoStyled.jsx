import styled, { css } from "styled-components";
import { box } from "../../theme/commonStyles";

export const TodoTextStyled = styled.p`
  cursor: pointer;
  flex: 1;
  font-size: 12px;
  transition: color 0.25s;

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
  height: var(--btn-size);
  transition: opacity 0.25s;
  width: var(--btn-size);

  @media screen and (min-width: 768px) {
    --btn-size: auto;
  }

  @media screen and (min-width: 992px) {
    opacity: 0;
  }
`;

export const TodoDeleteIconStyled = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
`;

export const TodoStyled = styled.li`
  ${box}
  border-bottom: 1px solid ${({ theme }) => theme.colors.todoBorder};

  @media screen and (min-width: 992px) {
    &:hover ${TodoDeleteStyled} {
      opacity: 1;
    }
  }
`;
