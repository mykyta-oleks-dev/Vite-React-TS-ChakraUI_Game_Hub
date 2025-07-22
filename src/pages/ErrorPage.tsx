import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div>
			{errorHelper(error)}
			<Link to="/" className="btn btn-primary">
				Return back to main page
			</Link>
		</div>
	);
};

const errorHelper = (error: unknown) => {
	if (isRouteErrorResponse(error)) {
		return (
			<>
				<h1>
					{error.status}: {error.statusText}
				</h1>
				<p>{error.data}</p>
			</>
		);
	}

	if (error instanceof Error) {
		return (
			<>
				<h1>{error.name}</h1>
				<p>{error.message}</p>
			</>
		);
	}

	return (
		<>
			<h1>Unexpected error</h1>
			<p>Please report the issue to the technical assistants</p>
		</>
	);
};

export default ErrorPage;
