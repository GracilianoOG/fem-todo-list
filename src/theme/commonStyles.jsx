import { css } from "styled-components";

export const box = css`
  align-items: center;
  display: flex;
  padding: 1rem 1.25rem;

  @media screen and (min-width: 48rem) {
    padding: 1.25rem 1.5rem;
  }
`;

export const round = css`
  border-radius: 6px;
`;
