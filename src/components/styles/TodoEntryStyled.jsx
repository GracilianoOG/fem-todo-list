import styled from "styled-components";
import { box, round } from "../../theme/commonStyles";

export const TodoEntryStyled = styled.form`
  ${box}
  ${round}
  background-color: ${({ theme }) => theme.colors.inputBg};
  padding: 14px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`;

export const TodoEntryInputStyled = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.input};
  flex: 1;
  font-size: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  @media screen and (min-width: 768px) {
    font-size: 17.6px;
  }
`;
