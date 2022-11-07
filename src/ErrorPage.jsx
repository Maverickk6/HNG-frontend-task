import { useRouteError, Link } from "react-router-dom";
import Left from "./assets/arrow-left.png";
import Footer from "./components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-full w-full flex flex-col px-4 sm:px-20 pt-20 pb-4 justify-center">
      <div
        id="error_page"
        className="w-[90vW] sm:w-[50vW] h-[50vH] rounded-md p-4 mb-12"
      >
        <p className="text-xs text-blue-500 mb-4">404 error</p>
        <h1 className="text-[50px] leading-[50px] mb-10 mt-8">
          We can't find that page
        </h1>
        <p className="mb-10 font-light text-[16px]">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <div className="flex flex-row justify-between sm:w-[90%]">
          <Link
            className="px-[15px] py-2 border border-gray-300 rounded-md flex flex-row items-center"
            to={"/contact"}
          >
            <img src={Left} className="h-[10px] w-[10px] ml-[5px] mr-[10px]" />
            Go back
          </Link>
          <Link className="p-2 bg-blue-500 rounded-md text-white" to={"/"}>
            Take me home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
