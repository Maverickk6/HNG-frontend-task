import { useRouteError, Link } from "react-router-dom";
import Left from './assets/arrow-left.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-full w-full flex flex-col p-20 justify-center">
      <div
        id="error_page"
        className="w-[45vW] h-[50vH] rounded-md p-4"
      >
        <p className="text-xs text-blue-500 mb-4">404 error</p>
        <h1 className="text-[50px] leading-8 mb-12 mt-8">We can't find that page</h1>
        <p className="mb-12 font-light text-[16px]">Sorry, the page you are looking for doesn't exist.</p>
        <div className="flex flex-row justify-between w-[50%]">
          <Link className="px-[15px] py-2 border border-gray-300 rounded-md flex flex-row items-center" to={'/contact'}><img src={Left} className="h-[10px] w-[10px] ml-[5px] mr-[10px]"/>Go back</Link>
          <Link className="p-2 bg-blue-500 rounded-md text-white" to={'/'}>Take me home</Link>
        </div>
      </div>
    </div>
  );
}

