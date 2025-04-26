import styled from "styled-components";

export const TodoPanelStyled = styled.div`
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.listBg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  left: 0;
  position: absolute;
  width: 100%;
  bottom: -62px;

  @media screen and (min-width: 768px) {
    box-shadow: none;
    bottom: initial;
    left: 50%;
    padding: 0;
    transform: translateX(-50%);
    width: auto;
  }
`;
