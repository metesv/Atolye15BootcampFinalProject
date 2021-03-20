import { names } from "./data/names.js";

export default class Game {
  constructor(recognition) {
    this.recognition = recognition;
    recognition.continuous = false;
    recognition.lang = "tr-TR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    this.currentLastChar = "";
    this.userAnswer = "";
    this.recognize = false;
    this.computerAnswers = [];
    this.userAnswers = [];

    this.gameStartBtn = null;
    this.computerInput = null;
    this.userInput = null;
    this.turnTitle = null;
  }

  initEventListeners() {
    this.gameStartBtn.addEventListener("click", () => {
      let initialComputerAnswer =
        names[Math.floor(Math.random() * names.length)];

      this.currentLastChar = initialComputerAnswer.charAt(
        initialComputerAnswer.length - 1
      );
      this.computerAnswers.push(initialComputerAnswer);
      this.createNewLi("pc", initialComputerAnswer);
      this.computerInput.value = initialComputerAnswer;
      this.recordUser();
    });

    this.recognition.addEventListener("result", (e) => {
      this.userAnswer = e.results[0][0].transcript.toLowerCase();
      this.userInput.value = this.userAnswer;
      this.turnTitle.textContent = "Computer Turn!";
      if (this.checkUserAnswer(this.userAnswer)) {
        this.changeTurn();
      } else {
        alert("Wrong answer");
      }
    });
  }

  recordUser() {
    this.recognition.start();
    this.recognize = true;
    console.log("started");
    this.turnTitle.textContent = "Your Turn!";
    this.gameStartBtn.disabled = true;
    setTimeout(() => {
      this.recognition.stop();
      this.recognize = false;
    }, 8000);
  }

  changeTurn() {
    this.computerInput.value = this.computerAnswer(this.userAnswer);
    setInterval(() => {
      if (!this.recognize) {
        this.recordUser();
      }
    }, 1500);
  }

  computerAnswer(result) {
    const firstChar = result.charAt(result.length - 1);
    const found = names.find(
      (element) =>
        element.charAt(0) === firstChar &&
        !this.computerAnswers.includes(element)
    );
    this.computerAnswers.push(found);
    this.createNewLi("pc", found);
    this.currentLastChar = found.charAt(found.length - 1);
    return found;
  }

  checkUserAnswer(result) {
    if (this.currentLastChar === result.charAt(0)) {
      this.userAnswers.push(result);
      this.createNewLi("user", result);
      this.currentLastChar = result.charAt(result.length - 1);
      console.log(this.userAnswers);
      console.log(this.computerAnswers);
      return true;
    } else {
      return false;
    }
  }

  createNewLi(who, value) {
    const li = document.createElement("li");
    li.textContent = value;
    if (who === "user") {
      this.userAnswersList.appendChild(li);
    }
    if (who === "pc") {
      this.computerAnswersList.appendChild(li);
    }
  }

  initUI() {
    const body = document.body;
    const div = document.createElement("div");
    div.innerHTML = `<h1 id="turn-title"></h1>
                      <input type="text" value="" name="user-input" id="user-input" />
                      <br />
                      <hr />
                      <button id="game-start-btn">Start Game</button>
                      <br />
                      <hr />
                      <input type="text" value="" name="computer-input" id="computer-input" />
                      <ol id="user-answers-list"></ol>
                      <ol id="cp-answers-list"></ol>`;
    body.appendChild(div);
  }

  initSelectors() {
    this.gameStartBtn = document.querySelector("#game-start-btn");
    this.computerInput = document.querySelector("#computer-input");
    this.userInput = document.querySelector("#user-input");
    this.turnTitle = document.querySelector("#turn-title");
    this.userAnswersList = document.querySelector("#user-answers-list");
    this.computerAnswersList = document.querySelector("#cp-answers-list");
  }

  init() {
    this.initUI();
    this.initSelectors();
    this.initEventListeners();
  }
}
