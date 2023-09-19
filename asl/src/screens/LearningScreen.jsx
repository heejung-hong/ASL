import { useNavigate } from "react-router-dom"
import Construction from "../assets/construction.png"
export default function LearningScreen()  {

    const navigate = useNavigate()
    const navigateToHomeScreen = () => {
        navigate('/')
    }

    return(
        <div className="learningpage-container">
            <div>
                <h1> Learning Mode Coming Soon! </h1>
                <img className="under-construction" src={Construction} alt="Page is under construction" />
            </div>
            <button className="homepage-button" onClick={navigateToHomeScreen}>Go to Home</button>
        </div>
    )
}