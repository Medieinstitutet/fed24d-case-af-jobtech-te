import styled from "styled-components";

type FooterOuterProps = {
  $bg?: string;
  $p?: string;
};

export const FooterOuter = styled.footer<FooterOuterProps>`
  width: 100%;
  background: ${({ $bg }) => $bg ?? "var(--footer-bg)"};
  padding: ${({ $p }) => $p ?? "1rem 2rem"};
  color: var(--digi--color--text--default);
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  text-align: center;

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    gap: 1rem;
  }
`;

export const Brand = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: var(--digi--color--text--strong);
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: var(--digi--color--text--link);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    color: var(--digi--color--text--link-hover);
  }
`;

export const Muted = styled.small`
  color: var(--digi--color--text--subtle);
`;
