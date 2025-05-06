import styled from "styled-components";
import { box } from "../../theme/commonStyles";

export const NoTodo = styled.p`
  ${box}
  justify-content: center;
  font-size: 1rem;
  padding: 1.375rem;

  @media screen and (min-width: 48rem) {
    font-size: 1.375rem;
    padding: 1.75rem;
  }
`;
