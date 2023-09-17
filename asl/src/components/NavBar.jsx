import {NavLink} from 'react-router-dom'
export default function NavBar(){
    return(
    <div className="homepage-button-container">
        <NavLink to='/GameSelect'>
            <button className="homepage-button">Game Mode</button>
        </NavLink>
        <NavLink to='/GameSelect'>
            <button className="homepage-button">Learning Mode</button>
        </NavLink>
    </div>
    )
}