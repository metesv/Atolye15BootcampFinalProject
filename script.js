import { names } from "./data/testnames.js";

const button = document.querySelector("button");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

if (SpeechRecognition) {
  const nameDatas = names;
  const grammar =
    "#JSGF V1.0; grammar nameDatas; public <nameData> = " +
    nameDatas.join(" | ") +
    " ;";
  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = "tr-TR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  button.addEventListener("click", () => {
    recognition.start();
    console.log("started");
    setTimeout(() => {
      recognition.stop();
      console.log("ended");
    }, 5000);
  });
  recognition.addEventListener("result", (e) => {
    console.log(e.results[0][0].transcript, e.results[0][0].confidence);
  });
} else {
  alert("Your browser does not support this app");
}
