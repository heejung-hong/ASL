import { useNavigate } from 'react-router-dom'
import { useState } from "react"
export default function GameSelect(){


    const [difficulty, setDifficulty] = useState("easy")
    const [player, setPlayer] = useState(true)

    const navigate = useNavigate()
    const navigateToGameScreen = () => {
        navigate('/GameScreen')
    }

    const changePlayer = () => {
        setPlayer(!player)
    }
    const PlayerOption = () => {
        if (player) {
            return (
                <>
                <span className="player-select-span-left"> <span className="player">Solo Player</span></span>
                <span className="player-select-span-right " onClick={changePlayer}>Multi Player</span>
                </>
            )
        } else {
            return (
                <>
                <span className="player-select-span-left" onClick={changePlayer}>Solo Player</span>
                <span className="player-select-span-right "><span className="player">Multi Player</span></span>
                </>
            )
        }
    }

    const RadioInput = ({label, value, checked, setter}) => {
        return (
          <label className="background-color radio-cursor">
            <input className="radio-button" type="radio" checked={checked === value}
                   onChange={() => setter(value)} />
            <span className="radio-input-word background-color" >{label}</span>
          </label>
        );
    };
    
    return(
        <div className="game-select">
            <h2 className="game-screen-title">Choose your Game Mode!</h2>
            <div className="game-screen-container">
                <div className="game-screen-options-container">
                    <div className="player-select">
                        <PlayerOption />
                        {/* <span className="player-select-span-left">Solo Player</span>
                        <span className="player-select-span-right ">Multi Player</span> */}
                    </div>
                    
                    <div className="background-color radio-container"> 
                        <RadioInput label="Easy" value="easy" checked={difficulty} setter={setDifficulty}  />
                        <RadioInput label="Medium" value="medium" checked={difficulty} setter={setDifficulty} />
                        <RadioInput label="Hard" value="hard" checked={difficulty} setter={setDifficulty} />
	                </div> 

                    {/* <div className="game-screen-list-container">
                        <ul className="list-difficulty"> 
                            <li className="list-item-difficulty">
                                <input type="radio" id="easy" value='easy'></input>
                                <label className="background-color" for="easy">Easy</label>
                            </li>
                            <li className="list-item-difficulty">
                                <input className="input-style" type="radio" id="medium" value='medium'></input>
                                <label className="background-color" for="medium">Medium</label>
                            </li>
                            <li className="list-item-difficulty">
                                <input className="input-style" type="radio" id="hard" value='hard'></input>
                                <label className="background-color" for="hard">Hard</label>
                            </li>
                        </ul>
                    </div> */}

                    <div className="background-color">
                           <button className="game-screen-button" onClick={navigateToGameScreen}>Next</button> 
                    </div>
                    
                </div>
            </div>
        </div>
       
    )
}