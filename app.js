const button = document.querySelector('button');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('starting speech recognition');
}

recognition.onresult = function (event) {
    console.log(event);


    const spokenWords = event.results[0][0].transcript;
    console.log("spokenWords are", spokenWords);
    computerSpeech(spokenWords)
}

function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    // speech.lang = "en=US"
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;

    // speech.text = words;

    determineWords(speech, words);

    window.speechSynthesis.speak(speech);

}

function determineWords(speech, words) {



    if (words.includes('google')) {
        speech.text = "opening google for you now, thank you"
        window.open('https://www.google.com');
    }
    if (words.includes('how are you')) {
        speech.text = "i am fine , thank you"
    }
}


button.addEventListener('click', () => {
    recognition.start();
})
