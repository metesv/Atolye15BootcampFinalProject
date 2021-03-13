import { names } from "./data/names.js";

const gameStartBtn = document.querySelector("#game-start-btn");
const computerInput = document.querySelector("#computer-input");
const userInput = document.querySelector("#user-input");
const turnTitle = document.querySelector("#turn-title");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  let currentLastChar = "";
  let userAnswer = "";
  let recognize = false;
  const computerAnswers = [];
  const userAnswers = [];

  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.lang = "tr-TR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  gameStartBtn.addEventListener("click", () => {
    let initialComputerAnswer = names[Math.floor(Math.random() * names.length)];

    currentLastChar = initialComputerAnswer.charAt(
      initialComputerAnswer.length - 1
    );
    computerAnswers.push(initialComputerAnswer);
    computerInput.value = initialComputerAnswer;
    recordUser();
  });

  recognition.addEventListener("result", (e) => {
    userAnswer = e.results[0][0].transcript.toLowerCase();
    userInput.value = userAnswer;
    turnTitle.textContent = "Computer Turn!";
    if (checkUserAnswer(userAnswer)) {
      changeTurn();
    } else {
      alert("Wrong answer");
    }
  });

  function recordUser() {
    recognition.start();
    recognize = true;
    console.log("started");
    turnTitle.textContent = "Your Turn!";
    gameStartBtn.disabled = true;
    setTimeout(() => {
      recognition.stop();
      recognize = false;
    }, 8000);
  }

  function changeTurn() {
    computerInput.value = computerAnswer(userAnswer);
    setInterval(() => {
      if (!recognize) {
        recordUser();
      }
    }, 1500);
  }

  function computerAnswer(result) {
    const firstChar = result.charAt(result.length - 1);
    const found = names.find(
      (element) =>
        element.charAt(0) === firstChar && !computerAnswers.includes(element)
    );
    computerAnswers.push(found);
    currentLastChar = found.charAt(found.length - 1);
    return found;
  }

  function checkUserAnswer(result) {
    if (currentLastChar === result.charAt(0)) {
      userAnswers.push(result);
      currentLastChar = result.charAt(result.length - 1);
      console.log(userAnswers);
      console.log(computerAnswers);
      return true;
    } else {
      return false;
    }
  }
} else {
  alert("Your browser does not support this app");
}
