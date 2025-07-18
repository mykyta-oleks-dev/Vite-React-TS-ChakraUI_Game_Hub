import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { UIProvider } from './components/ui/provider.tsx';
import QueryProvider from './QueryProvider.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UIProvider>
			<QueryProvider>
				<App />
				<ReactQueryDevtools />
			</QueryProvider>
		</UIProvider>
	</StrictMode>
);
