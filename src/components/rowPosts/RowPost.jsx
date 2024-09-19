import React, { useEffect, useState } from 'react'
import './rowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constant'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
axios.get(props.url).then(response=>{
  setMovies(response.data.results)
console.log(response.data)

}).catch(err=>{
//  alert('network error') ;
})
  },[])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {movies.map((obj)=>(
          <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />

        ))}
              </div>
    </div>
  )
}

export default RowPost
