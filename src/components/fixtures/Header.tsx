import { MobileNavigation } from "./MobileNav";
import { HeaderWrapper } from '../styled/LayoutWrappers';
import { DesktopNav, DesktopNavLink, DesktopNavList, DesktopNavItem } from '../styled/Header/DesktopNavigation';
import { HeaderBrandTitle, HeaderContent } from '../styled/Header/HeaderBaseStyle';
import { HeaderLogo } from './PageLogo';

/* ---- Header layout ---- */


export const Header = () => {

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderBrandTitle>
          <HeaderLogo />
        </HeaderBrandTitle>
        <DesktopNav aria-label="Huvudnavigering">
          <DesktopNavList>
            <DesktopNavItem>
              <DesktopNavLink to={"/"}>Hem</DesktopNavLink>
            </DesktopNavItem>
            <DesktopNavItem>
              <DesktopNavLink to={"/jobs"}>
                Jobb
              </DesktopNavLink>
            </DesktopNavItem>
          </DesktopNavList>
        </DesktopNav>
        <MobileNavigation />
      </HeaderContent>
    </HeaderWrapper>
  );
};
