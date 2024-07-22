import Header from './Header'
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from './MainContainer';

import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

export const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header/>
       <div>
          <MainContainer/>
          <SecondaryContainer/>
       </div>
    </div>
  )
}
