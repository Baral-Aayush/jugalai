const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang="GB-EN"

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr>=0 && hr<12) {
        speak("Good Morning, How can I help you");
    }

    else if(hr>=12 && hr<4){
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Jugal");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello') || message.includes('hi') || message.includes('hi jugal')) {
        const finalText = "Hello dear, How can i help you";
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine, What about you?";
        speech.text = finalText;
    }

    else if(message.includes('jugal team')) {
        const finalText = "Jugal team is the team of Mrs Aayush Baral along with others two members prabin and Saurav. where they collaboratively work on diverse programming projects and other computer-related endeavors. Their team thrives on innovation and teamwork, consistently pushing the boundaries of our technical capabilities.";
        speech.text = finalText;
    }

    else if(message.includes('who are you')) {
        const finalText = "I am your virtual assistance,jugal";
        speech.text = finalText;
    }

    else if(message.includes('made')) {
        const finalText = "Jugal Team Members made me";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is jugal";
        speech.text = finalText;
    }
        else if(message.includes('Aayush Baral')) {
        const finalText = "Hello, I'm Aayush Baral, and I reside in the vibrant town of Lalbandi, Sarlahi. As the Admin of Jugal Team, I lead a dynamic group of three passionate individuals, where we collaboratively work on diverse programming projects and other computer-related endeavors. Our team thrives on innovation and teamwork, consistently pushing the boundaries of our technical capabilities.

Currently, I am a student at Shree Janajyoti Model School, where I am dedicated to excelling academically and honing my skills in various aspects of technology and programming. My educational journey at this esteemed institution has been incredibly enriching, providing me with the knowledge and foundation to pursue my interests and ambitions in the tech world.

Being part of Jugal Team allows me to apply my theoretical learning to practical projects, enhancing my problem-solving skills and fostering a deeper understanding of the technological landscape. Together, we aim to make significant contributions to the field and continually strive for excellence in our projects.";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
        else if(message.includes('open chat gpt')) {
        window.open("https://chatgpt.com/", "_blank");
        const finalText = "Opening ChatGPT";
        speech.text = finalText;
        }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.lang="GB-EN"

    window.speechSynthesis.speak(speech);
}
