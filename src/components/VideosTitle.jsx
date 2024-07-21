import React from 'react';

function VideosTitle({ Overview, Title }) {
  return (
    <div className="pt-[40%] sm:pt-[20%] px-4 sm:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl sm:text-6xl font-bold">{Title}</h1>
      <p className="py-6 text-base sm:text-lg w-full sm:w-1/4">{Overview}</p>
      <div>
        <button className="bg-white text-black py-1 sm:py-4 px-3 sm:px-12 text-base sm:text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 sm:p-4 sm:px-12 text-base sm:text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideosTitle;