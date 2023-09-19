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
                    </div>
                    <div className="background-color radio-container"> 
                        <RadioInput label="Easy" value="easy" checked={difficulty} setter={setDifficulty}  />
                        <RadioInput label="Medium" value="medium" checked={difficulty} setter={setDifficulty} />
                        <RadioInput label="Hard" value="hard" checked={difficulty} setter={setDifficulty} />
	                </div> 
                    <div className="background-color">
                           <button className="game-screen-button" onClick={navigateToGameScreen}>Next</button> 
                    </div>
                    
                </div>
            </div>
        </div>
       
    )
}