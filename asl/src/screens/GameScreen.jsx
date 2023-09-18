import ReactModal from 'react-modal';
import { useState, useEffects } from 'react';
import Styles from '../CSS/modal.module.css'
import {NavLink} from 'react-router-dom'
import Game from "../components/Game"
import Confetti from '../modal_assets/confetti.png'
export default function GameScreen(){

    
    const [showModal, setShowModal] = useState(false)



    function toggleModal()
    {
        setShowModal(!showModal)

    }
    // function openModal(){
    //     setIsOpen(true);
    // }

    // function closeModal(){
    //     setIsOpen(false);
    // }

    return(
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <ReactModal
            className={Styles.modal}
            isOpen={showModal} ariaHideApp={false}
            >
                <img className={Styles.confetti} src={Confetti} alt='image of party confetti'/>
                <p className={Styles.modalText}>Congratulations!</p>
                    <button className={Styles.playAgn} onClick={toggleModal}>Play Again</button>

                    <NavLink to='/'>
                    <button className={Styles.backHome} onClick={toggleModal}>Go to Home</button>
                    </NavLink>
            </ReactModal>

           <Game/> 

        </div>
    )

}