import styled from "styled-components";
import { box, round } from "../../theme/commonStyles";

export const TodoEntryStyled = styled.form`
  ${box}
  ${round}
  background-color: ${({ theme }) => theme.colors.inputBg};
  margin-bottom: 1rem;
  padding: 0.875rem 1.25rem;

  @media screen and (min-width: 48rem) {
    margin-bottom: 1.438rem;
    padding: 1.25rem 1.5rem;
  }
`;

export const TodoEntryInputStyled = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.input};
  flex: 1;
  font-size: 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  @media screen and (min-width: 48rem) {
    font-size: 1.1rem;
  }
`;
