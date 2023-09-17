export default function Game(){
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
        <section class="sectionBtn">
          <button class="practiceBtn">Practice Mode</button>
          <button class="timedBtn">Timed Mode</button>
          <button class="startBtn">START</button>
        </section>
        <section class="memory-game">
          <div class="memory-card" data-framework="signA">
            <img class="front-face" src="apple.png" alt="signA" />
            <div class="back-face"></div>
          </div>
          <div class="memory-card" data-framework="signA">
            <img class="front-face" src="apple.png" alt="signA" />
            <div class="back-face"></div>
          </div>

          <div class="memory-card" data-framework="signB">
            <img class="front-face" src="bee.png" alt="signB" />
            <div class="back-face"></div>
          </div>
          <div class="memory-card" data-framework="signB">
            <img class="front-face" src="bee.png" alt="signB" />
            <div class="back-face"></div>
          </div>

          <div class="memory-card" data-framework="signC">
            <img class="front-face" src="flower.png" alt="signC" />
            <div class="back-face"></div>
          </div>
          <div class="memory-card" data-framework="signC">
            <img class="front-face" src="flower.png" alt="signC" />
            <div class="back-face"></div>
          </div>

          <div class="memory-card" data-framework="signD">
            <img class="front-face" src="home.png" alt="signD" />
            <div class="back-face"></div>
          </div>
          <div class="memory-card" data-framework="signD">
            <img class="front-face" src="home.png" alt="signD" />
            <div class="back-face"></div>
          </div>

          <div class="memory-card" data-framework="signE">
            <img class="front-face" src="mail.png" alt="signE" />
            <div class="back-face"></div>
          </div>
          <div class="memory-card" data-framework="signE">
            <img class="front-face" src="mail.png" alt="signE" />
            <div class="back-face"></div>
          </div>

          <div class="memory-card" data-framework="signG">
            <img class="front-face" src="paper.png" alt="signG" />
            <div class="back-face"></div>
          </div>
          <div class="memory-card" data-framework="signG">
            <img class="front-face" src="paper.png" alt="signG" />
            <div class="back-face"></div>
          </div>
        </section>

      </div>
  )
}