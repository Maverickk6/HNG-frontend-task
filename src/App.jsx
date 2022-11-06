import { useState } from "react";
import Pic from "./assets/mavv.jpeg";
import Git from "./assets/git.svg";
import Slack from "./assets/slack.svg";
import Share from './assets/shareIcon.png';
import Dot from './assets/dotIcon.png'
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100%] w-[100%]">
      <div className="flex flex-col items-center px-1 mx-auto mt-12 mb-6 md:mt-16 md:mb-1 relative">
        <div className=" hidden md:block sm:block self-end border-dashed border-2 border-gray-300 p-4 rounded-full absolute right-[30px] sm:right-[120px] md:right-[250px]">
          <img src={Share} className="h-4 w-4"/>
        </div>
        <div className=" sm:hidden md:hidden self-end border-dotted border-2 border-gray-300 px-[16px] py-[20px] rounded-full absolute right-[30px] sm:right-[120px] md:right-[250px]">
          <img src={Dot} className="h-[2px] w-[10px]"/>
        </div>
        <div className="flex flex-col items-center w-full">
          <img src={Pic} className="w-32 h-32 rounded-full object-fit" />
          <h2 id="twitter" className="mt-4 text-2xl font-bold">
            @eddymav
          </h2>
          {/* <p id="slack">Maverick</p> */}
        </div>
        <div className="mt-4 w-[90vW] sm:w-[80vW] md:w-[80vW] flex flex-col items-center">
          <a className="my-4 bg-[#EAECF0] text-[#101828] w-full text-center p-6 rounded-md text-xl">
            Twitter Link
          </a>
          <a
            className="text-xl text-[#101828] my-4 bg-[#EAECF0] w-full text-center p-6 md:p-x2 rounded-md"
            href="https://training.zuri.team/"
            id="btn__zuri"
          >
            Zuri Team
          </a>
          <a
            className="text-xl text-[#101828] my-4 bg-[#EAECF0] w-full text-center p-6 rounded-md"
            href="https://books.zuri.team/"
            id="books"
          >
            Zuri Books
          </a>
          <a
            className="text-xl my-4 text-[#101828] bg-[#EAECF0] w-full text-center p-6 rounded-md"
            href="https://books.zuri.team/python-for-beginners?ref_id=maverick"
            id="book__python"
          >
            Python Books
          </a>
          <a
            className="my-4 text-[#101828] bg-[#EAECF0] w-full text-center p-6 rounded-md text-xl"
            href="https://background.zuri.team"
            id="pitch"
          >
            Background Check for Coders
          </a>
          <a
            className="my-4 text-[#101828] bg-[#EAECF0] w-full text-center p-6 rounded-md text-xl"
            href="https://books.zuri.team/design-rules"
            id="book__design"
          >
            Design Books
          </a>

          <a
            className="my-4 text-[#101828] bg-[#EAECF0] w-full text-center p-6 rounded-md text-xl"
            id="contact"
          >
            <Link to={`/contact`}>Contact Me</Link>
          </a>

          <div className="flex flex-row mt-6">
            <img src={Slack} className="w-6 h-6 mr-2" />
            <img src={Git} className="w-6 h-6 ml-2" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
