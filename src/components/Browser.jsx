import Header from './Header'
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
export const Browser = () => {
 
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {/* 
          mainvideocontainer
            -videoTitle
            -video
            -movieList
          -more movie list container

       */}
       <div>
          <MainContainer/>
          <SecondaryContainer/>

       </div>
    </div>
  )
}
