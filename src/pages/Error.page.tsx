import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const errorContent = () => {
    if (isRouteErrorResponse(error)){
      return `${error.status} ${error.statusText} - ${error.data}`;
    }
    if (error instanceof Error) {
      return `${error.name} ${error.message}: ${error.stack}`;
    }
    return 'Unknown error';
  }

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorContent()}</i>
      </p>
    </div>
  );
}

export default ErrorPage;