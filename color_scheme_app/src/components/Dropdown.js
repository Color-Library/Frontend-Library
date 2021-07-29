import React from 'react'
import '../styles/Dropdown.css'

export default function Dropdown({ label }){
    return (
        <div className="dropdown">
            <button className="dropbtn">{label}</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}