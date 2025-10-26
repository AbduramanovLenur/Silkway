import type { FC } from 'react';

export type RouteModel = {
	element?: FC;
	path?: string;
	exact?: boolean;
	children?: RouteModel[];
};
