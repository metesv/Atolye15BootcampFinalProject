import Game from "./Game.js";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  const goGameBtn = document.querySelector("#go-game-btn");
  const difficultyForm = document.querySelector("#difficulty-form");
  goGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    difficultyForm.style.display = "none";
    const difficultyLevel = Number(
      document.querySelector('input[name="level"]:checked').value
    );
    const game = new Game(recognition, difficultyLevel);
    game.init();
  });
} else {
  alert("Your browser does not support this app");
}
