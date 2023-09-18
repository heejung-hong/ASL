import ReactModal from 'react-modal';
import { useState, useEffects } from 'react';
import Styles from '../CSS/modal.module.css'
import {NavLink} from 'react-router-dom'
import Game from "../components/Game"


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
            <p>Game Goes Here</p>
            <button onClick={toggleModal}>Open Modal</button>
            <ReactModal
            className={Styles.modal}
            isOpen={showModal} ariaHideApp={false}
            >
                <div className={Styles.profile}></div>
                <p className={Styles.modalText}>You Win</p>
                <div className={Styles.first}>
                    <button className={Styles.playAgn} onClick={toggleModal}>Play Again</button>
                </div>

                <div className={Styles.second}>
                    <NavLink to='/'>
                    <button className={Styles.backHome} onClick={toggleModal}>Go to Home</button>
                    </NavLink>
                </div>
            </ReactModal>

           <Game/> 

        </div>
    )

}