// React imports
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

// Design system imports
import {
    DigiNavigationSidebar,
    DigiNavigationSidebarButton,
    DigiNavigationVerticalMenu,
    DigiNavigationVerticalMenuItem,
} from "@digi/arbetsformedlingen-react";
import {
    NavigationSidebarCloseButtonPosition,
    NavigationSidebarMobileVariation,
    NavigationSidebarPosition,
    NavigationSidebarVariation,
    NavigationVerticalMenuVariation,
} from "@digi/arbetsformedlingen";

// Styled-components imports
import {
    MobileNav,
    MobileNavSidebarWrap,
    MobileNavMenuList,
    MobileNavMenuItem,
} from "../styled/Header/MobileNavigation";

/**
 * MobileNavigation
 * Mobile sidebar menu using Digi components.
 * - Opens with DigiNavigationSidebarButton
 * - SPA navigation via useNavigate
 * - Highlights active item based on current path
 */
export const MobileNavigation = () => {
    // Sidebar open/close state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Router hooks
    const location = useLocation();
    const navigate = useNavigate();

    // Active route flags
    const isHome = location.pathname === "/";
    const isJobs = location.pathname === "/jobs";

    // Open sidebar
    const openMenu = () => {
        if (!isMenuOpen) setIsMenuOpen(true);
    };

    // Close sidebar
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Navigate home and close
    const navigateToHome = () => {
        navigate("/");
        setIsMenuOpen(false);
    };

    // Navigate jobs and close
    const navigateToJobs = () => {
        navigate("/jobs");
        setIsMenuOpen(false);
    };

    return (
        <MobileNav>
            <DigiNavigationSidebarButton
                afText="Meny"
                afAriaLabel="Open menu"
                onAfOnToggle={openMenu}
            />

            <MobileNavSidebarWrap>
                <DigiNavigationSidebar
                    afActive={isMenuOpen}
                    afStickyHeader={true}
                    afBackdrop={true}
                    afPosition={NavigationSidebarPosition.END}
                    afVariation={NavigationSidebarVariation.OVER}
                    afMobileVariation={NavigationSidebarMobileVariation.FULLWIDTH}
                    afCloseButtonText="Close"
                    afCloseButtonAriaLabel="Close menu"
                    afCloseButtonPosition={NavigationSidebarCloseButtonPosition.END}
                    afHeading="Brandname"
                    onAfOnClose={closeMenu}
                    onAfOnEsc={closeMenu}
                    onAfOnBackdropClick={closeMenu}
                >

                    <DigiNavigationVerticalMenu
                        afVariation={NavigationVerticalMenuVariation.SECONDARY}
                    >
                        <MobileNavMenuList>
                            <MobileNavMenuItem>
                                <DigiNavigationVerticalMenuItem
                                    afText="Home"
                                    afHref="/"
                                    afOverrideLink
                                    afActive={isHome}
                                    afAriaCurrent={isHome ? "page" : undefined}
                                    onAfOnClick={navigateToHome}
                                />
                            </MobileNavMenuItem>

                            <MobileNavMenuItem>
                                <DigiNavigationVerticalMenuItem
                                    afText="Jobs"
                                    afHref="/jobs"
                                    afOverrideLink
                                    afActive={isJobs}
                                    afAriaCurrent={isJobs ? "page" : undefined}
                                    onAfOnClick={navigateToJobs}
                                />
                            </MobileNavMenuItem>
                        </MobileNavMenuList>
                    </DigiNavigationVerticalMenu>
                </DigiNavigationSidebar>
            </MobileNavSidebarWrap>
        </MobileNav>
    );
};
