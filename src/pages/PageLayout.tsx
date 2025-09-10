import { Outlet } from 'react-router'
import { FooterWrap, HeaderWrapper, MainWrap, PageWrap, Typography } from '../components/styled/LayoutWrappers'

export const PageLayout = () => {
  return (
    <Typography>
      <PageWrap
      >
        <HeaderWrapper>
          <p>HeaderContent</p>
        </HeaderWrapper>
        <MainWrap>
          <Outlet />
        </MainWrap>
        <FooterWrap>
          <p>FooterContent</p>
        </FooterWrap>
      </PageWrap >
    </Typography>
  )
}