import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Recipe() {
    const [recipeFull, setRecipeFull] = useState({})
    const [active, setActive] = useState('instructions')

    let params = useParams()

    const getRecipeFull = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const recipes = await data.json()
        setRecipeFull(recipes)
    }

    console.log(recipeFull)
    
    useEffect(() =>{
        getRecipeFull(params.id)
        console.log(params.id)
    },[params.name])

    console.log(params)

  return (
    <div>
        {/* <div>
        <h2>{recipeFull.title}</h2>
        <img src={recipeFull.image} />
        </div>
        <div>
            <button className={active === "ingredients" ? "" : "active"} onClick={(e) => setActive("instructions")}>Instructions</button>
            <button className={active === "instructions" ? "" : "active"} onClick={(e) => setActive("ingredients")} >Ingredients</button>
            <div>
                {active === "ingredients" ?
                    <div>
                    <h3 dangerouslySetInnerHTML={{__html: recipeFull.summary}}>
                    </h3> 
                        <ul>
                        {recipeFull.extendedIngredients.map((ingredient)=>{
                            return(
                        <li key={ingredient.id}>{ingredient.original}</li>
                        )
                    })}
                        </ul>
                    </div>
                : 
                    <h3 dangerouslySetInnerHTML={{__html: recipeFull.instructions}}>
                    </h3>}
            </div>
        </div> */}
        {recipeFull.title}
        </div>
  )
}

export default Recipe