import styled, { css } from "styled-components";

export const TodoStyled = styled.li`
  border-bottom: 1px solid var(--color-very-light-grayish-blue);
`;

export const TodoTextStyled = styled.p`
  flex: 1;
  font-size: 12px;

  ${({ $crossed }) =>
    $crossed &&
    css`
      color: var(--color-light-grayish-blue);
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
`;

export const TodoDeleteIconStyled = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
`;
