import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import type { RouteModel } from '@app/models/types/routeModel';
import { rootRoutes } from '@app/routing/rootRoutes';
import { rootPaths } from '@shared/models/constants/rootPaths';

export const AppRouter = () => {
    const renderRoutes = (routes: RouteModel[]) => {
        return routes.map(({ path, element: Element, children }) => {
            if (children && children.length > 0) {
                return (
                  <Route
                    key={path || 'layout'}
                    path={path}
                    element={Element ? <Element /> : <Navigate to={rootPaths.INDEX} replace />}
                  >
                    {renderRoutes(children)}
                  </Route>
                );
            }

            return (
              <Route
                key={path || 'redirect'}
                path={path}
                element={Element ? <Element /> : <Navigate to={rootPaths.INDEX} replace />}
              />
            );
        });
    };

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            {renderRoutes(rootRoutes)}
            <Route path="*" element={<Navigate to={rootPaths.INDEX} replace />} />
          </Routes>
        </Suspense>
    );
};
