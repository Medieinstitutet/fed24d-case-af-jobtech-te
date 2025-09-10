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
          <DesktopLink to="/">BrandName</DesktopLink>
        </HeaderBrandTitle>
        <DesktopNav aria-label="Huvudnavigering">
          <DesktopNavList>
            <DesktopNavItem>
              <DesktopNavLink to={"/"}>Hem</DesktopNavLink>
            </DesktopNavItem>
            <DesktopNavItem>
              <DesktopNavLink to={"/jobs"} className={"digi-navigation-vertical-menu--secondary sc-digi-navigation-vertical-menu-item-h digi-navigation-vertical-menu-item__link--active sc-digi-navigation-vertical-menu-item "}>
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
