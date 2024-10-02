import { createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root.page';
import ErrorPage from './pages/Error.page';

const schema = {
  root: {
    path: '/',
    name: 'Root',
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