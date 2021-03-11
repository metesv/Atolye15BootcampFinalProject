import { names } from "./data/names.js";

const gameStartBtn = document.querySelector("#game-start-btn");
const computerInput = document.querySelector("#computer-input");
const userInput = document.querySelector("#user-input");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const nameDatas = names;
  let currentAnswer = "";
  const computerAnswers = [];
  const userAnswers = [];
  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.lang = "tr-TR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  gameStartBtn.addEventListener("click", () => {
    let initialComputerAnswer = names[Math.floor(Math.random() * names.length)];

    currentAnswer = initialComputerAnswer.charAt(
      initialComputerAnswer.length - 1
    );
    computerInput.value = initialComputerAnswer;
    recordUser();
  });

  recognition.addEventListener("result", (e) => {
    let result = e.results[0][0].transcript.toLowerCase();
    if (currentAnswer === result.charAt(0)) {
      userInput.value = result;
      userAnswers.push(result);
      currentAnswer = result.charAt(result.length - 1);
    } else {
      alert("you lose");
    }
    setTimeout(() => {
      computerInput.value = computerAnswer(currentAnswer);
    }, 1500);
  });

  function recordUser() {
    recognition.start();
    console.log("started");
    setTimeout(() => {
      recognition.stop();
      console.log("ended");
    }, 5000);
  }

  function computerAnswer(firstChar) {
    const found = names.find(
      (element) =>
        element.charAt(0) === firstChar && !computerAnswers.includes(element)
    );
    computerAnswers.push(found);
    return found;
  }
} else {
  alert("Your browser does not support this app");
}
