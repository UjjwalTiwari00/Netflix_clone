import Header from './Header'

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
       </div>
    </div>
  )
}
