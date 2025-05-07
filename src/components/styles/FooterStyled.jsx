import styled from "styled-components";

export const FooterStyled = styled.footer`
  font-size: 0.856rem;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.footerLink};
  }
`;
