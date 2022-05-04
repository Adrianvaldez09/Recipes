import React,{useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const submitHandler = (e) =>{
      e.preventDefault()
      navigate('/searched/' + input)
      setInput("")
    }
  return (
    <div className='header-form'>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={(e) => setInput(e.target.value)} placeholder='Search'  value={input}/>
            <button>+</button>
            <h2>{input}</h2>
        </form>
    </div>
  )
}

export default Search