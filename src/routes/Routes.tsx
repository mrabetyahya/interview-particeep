import { Navigate, useRoutes } from 'react-router-dom';
import { RouteIdEnum } from '../config/enums/routes.enum';
import MoviesPage from '../pages/MoviesPage';
import RouteObject from '../types/interfaces/RouteObject';
import Movies from '../features/movies/Movies';

function Router() {
  const routes: RouteObject[] = [
    { path: RouteIdEnum.Root, element: <Navigate to={RouteIdEnum.Movies} /> },
    {
      path: RouteIdEnum.Movies,
      element: <MoviesPage />,
      children: [{ path: RouteIdEnum.Root, element: <Movies /> }],
    },
  ];
  return useRoutes(routes);
}

export default Router;
