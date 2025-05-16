// Enhanced IPL Quiz Questions with images and explanations
const questions = [
    {
        question: "Which team won the first IPL season in 2008?",
        answers: [
            { text: "Mumbai Indians", correct: false },
            { text: "Chennai Super Kings", correct: false },
            { text: "Rajasthan Royals", correct: true },
            { text: "Kolkata Knight Riders", correct: false }
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",
        explanation: "Rajasthan Royals, led by Shane Warne, won the inaugural IPL season by defeating Chennai Super Kings in the final."
    },
    {
        question: "Who holds the record for most runs in IPL history?",
        answers: [
            { text: "Virat Kohli", correct: true },
            { text: "Suresh Raina", correct: false },
            { text: "Rohit Sharma", correct: false },
            { text: "David Warner", correct: false }
        ],
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png",
        explanation: "Virat Kohli has scored over 6,000 runs in IPL, the most by any batsman. He achieved this milestone playing for Royal Challengers Bangalore."
    },
    {
        question: "Which bowler has taken the most wickets in a single IPL season?",
        answers: [
            { text: "Lasith Malinga", correct: false },
            { text: "Dwayne Bravo", correct: false },
            { text: "Kagiso Rabada", correct: false },
            { text: "Harshal Patel", correct: true }
        ],
        image: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c244980/harshal-patel.jpg",
        explanation: "Harshal Patel took 32 wickets in the 2021 season, equaling Dwayne Bravo's record for most wickets in a single IPL season."
    },
    {
        question: "Which team has won the most IPL titles?",
        answers: [
            { text: "Mumbai Indians", correct: true },
            { text: "Chennai Super Kings", correct: false },
            { text: "Kolkata Knight Riders", correct: false },
            { text: "Sunrisers Hyderabad", correct: false }
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
        explanation: "Mumbai Indians have won the IPL 5 times (2013, 2015, 2017, 2019, 2020), the most by any team."
    },
    {
        question: "Who scored the first century in IPL history?",
        answers: [
            { text: "Brendon McCullum", correct: true },
            { text: "Chris Gayle", correct: false },
            { text: "Adam Gilchrist", correct: false },
            { text: "Virender Sehwag", correct: false }
        ],
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316429.png",
        explanation: "Brendon McCullum scored 158* off 73 balls for KKR against RCB in the very first IPL match in 2008."
    },
    {
        question: "Which player has won the most 'Player of the Match' awards in IPL?",
        answers: [
            { text: "AB de Villiers", correct: true },
            { text: "Chris Gayle", correct: false },
            { text: "MS Dhoni", correct: false },
            { text: "Rohit Sharma", correct: false }
        ],
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319912.png",
        explanation: "AB de Villiers has won 25 Player of the Match awards in IPL, the most by any player."
    },
    {
        question: "What is the highest team total in IPL history?",
        answers: [
            { text: "263/5 by Royal Challengers Bangalore", correct: true },
            { text: "248/3 by Chennai Super Kings", correct: false },
            { text: "246/5 by Kolkata Knight Riders", correct: false },
            { text: "235/1 by Mumbai Indians", correct: false }
        ],
        image: "https://m.cricbuzz.com/a/img/v1/595x396/i1/c244980/chinnaswamy-stadium-bengaluru.jpg",
        explanation: "RCB scored 263/5 against Pune Warriors in 2013, with Chris Gayle scoring 175* off just 66 balls."
    },
    {
        question: "Which team was involved in the 'Spirit of Cricket' controversy in 2019?",
        answers: [
            { text: "Kings XI Punjab", correct: false },
            { text: "Rajasthan Royals", correct: true },
            { text: "Delhi Capitals", correct: false },
            { text: "Sunrisers Hyderabad", correct: false }
        ],
        image: "https://m.cricbuzz.com/a/img/v1/595x396/i1/c244980/ravichandran-ashwin.jpg",
        explanation: "The incident involved RR's Jos Buttler being 'Mankaded' by KXIP's R Ashwin, sparking a huge controversy about sportsmanship."
    },
    {
        question: "Who is the only bowler to take two hat-tricks in IPL?",
        answers: [
            { text: "Amit Mishra", correct: true },
            { text: "Yuvraj Singh", correct: false },
            { text: "Lasith Malinga", correct: false },
            { text: "Sunil Narine", correct: false }
        ],
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316415.png",
        explanation: "Amit Mishra has taken three IPL hat-tricks (for DC and SRH), the most by any bowler."
    },
    {
        question: "Which of these players has never captained an IPL team?",
        answers: [
            { text: "Sachin Tendulkar", correct: false },
            { text: "Rahul Dravid", correct: false },
            { text: "Virat Kohli", correct: false },
            { text: "AB de Villiers", correct: true }
        ],
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319912.png",
        explanation: "Despite being one of IPL's greatest players, AB de Villiers has never captained an IPL team regularly."
    }
];

// DOM elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const resultsElement = document.getElementById('results');
const finalScoreElement = document.getElementById('final-score');
const totalQuestionsFinalElement = document.getElementById('total-questions-final');
const answersContainerElement = document.getElementById('answers-container');
const restartButton = document.getElementById('restart-btn');
const progressBarElement = document.getElementById('progress-bar');
const scoreMessageElement = document.getElementById('score-message');
const confettiContainer = document.getElementById('confetti-container');

// Quiz variables
let shuffledQuestions, currentQuestionIndex;
let score = 0;
let timeLeft = 60;
let timer;
let userAnswers = [];

// Event listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', restartGame);

// Start the quiz
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = shuffledQuestions.length;
    questionContainerElement.classList.remove('hide');
    resultsElement.classList.add('hide');
    
    // Start timer
    timeLeft = 60;
    timerElement.innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
    
    setNextQuestion();
}

// Update timer
function updateTimer() {
    timeLeft--;
    timerElement.innerText = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

// Set next question
function setNextQuestion() {
    resetState();
    if (currentQuestionIndex >= shuffledQuestions.length) {
        clearInterval(timer);
        endGame();
        return;
    }
    
    // Update progress bar
    const progressPercent = (currentQuestionIndex / shuffledQuestions.length) * 100;
    progressBarElement.style.width = `${progressPercent}%`;
    
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Display question
function showQuestion(question) {
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Reset state for next question
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    
    // Store user answer
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const userAnswer = {
        question: currentQuestion.question,
        userChoice: selectedButton.innerText,
        correctAnswer: currentQuestion.answers.find(ans => ans.correct).text,
        isCorrect: correct,
        image: currentQuestion.image,
        explanation: currentQuestion.explanation
    };
    userAnswers.push(userAnswer);
    
    // Disable all buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });
    
    if (correct) {
        score++;
        scoreElement.innerText = score;
    }
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

// End the game
function endGame() {
    questionContainerElement.classList.add('hide');
    resultsElement.classList.remove('hide');
    finalScoreElement.innerText = score;
    totalQuestionsFinalElement.innerText = shuffledQuestions.length;
    
    // Display all answers with explanations
    displayAllAnswers();
    
    // Set score message
    setScoreMessage();
    
    // Show confetti if score is good
    if (score >= shuffledQuestions.length * 0.7) {
        createConfetti();
    }
}

// Display all answers in the results section
function displayAllAnswers() {
    answersContainerElement.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('answer-item');
        if (answer.isCorrect) {
            answerItem.classList.add('correct-answer');
        } else {
            answerItem.classList.add('wrong-answer');
        }
        
        answerItem.innerHTML = `
            <div class="answer-question">Q${index + 1}: ${answer.question}</div>
            <div class="answer-user ${answer.isCorrect ? 'correct' : ''}">
                <i class="fas ${answer.isCorrect ? 'fa-check' : 'fa-times'}"></i>
                Your answer: ${answer.userChoice}
            </div>
            ${!answer.isCorrect ? `
            <div class="answer-correct">
                <i class="fas fa-check-double"></i>
                Correct answer: ${answer.correctAnswer}
            </div>` : ''}
            ${answer.image ? `
            <div class="answer-image">
                <img src="${answer.image}" alt="Answer illustration">
            </div>` : ''}
            <div class="answer-explanation">
                ${answer.explanation}
            </div>
        `;
        
        answersContainerElement.appendChild(answerItem);
    });
}

// Set score message based on performance
function setScoreMessage() {
    const percentage = (score / shuffledQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = 'IPL Genius! You know everything about the tournament!';
    } else if (percentage >= 70) {
        message = 'Great Job! You\'re a true IPL fan!';
    } else if (percentage >= 50) {
        message = 'Good Effort! Brush up on your IPL knowledge!';
    } else {
        message = 'Keep watching IPL to improve your knowledge!';
    }
    
    scoreMessageElement.textContent = message;
}

// Create confetti animation
function createConfetti() {
    // Clear any existing confetti
    confettiContainer.innerHTML = '';
    
    // Create 100 confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random properties
        const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        
        confetti.style.backgroundColor = color;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${left}%`;
        confetti.style.animationDuration = `${animationDuration}s`;
        confetti.style.opacity = '1';
        
        // Random shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Add CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
@keyframes confetti-fall {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.confetti {
    position: absolute;
    animation: confetti-fall linear forwards;
}
`;
document.head.appendChild(style);

// Restart the game
function restartGame() {
    resultsElement.classList.add('hide');
    startGame();
}