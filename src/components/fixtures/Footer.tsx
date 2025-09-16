import { Link } from "react-router-dom";
import { FooterOuter, FooterInner, Brand, FooterNav, Muted } from "../styled/footerStyle";

type Props = {
  bg?: string;
  border?: string;
  padding?: string;
};

export function Footer({ bg, border, padding }: Props) {
  const year = new Date().getFullYear();

  return (
    <FooterOuter $bg={bg} $border={border} $p={padding}>
      <FooterInner>
        <Brand>JobbCentralen</Brand>

        <FooterNav>
          <Link to="/about">Om oss</Link>
          <Link to="/jobs">Lediga jobb</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/privacy">Integritet</Link>
        </FooterNav>

        <Muted>© {year} JobbCentralen</Muted>
      </FooterInner>
    </FooterOuter>
  );
}
