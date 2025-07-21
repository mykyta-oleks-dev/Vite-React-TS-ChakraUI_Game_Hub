import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UIProvider } from './components/ui/provider.tsx';
import QueryProvider from './QueryProvider.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';
import router from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UIProvider>
			<QueryProvider>
				<RouterProvider router={router} />
				<ReactQueryDevtools />
			</QueryProvider>
		</UIProvider>
	</StrictMode>
);
