import Game from "./Game.js";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  const goGameBtn = document.querySelector("#go-game-btn");
  const difficultyForm = document.querySelector(".difficulty-form");

  window.addEventListener("load", (e) => {
    if (localStorage.getItem("highScores") === null) {
      const highScores = {
        easy: 0,
        medium: 0,
        hard: 0,
      };

      localStorage.setItem("highScores", JSON.stringify(highScores));
    }
    const highScores = JSON.parse(localStorage.getItem("highScores"));
    const ul = document.createElement("ul");
    ul.setAttribute("class", "high-scores-list");
    ul.innerHTML = `<li>Easy: ${highScores.easy}</li>
                    <li>Medium: ${highScores.medium}</li>
                    <li>Hard: ${highScores.hard}</li>`;
    document.body.appendChild(ul);
  });

  goGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    difficultyForm.style.display = "none";
    goGameBtn.textContent = "Play Again";
    const difficultyLevel = Number(
      document.querySelector('input[name="level"]:checked').value
    );
    if (document.querySelector(".game-div") !== null) {
      document.querySelector(".game-div").remove();
    }
    const game = new Game(recognition, difficultyLevel);
    game.init();
  });
} else {
  alert("Your browser does not support this app");
}
