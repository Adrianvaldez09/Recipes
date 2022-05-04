import React,{useState,useEffect} from 'react'
import CuisineResults from './CuisineResults'


function CuisinePage() {

  const [chosen, setChosen]= useState("")
console.log(chosen)
  return (
    <div className='cuisine-page'>
      <ul>
        <li>
          <button className={chosen === "African"? "chosen-cuisine": ""} onClick={(e)=>setChosen("African")}>African</button>
        </li>
        <li>
          <button className={chosen === "American"? "chosen-cuisine": ""} onClick={(e)=>setChosen("American")}>American</button>
        </li>
        <li>
          <button className={chosen === "British"? "chosen-cuisine": ""} onClick={(e)=>setChosen("British")}>British</button>
        </li>
        <li>
          <button className={chosen === "Cajun"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Cajun")}>Cajun</button>
        </li>
        <li>
          <button className={chosen === "Caribbean"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Caribbean")}>Caribbean</button>
        </li>
        <li>
          <button className={chosen === "Chinese"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Chinese")}>Chinese</button>
        </li>
        <li>
          <button className={chosen === "Eastern European"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Eastern European")}>Eastern European</button>
        </li>
        <li>
          <button className={chosen === "European"? "chosen-cuisine": ""} onClick={(e)=>setChosen("European")}>European</button>
        </li>
        <li>
          <button className={chosen === "French"? "chosen-cuisine": ""} onClick={(e)=>setChosen("French")}>French</button>
        </li>
        <li>
          <button className={chosen === "German"? "chosen-cuisine": ""} onClick={(e)=>setChosen("German")}>German</button>
        </li>
        <li>
          <button className={chosen === "Greek"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Greek")}>Greek</button>
        </li>
        <li>
          <button className={chosen === "Indian"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Indian")}>Indian</button>
        </li>
        <li>
          <button className={chosen === "Irish"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Irish")}>Irish</button>
        </li>
        <li>
          <button className={chosen === "Italian"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Italian")}>Italian</button>
        </li>
        <li>
          <button className={chosen === "Japanese"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Japanese")}>Japanese</button>
        </li>
        <li>
          <button className={chosen === "Jewish"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Jewish")}>Jewish</button>
        </li>
        <li>
          <button className={chosen === "Korean"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Korean")}>Korean</button>
        </li>
        <li>
          <button className={chosen === "Latin American"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Latin American")}>Latin American</button>
        </li>
        <li>
          <button className={chosen === "Mediterranean"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Mediterranean")}>Mediterranean</button>
        </li>
        <li>
          <button className={chosen === "Mexican"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Mexican")}>Mexican</button>
        </li>
        <li>
          <button className={chosen === "Middle Eastern"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Middle Eastern")}>Middle Eastern</button>
        </li>
        <li>
          <button className={chosen === "Nordic"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Nordic")}>Nordic</button>
        </li>
        <li>
          <button className={chosen === "Southern"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Southern")}>Southern</button>
        </li>
        <li>
          <button className={chosen === "Spanish"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Spanish")}>Spanish</button>
        </li>
        <li>
          <button className={chosen === "Thai"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Thai")}>Thai</button>
        </li>
        <li>
          <button className={chosen === "Vietnamese"? "chosen-cuisine": ""} onClick={(e)=>setChosen("Vietnamese")}>Vietnamese</button>
        </li>

      </ul>
      <CuisineResults
        chosen={chosen}
        />
    </div>
  )
}

export default CuisinePage