import Game from "../components/Game"

export default function GameScreen(){
    return(
        <div>
            <Routes>
                <Route path="/game" element={<Game />}></Route>
            </Routes>           
        </div>
    )

}