import SignOn from "../assets/sign-on-hands.png"

export default function Home(){
    return(
        <div>
            <div>
                <h2 className="welcome">Welcome to Sign On!</h2>
                <img className="title-image" src={SignOn} alt="Sign On" />
                <p className="site-info">A fun inclusive space to learn ASL solo, with friends, or as a family</p>
            </div>

        </div>
    )
}