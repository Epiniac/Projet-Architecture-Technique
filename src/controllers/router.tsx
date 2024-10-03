import { createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root.page';
import ErrorPage from './pages/Error.page';
import SandboxPage from './pages/Sandbox.page';

const schema = {
  root: {
    path: '/',
    name: 'Root',
  }, 
  sandbox: {
    path: '/sandbox',
    name: 'Sandbox',
  }
} as const;

type TRoutes =  typeof schema;
export const routes: TRoutes = schema;

const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <RootPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: routes.sandbox.path,
    element: <SandboxPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

export default router;

// {
//   path: routes.parametre.path,
//   element: <ParametrePage />,
//   errorElement: <ErrorPage/>,
//   children: [
//     { index: true, element: <IndexParametrePage /> },
//     {
//       path: routes.parametre.children.hello.path,
//       element: <Hello />,
//     },
//   ],
// },