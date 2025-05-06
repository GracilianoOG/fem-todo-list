import styled from "styled-components";
import { box, round } from "../../theme/commonStyles";

export const TodoPanelStyled = styled.div`
  ${box}
  ${round}
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.listBg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
  left: 0;
  position: absolute;
  width: 100%;
  bottom: -3.875rem;

  @media screen and (min-width: 48rem) {
    box-shadow: none;
    background-color: transparent;
    bottom: initial;
    left: 50%;
    padding: 0;
    transform: translateX(-50%);
    width: auto;
  }
`;
