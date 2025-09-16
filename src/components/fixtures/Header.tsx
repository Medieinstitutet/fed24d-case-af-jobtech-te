import { MobileNavigation } from "./MobileNav";
import { HeaderWrapper } from '../styled/LayoutWrappers';
import { DesktopNav, DesktopNavLink, DesktopLink, DesktopNavList, DesktopNavItem } from '../styled/Header/DesktopNavigation';
import { HeaderBrandTitle, HeaderContent } from '../styled/Header/HeaderBaseStyle';

/* ---- Header layout ---- */


export const Header = () => {

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderBrandTitle>
          <DesktopLink to="/"> <img src="src/components/logo-blue.png" alt="Brand Logo" /></DesktopLink>
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
