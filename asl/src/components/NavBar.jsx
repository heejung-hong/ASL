import {NavLink} from 'react-router-dom'
export default function NavBar(){
    return(
    <div>
        <NavLink to='/GameSelect'>
            <button>Game Mode</button>
        </NavLink>
        <NavLink to='/GameSelect'>
            <button>Learning Mode</button>
        </NavLink>
    </div>
    )
}