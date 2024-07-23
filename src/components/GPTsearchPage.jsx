// import React from "react";
// import { Link } from "react-router-dom";
// import GPTSearchBar from "./GPTSearchBar";

// const GPTsearchPage = () => {
//   return (
//     <div>
//       <div className="absolute">
//         <Link to={"/browser"}>
//           {" "}
//           <button className="bg-black z-10 absolute text-white m-10 ">
//             Browse Movies
//           </button>
//         </Link>

//         <img
//           className="w-full h-full object-cover opacity"
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
//           alt="Background"
//         />
//       </div>
//       <div className="absolute">
//         <GPTSearchBar />
//       </div>
//     </div>
//   );
// };

// export default GPTsearchPage;
import React from "react";
import { Link } from "react-router-dom";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../constants/constant";
import GPTSearchResult from "./GPTSearchResult";
const GPTsearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-full h-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div>
        <Link to={"/browser"}>
          <button className="col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg">
            Browse Movies
          </button>
        </Link>
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTSearchResult/>
      </div>
    </>
  );
};

export default GPTsearchPage;
