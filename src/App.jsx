import { useState } from "react";
import Pic from "./assets/mavv.jpeg";
import Git from "./assets/git.svg";
import Slack from "./assets/slack.svg";
import I4G from './assets/I4G.png'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100%] w-[100%]">
      <div className="flex flex-col items-center px-4 mx-auto my-4">
        <div className="flex flex-col items-center">
          <img src={Pic} className="w-32 h-32 rounded-full object-fit" />
          <h2 id="twitter" className="mt-4 text-2xl font-bold">
            @eddymav
          </h2>
          {/* <p id="slack">Maverick</p> */}
        </div>
        <div className="mt-4 w-[85vW] sm:w-[70vW] flex flex-col items-center">
          <a className="my-4 bg-[#c8cdd7] w-full text-center p-6 rounded-md text-xl">
            Twitter Link
          </a>
          <a
            className="text-xl my-4 bg-[#c8cdd7] w-full text-center p-6 rounded-md"
            href="https://training.zuri.team/"
            id="btn__zuri"
          >
            Zuri Team
          </a>
          <a
            className="text-xl my-4 bg-[#c8cdd7] w-full text-center p-6 rounded-md"
            href="https://books.zuri.team/"
            id="books"
          >
            Zuri Books
          </a>
          <a
            className="text-xl my-4 bg-[#c8cdd7] w-full text-center p-6 rounded-md"
            href="https://books.zuri.team/python-for-beginners?ref_id=maverick"
            id="book__python"
          >
            Python Books
          </a>
          <a
            className="my-4 bg-[#c8cdd7] w-full text-center p-6 rounded-md text-xl"
            href="https://background.zuri.team"
            id="pitch"
          >
            Background Check for Coders
          </a>
          <a
            className="my-4 bg-[#c8cdd7] w-full text-center p-6 rounded-md text-xl"
            href="https://books.zuri.team/design-rules"
            id="book__design"
          >
            Design Books
          </a>
          <div className="flex flex-row mt-6">
            <img src={Slack} className="w-12 h-12 mr-2" />
            <img src={Git} className="w-12 h-12 ml-2" />
          </div>
        </div>
        <div className="py-2 sm:py-4 px-4 sm:px-12 my-2 sm:my-6 mt-8 w-[90vW] flex sm:flex-row flex-col justify-between">
          <h1 className="font-bold text-[25px]">Zuri <span className="text-[40px] text-red-500">.</span> Internship</h1>
          <p className="text-xs text-gray-500">HNG internship 9 frontend task</p>
          <img src={I4G} className="self-left h-[55px] w-[300px] mt-[20px]"/>
        </div>
      </div>
    </div>
  );
}

export default App;
