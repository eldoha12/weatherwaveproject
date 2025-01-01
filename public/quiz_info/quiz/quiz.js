const questions = [
    {
        question: "Quelle est la température moyenne sur Terre ?",
        options: ["15°C", "20°C", "25°C", "30°C"],
        answer: "15°C"
    },
    {
        question: "Quel est le phénomène météorologique associé à une pression atmosphérique basse ?",
        options: ["Tempête", "Anticyclone", "Cyclone", "Ciel dégagé"],
        answer: "Tempête"
    },
    {
        question: "Qu'est-ce que le phénomène El Niño ?",
        options: ["Un réchauffement des océans", "Une baisse de température en Europe", "Un événement géologique", "Un type de vent"],
        answer: "Un réchauffement des océans"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsElement.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    const listItems = optionsElement.getElementsByTagName('li');

    if (selectedOption === correctAnswer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // Highlight the correct answer and show it
        for (let li of listItems) {
            if (li.textContent === correctAnswer) {
                li.style.backgroundColor = '#4CAF50';  // Green for correct answer
            }
            li.style.pointerEvents = 'none';  // Disable further clicks
        }
        setTimeout(() => {
            nextButton.style.display = 'inline-block';
        }, 1000);  // Wait 1 second before showing the next button
    }

    nextButton.onclick = () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
            nextButton.style.display = 'none';
        } else {
            questionElement.textContent = 'Quiz terminé!';
            optionsElement.innerHTML = '';
            nextButton.style.display = 'none';
        }
    };
}

loadQuestion();
