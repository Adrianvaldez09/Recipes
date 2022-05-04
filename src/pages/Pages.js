import React from 'react'
import Home from './Home'
import CuisinePage from './cuisine/CuisinePage'
import Searched from './Searched'
import Recipe from './Recipe'
import {Route, Routes ,BrowserRouter} from 'react-router-dom'

function Pages() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine" element={<CuisinePage/>}/>
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipes/:id" element={<Recipe/>}/>
      </Routes>
  )
}

export default Pages