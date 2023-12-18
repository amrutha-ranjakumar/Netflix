import React, { useEffect, useState } from 'react'
import instance from './Instance';
import './Banner.css';

function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original";
    console.log(fetchUrl);
    const [movieDetails,setMovieDetails]=useState([])
    const fetchData = async()=>{
        const response =await instance.get(fetchUrl)
        const {data}=response;
        console.log('====responce for banner=====');
       // console.log(response);
       setMovieDetails(data.results[Math.floor(Math.random()*data.results.length)]);
       console.log("======movie details=====");
       console.log(movieDetails);
    }
    useEffect(()=>{
        fetchData()
      

    },[])
  return (
    <div>
     <div style={{height:"600px",
     backgroundPosition:"center",
     backgroundSize:"cover",
     backgroundImage:`url(${base_url}${movieDetails.backdrop_path})`}}>
        
          <div className='banner'>
           <h2 style={{color:"white"}}>{movieDetails?.name}</h2>
           <button className='btn btn-danger'>play<i class="fa-solid fa-play ms-1"></i></button>
           <button  className='btn border-white ms-3 more '>more info<i class="fa-solid fa-caret-down "></i></button>
            <h5 style={{color:"white"}}>{movieDetails?.overview?.slice(0,200)}...</h5>
            </div>
        
     </div>
    </div>
  )
}

export default Banner