import React,{useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function Searched() {

    const [searched, setSearched] = useState([])
    let params = useParams()
    const getSearched = async(name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&query=${name}`)
    const recipes = await data.json()
    setSearched(recipes.results)
    }

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
  return (
    <div>
        <h2>You searched for {params.search}</h2>
        {searched.map((recipe) =>{
            return(
                <div key={recipe.id} >
                    <Link to={"/recipes/" + recipe.id}>
                    <img src={recipe.image}/>
                    <h4>{recipe.title}</h4>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Searched