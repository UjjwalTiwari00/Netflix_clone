import React from 'react'

function VideosTitle({Overview,Title}) {
    return (
        <div className="pt-36 px-12">
          <h1 className="text-6xl font-bold">{Title}</h1>
          <p className="py-6 text-lg w-1/4">{Overview}</p>
          <div className="">
            <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
              ▶️ Play
            </button>
            <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
              More Info
            </button>
          </div>
        </div>
      );
}

export default VideosTitle