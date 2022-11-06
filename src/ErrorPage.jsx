import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-full w-full flex items-center justify-center p-20 ">
      <div
        id="error-page"
        className="w-[40vW] h-[40vH] bg-gray-300 rounded-md p-4 self-center"
      >
        <h1 className="mb-2 text-2xl">Oops!</h1>
        <p className="mb-8">Sorry, an unexpected error has occurred. </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
