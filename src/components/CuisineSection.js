import React,{useState} from 'react'

import "@splidejs/splide/dist/css/splide.min.css"
import {GoGlobe} from "react-icons/go"
import {NavLink} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'



function CuisineSection() {





  return (
    <div className='cuisine-section'>
      <div className='cuisine-background'>
      </div>
        <div className='cuisine-section-container'>
            <div className='animated-text'>Explore unique dishes from all around the globe</div>
            <NavLink to={"/cuisine"} >Cuisines</NavLink>
        </div>
    </div>
  )
}

export default CuisineSection