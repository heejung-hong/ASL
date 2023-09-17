export default function GameSelect(){
    return(
        <div>
            <h2>Choose your Game Mode!</h2>
            <div>
            <input type="radio" id="easy" value='easy'></input>
            <label for="easy">Easy</label>
            <input type="radio" id="medium" value='medium'></input>
            <label for="medium">Medium</label>
            <input type="radio" id="hard" value='hard'></input>
            <label for="hard">Hard</label>
            <button>Next</button>
            </div>
        </div>
    )
}