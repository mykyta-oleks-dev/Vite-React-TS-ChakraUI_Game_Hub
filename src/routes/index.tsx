import { createBrowserRouter } from 'react-router';
import { Layout, ErrorPage, HomePage, GameDetailsPage } from '@/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'games', element: <HomePage /> },
			{ path: 'games/:slug', element: <GameDetailsPage /> },
		],
	},
]);

export default router;
