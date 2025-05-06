import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-image: url("${({ theme }) => theme.images.headerMobile}");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  padding: 45px 0;

  @media screen and (min-width: 768px) {
    background-image: url("${({ theme }) => theme.images.headerDesktop}");
    min-height: 300px;
    padding-top: 76px;
  }
`;

export const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const HeaderTitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.headerTitle};
  font-size: 27px;
  letter-spacing: 10px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 39px;
    letter-spacing: 16px;
  }
`;
