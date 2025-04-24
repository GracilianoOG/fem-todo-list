import styled from "styled-components";
import bgImageMobile from "../../assets/images/bg-mobile-light.jpg";
import bgImageDesktop from "../../assets/images/bg-desktop-light.jpg";

export const HeaderStyled = styled.header`
  background-image: url("${bgImageMobile}");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 170px;
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    background-image: url("${bgImageDesktop}");
    min-height: 300px;
    padding-top: 76px;
  }
`;

export const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const HeaderTitleStyled = styled.h1`
  color: var(--color-very-light-gray);
  font-size: 27px;
  letter-spacing: 10px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 18px;
  }
`;
