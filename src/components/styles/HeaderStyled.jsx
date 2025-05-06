import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-image: url("${({ theme }) => theme.images.headerMobile}");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 12.5rem;
  padding-top: 2.813rem;

  @media screen and (min-width: 48rem) {
    background-image: url("${({ theme }) => theme.images.headerDesktop}");
    min-height: 18.75rem;
    padding-top: 4.75rem;
  }
`;

export const HeaderContentStyled = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.875rem;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2.25rem;
  }
`;

export const HeaderTitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.headerTitle};
  font-size: 1.688rem;
  letter-spacing: 0.625rem;
  text-transform: uppercase;

  @media screen and (min-width: 48rem) {
    font-size: 2.438rem;
    letter-spacing: 1rem;
  }
`;
