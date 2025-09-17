


import logoDark from "../../assets/logotype/logo-dark.png";
import logoLight from "../../assets/logotype/logo-light.png";
import { FooterLogoLink, HeaderLogoLink, LogoImg } from '../styled/Header/PageLogo';

export const HeaderLogo = () => {
  return (
    <HeaderLogoLink to="/" aria-label="Jobbcentralen – till startsidan">
      <LogoImg
        src={logoDark}
        alt="Jobbcentralen"
        width={400}
        height={74}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </HeaderLogoLink>
  );
};

export const FooterLogo = () => {
  return (
    <FooterLogoLink to="/" aria-label="Jobbcentralen – till startsidan">
      <LogoImg
        src={logoLight}
        alt="Jobbcentralen"
        width={400}
        height={74}
        loading="lazy"
        decoding="async"
      />
    </FooterLogoLink>
  );
};


