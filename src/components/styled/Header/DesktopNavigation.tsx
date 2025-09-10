import styled from 'styled-components';

import { NavLink, Link } from 'react-router';

export const DesktopNav = styled.nav`
  display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content:end;
      flex: 1;
      height: 100%;
    }
`;

export const DesktopNavList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  gap: var(--digi--gutter--largest);
`;

export const DesktopNavItem = styled.li`
list-style: none;
`;


export const DesktopNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 48px; 
  min-width: 48px;
  padding:0 1rem;
  text-decoration: none;
  color: var(--digi--grayscale-900);
 font-size: var(--digi--navigation-vertical-menu-item--font-size);

  &:active{
    text-decoration: none;
   color: var(--digi--grayscale-900);
  }

  &:hover {
   color: var(--digi--grayscale-900);
    background-color: var(--digi--print--color--background--profile-green--base-10);
            color: var(--digi--grayscale-900);
             text-decoration: none;
  }

  &:visited{
       color: var(--digi--grayscale-900);
        text-decoration: none;
  }

  &.active,
  &[aria-current="page"] {
    border-bottom:var(--digi--navigation-vertical-menu-item--active-indicator-width) solid var(--digi--color--border--tertiary);
    font-weight: var(--digi--typography--vertical-menu-level-1--font-weight--desktop);
    color: var(--digi--grayscale-900);
    text-decoration: none;
    align-items: end;
    padding:0 1rem 0.45rem 1rem;
  } 

`;

export const DesktopLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 48px; 
  min-width: 48px;
  padding: 0 1rem;
  text-decoration: none;
  color: var(--digi--grayscale-900);


  &:active{
    text-decoration: none;
   color: var(--digi--grayscale-900);
  }

  &:hover {
   color: var(--digi--grayscale-900);
    background-color: var(--digi--print--color--background--profile-green--base-10);

                    text-decoration: none;
  }

  &:visited{
       color: var(--digi--grayscale-900);
        text-decoration: none;
  }

  &.active,
  &[aria-current="page"] {
      border-bottom:var(--digi--navigation-vertical-menu-item--active-indicator-width) solid var(--digi--color--border--tertiary);
      background-color: var(--digi--print--color--background--profile-green--base-10);
      font-weight: var(--digi--typography--vertical-menu-level-1--font-weight--desktop);
        color: var(--digi--grayscale-900);
        text-decoration: none;
  } 

`;