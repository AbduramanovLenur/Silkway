import { lazy } from 'react';

import type { RouteModel } from '@app/models/types/routeModel';

import MainLayout from '@app/ui/main-layout/MainLayout';
import { rootPaths } from '@shared/models/constants/rootPaths';

export const mainRoutes: RouteModel[] = [
    {
        element: lazy(() => import('@pages/home-page')),
        path: rootPaths.INDEX
    }
];

export const rootRoutes: RouteModel[] = [
    {
		element: MainLayout,
		children: mainRoutes
	}
];