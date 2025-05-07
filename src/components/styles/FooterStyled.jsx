import styled from "styled-components";

export const FooterStyled = styled.footer`
  font-size: 0.856rem;
  padding: 0.75rem 0;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.footerLink};
  }
`;
