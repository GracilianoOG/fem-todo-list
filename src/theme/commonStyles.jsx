import { css } from "styled-components";

export const box = css`
  align-items: center;
  display: flex;
  padding: 16px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`;

export const round = css`
  border-radius: 6px;
`;
