import React from 'react'
import { Link } from 'react-router-dom'
import sty from "./Header.module.scss"
import { MdSearch, MdArrowDropDown } from "react-icons/md"
import pp from "../../assets/FocusContact.webp"
const Header = () => {
    return (
        <div className={sty.container}>
            <div className={sty.center}>
                <div className={sty.center__inputContainer}>
                    <MdSearch size={24} />
                    <input placeholder='Search' /></div>
            </div>
            <div className={sty.right}>

                <img src={pp} />
                <p>Ritul Daryan</p>
                <MdArrowDropDown size={36} />
            </div>
        </div>

    )
}

export default Header