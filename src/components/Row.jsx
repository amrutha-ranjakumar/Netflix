import React, { useEffect, useState } from 'react'
import instance from './Instance'
import "./Row.css"


function Row({title,fetchUrl}){
  const base_url = "https://image.tmdb.org/t/p/original";
 const [allMovies,setAllMovies]=useState([])

  const fetchData =async()=>{
    const response = await instance.get(fetchUrl)
    console.log(response);
    const {data}=response
    // console.log(data);
    setAllMovies(data.results)
  }
  useEffect(()=>{
    fetchData();
  } ,[]);
  //console.log(allMovies);
  return (
    <div className='row'>
      <h2 style={{color:"white",marginBottom:"30px"}} >{title}</h2>
      <div className='movie_row'>
        {
          allMovies?.map(item=>(
            <img src={`${base_url}${item.poster_path}`} alt="" className='movie' />
          ))
        }
      </div>
      
    </div>
  )
}

export default Row