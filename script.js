import Game from "./Game.js";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  const game = new Game(recognition);
  game.init();
} else {
  alert("Your browser does not support this app");
}
