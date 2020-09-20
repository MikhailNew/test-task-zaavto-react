import React from 'react'
import './FilmsList.css'
import { NavLink } from 'react-router-dom';

export default props => ( 
    <li className="films__item">
        <div className="films__subtitle"> 
            <NavLink to={"/films/" + props.id}>
                {props.film.title}
            </NavLink> 
        </div>
    </li>
)