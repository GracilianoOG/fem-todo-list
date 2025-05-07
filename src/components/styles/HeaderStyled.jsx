import styled from "styled-components";

export const HeaderStyled = styled.header`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  min-height: var(--header-min-height);
  padding-top: 2.813rem;

  @media screen and (min-width: 48rem) {
    padding-top: 4.75rem;
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
