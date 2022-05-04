import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import CuisineSection from "../components/CuisineSection";
import MealPlannerSection from "../components/MealPlannerSection";
import {Route, Routes ,BrowserRouter} from 'react-router-dom'

import React from 'react'

function Home() {
  return (
    <div>
    <SearchSection/>
    <CuisineSection/>
    {/* <Italian/> */}
    <MealPlannerSection/>
    </div>
  )
}

export default Home