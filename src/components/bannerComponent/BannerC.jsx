import React, { useEffect, useState } from 'react';
import { API_KEY ,imageUrl} from '../../constants/constant';
import './banner.css';
import axios from '../../axios';

function BannerC() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // Select a random movie
        setMovie(randomMovie); 
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie? imageUrl+movie.backdrop_path:null})`
         
      }}
    >
      <div className="content">
        <h1>{movie ? movie.title || movie.name : null}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : null}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default BannerC;
