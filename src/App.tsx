import { RouterProvider } from 'react-router';
import { router } from './Router'
import { GlobalStyle } from './styles/GlobalStyle';
const App = () => {
  return <>
    <GlobalStyle />
    <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;