import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import NavBar from './NavBar';
import Sewing from './Page/Sewing';
import NoSewing from './Page/NoSewing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { index: true, element: <Sewing /> },
      {
        path: 'non',
        element: <NoSewing />,
      },
    ],
  },
  { path: '*', element: <Navigate to='/' /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
