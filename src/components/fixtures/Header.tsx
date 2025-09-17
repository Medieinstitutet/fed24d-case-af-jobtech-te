import { MobileNavigation } from "./MobileNav";
import { HeaderWrapper } from '../styled/global/LayoutWrappers';
import { DesktopNav, DesktopNavLink, DesktopNavList, DesktopNavItem } from '../styled/fixtures/DesktopNavigation';
import { HeaderBrandTitle, HeaderContent } from '../styled/fixtures/HeaderBaseStyle';
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
