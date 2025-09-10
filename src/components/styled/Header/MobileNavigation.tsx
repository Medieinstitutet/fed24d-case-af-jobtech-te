import styled from 'styled-components';

export const MobileNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  @media (min-width: 768px) {
    display: none;
  }
`;


export const MobileNavSidebarWrap = styled.div`
  & .digi-navigation-sidebar__header {
    height: 100px;
  }

  & a{
    padding-left: 1rem;
    border:2px solid red;
  }
`;

export const MobileNavMenuList = styled.ul`

  margin: 0;
  padding: 0.5rem 0 0 3rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
  min-height: 100dvh;

`;
export const MobileNavMenuItem = styled.li`
 list-style: none;
`;