import styled from "styled-components";

export const TodoEntryStyled = styled.div`
  background-color: #fff;
  padding: 14px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`;

export const TodoEntryInputStyled = styled.input`
  border: none;
  background-color: transparent;
  color: var(--color-very-dark-grayish-blue);
  flex: 1;
  font-size: 12px;

  &::placeholder {
    color: var(--color-dark-grayish-blue);
  }

  @media screen and (min-width: 768px) {
    font-size: 17.6px;
  }
`;
