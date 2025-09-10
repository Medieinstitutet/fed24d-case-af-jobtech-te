import { Outlet } from 'react-router'
import { FooterWrap, MainWrap, PageWrap, Typography } from '../components/styled/LayoutWrappers'
import { Header } from '../components/fixtures/Header'

export const PageLayout = () => {
  return (
    <Typography>
      <PageWrap
      >
        <Header />
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