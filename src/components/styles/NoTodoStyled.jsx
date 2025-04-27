import styled from "styled-components";
import { box } from "../../theme/commonStyles";

export const NoTodo = styled.p`
  ${box}
  justify-content: center;
  font-size: 16px;
  padding: 22px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 28px;
  }
`;
