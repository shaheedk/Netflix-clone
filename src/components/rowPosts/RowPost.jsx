import React, { useEffect, useState } from 'react';
import './rowPost.css';
import Youtube from 'react-youtube';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constant';

function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data);
      })
      .catch((err) => {
        alert('Network error');
      });
  }, [props.url]);

  const handleMovie = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('Trailer is not available');
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div key={obj.id} className="poster-container">
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt={obj.title || obj.name} // Use `title` or `name`
            />
          
          </div>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;

