import {NavLink} from 'react-router-dom'
export default function GameSelect(){
    return(
        <div className="game-select">
            <h2 className="game-screen-title">Choose your Game Mode!</h2>
            <div className="game-screen-container">
                <div className="game-screen-options-container">
                <div className="game-screen-list-container">
                    <ul className="list-difficulty"> 
                        <li className="list-item-difficulty">
                            <input type="radio" id="easy" value='easy'></input>
                            <label for="easy">Easy</label>
                        </li>
                        <li className="list-item-difficulty">
                            <input type="radio" id="medium" value='medium'></input>
                            <label for="medium">Medium</label>
                        </li>
                        <li className="list-item-difficulty">
                            <input type="radio" id="hard" value='hard'></input>
                            <label for="hard">Hard</label>
                        </li>

                    </ul>
                </div>
                    <div>
                        <button className="game-screen-button">Next</button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}