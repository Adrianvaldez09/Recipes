import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import Search from './Search'
import {FcMenu} from 'react-icons/fc'
import {AiOutlineCloseSquare} from 'react-icons/ai'

function Header() {
    const [activeClass, setActiveClass] = useState("nav-container")
    const [activeClassHeader, setActiveClassHeader] = useState("header")
    const [navItems, setNavItems] =useState("nav-items")
    const [hamburger, setHamburger]= useState(true)
    console.log(activeClass)
    const classChange=()=>{
        setActiveClass("nav-container menu")
        setActiveClassHeader("header activeHeader")
        setNavItems("nav-items nav-items2")
        setHamburger(false)
    }
    const classClose=()=>{
        setActiveClass("nav-container close")
        setActiveClassHeader("header ")
        setNavItems("nav-items close2")
        setHamburger(true)
    }

  return (
    <header className={activeClassHeader}>
        <div className='header-container'>
            <div className='logo'>LOGO</div>
            <div className={activeClass}>
                <nav className={navItems}>
                    <ul>
                        <li>
                            <NavLink to={"/"}>
                                Home
                            </NavLink>
                            </li>
                        <li>
                            <NavLink className='cuisine-tab' to={"/cuisine"}>
                                Cuisines
                            </NavLink>
                            </li>
                        <li>
                            <NavLink to={"/"}>
                                Planner
                            </NavLink>
                            </li>

                    </ul>
                </nav>
                <Search/>
            </div>
            {
                hamburger? 
            <div className='hamburger'>
                <FcMenu onClick={(e) => classChange()} />
            </div>
            :
            <div className='hamburger'>
                <AiOutlineCloseSquare onClick={(e) => classClose()} />
            </div>
            }
        </div>
    </header>
  )
}

export default Header