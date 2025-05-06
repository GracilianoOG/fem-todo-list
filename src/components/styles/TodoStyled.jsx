import styled, { css } from "styled-components";
import { box } from "../../theme/commonStyles";

export const TodoTextStyled = styled.p`
  cursor: pointer;
  flex: 1;
  font-size: 0.75rem;
  transition: color 0.25s;

  ${({ $crossed }) =>
    $crossed &&
    css`
      color: ${({ theme }) => theme.colors.todoCrossed};
      text-decoration: line-through;
    `}

  @media screen and (min-width: 48rem) {
    font-size: 1.1rem;
  }
`;

export const TodoDeleteStyled = styled.button`
  --btn-size: 0.75rem;
  height: var(--btn-size);
  transition: opacity 0.25s;
  width: var(--btn-size);

  &:focus-visible {
    opacity: 1;
  }

  @media screen and (min-width: 48rem) {
    --btn-size: auto;
  }

  @media screen and (min-width: 62rem) {
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
  position: relative;

  ${({ $isDragOver }) =>
    $isDragOver &&
    css`
      &::before {
        align-items: center;
        border: 2px dashed cyan;
        background-color: ${({ theme }) => theme.colors.listBg};
        content: "Drop here";
        display: flex;
        height: 100%;
        inset: 0;
        justify-content: center;
        position: absolute;
        width: 100%;
      }
    `}

  @media screen and (min-width: 62rem) {
    &:hover ${TodoDeleteStyled} {
      opacity: 1;
    }
  }
`;
