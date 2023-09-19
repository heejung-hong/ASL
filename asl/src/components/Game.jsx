import { useNavigate } from 'react-router-dom';
import Card from '../CSS/Game.module.css';
import aHand from './images/A-Hand.png';
import aLetter from './images/A-Letter.png';
import bHand from './images/B-Hand.png';
import bLetter from './images/B-Letter.png';
import cHand from './images/C-Hand.png';
import cLetter from './images/C-Letter.png';
import dHand from './images/D-Hand.png';
import dLetter from './images/D-Letter.png';
import eHand from './images/E-Hand.png';
import eLetter from './images/E-Letter.png';
import gHand from './images/G-Hand.png';
import gLetter from './images/G-Letter.png';

export default function Game(){


  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
}

  // https://marina-ferreira.github.io/projects/js/memory-game/
  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false; // prevent card select until match complete
  let firstCard, secondCard;

  // loop through card and when clicked, flipCard function called
  cards.forEach(card => card.addEventListener('click', flipCard));
 
  function flipCard() {
    // console.log(flipCard)
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip'); // flip css class triggered.
    if (!hasFlippedCard) { // first click set to false
      hasFlippedCard = true; // flipped card
      firstCard = this; // element that has fired the event
      // console.log(hasFlippedCard, firstCard); // true <div class="memory-card flip" data-framwork="aurelia" style="order: 1;"></div>
      return;
    }
    secondCard = this;
    // console.log(firstCard, secondCard)
    checkForMatch();
  }

  // access data-framework in div
  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // function in parenthesis is immediately invoked function
  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos; // random number to order property
    });
  })();

  return(
      <div>
        <section className={Card.sectionBtn}>
          <button className={Card.practiceBtn}><span className={Card.practiceText}>Practice Mode</span><span className={Card.timedBtn}>Timed Mode</span></button>
          <button className={Card.startBtn} onClick={navigateHome}>EXIT</button>
        </section>
        <section className={Card.memoryGame}>
          <div className={Card.memoryCard} data-framework="signA">
            <img className={Card.frontface} src={aHand} alt="signA" />
            <div className={Card.backface}></div>
          </div>
          <div className={Card.memoryCard} data-framework="signA">
            <img className={Card.frontface} src={aLetter} alt="signA" />
            <div className={Card.backface}></div>
          </div>

          <div className={Card.memoryCard} data-framework="signB">
            <img className={Card.frontface} src={bHand} alt="signB" />
            <div className={Card.backface}></div>
          </div>
          <div className={Card.memoryCard} data-framework="signB">
            <img className={Card.frontface} src={bLetter} alt="signB" />
            <div className={Card.backface}></div>
          </div>

          <div className={Card.memoryCard} data-framework="signC">
            <img className={Card.frontface} src={cHand} alt="signC" />
            <div className={Card.backface}></div>
          </div>
          <div className={Card.memoryCard} data-framework="signC">
            <img className={Card.frontface} src={cLetter} alt="signC" />
            <div className={Card.backface}></div>
          </div>

          <div className={Card.memoryCard} data-framework="signD">
            <img className={Card.frontface} src={dHand} alt="signD" />
            <div className={Card.backface}></div>
          </div>
          <div className={Card.memoryCard} data-framework="signD">
            <img className={Card.frontface} src={dLetter} alt="signD" />
            <div className={Card.backface}></div>
          </div>

          <div className={Card.memoryCard} data-framework="signE">
            <img className={Card.frontface} src={eHand} alt="signE" />
            <div className={Card.backface}></div>
          </div>
          <div className={Card.memoryCard} data-framework="signE">
            <img className={Card.frontface} src={eLetter} alt="signE" />
            <div className={Card.backface}></div>
          </div>

          <div className={Card.memoryCard} data-framework="signG">
            <img className={Card.frontface} src={gHand} alt="signG" />
            <div className={Card.backface}></div>
          </div>
          <div className={Card.memoryCard} data-framework="signG">
            <img className={Card.frontface} src={gLetter} alt="signG" />
            <div className={Card.backface}></div>
          </div>
        </section>
      </div>
  )
}