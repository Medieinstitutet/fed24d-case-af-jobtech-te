import { Outlet } from 'react-router'

export const PageLayout = () => {
  return (
    <>
      <header>
        <p>header content</p>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>footer content</p>
      </footer>

    </>
  )
}