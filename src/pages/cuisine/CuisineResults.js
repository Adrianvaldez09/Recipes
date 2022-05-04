import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function CuisineResults({chosen}) {
      const [cuisine, setCuisine] = useState([])

  // const getCuisine = async (name)=>{
  //   const data= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&cuisine=${name}`)
  //   const recipes = await data.json()
  //   setCuisine(recipes.results)
  // }
  // useEffect(()=>{
  //   getCuisine(chosen)
  // },[chosen])
  // console.log(cuisine)


  return (
      <div className='cuisine-right'>
        {chosen === "" ? <p>Popular recipes:</p> : <p>Popular {chosen} dishes:</p>}
        <div className='cuisine-page-results'>
        {cuisine.map((recipe, index)=> {
            return(
              <Link to={"/recipe/"+ recipe.id} key={index}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image}/>
            </Link>
          )
        })}
        </div>
    </div>
  )
}

export default CuisineResults