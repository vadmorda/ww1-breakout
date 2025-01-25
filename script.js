document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');

    // Helper function to set the active page
    const setActivePage = (pageId) => {
        pages.forEach(page => page.classList.add('hidden'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }
    };
  
    // Start Game: Go to the first challenge
    window.startGame = () => {
        setActivePage('challenge-1');
    };

    // Initialize: Show only the first page on load
    setActivePage('page-intro');
  
      // Ensure "nextPage" works for the button
window.nextPage = (currentPageId, nextPageId) => {{
    console.log(`Switching from ${currentPageId} to ${nextPageId}`);
  const currentPage = document.getElementById(currentPageId);
    const nextPage = document.getElementById(nextPageId);

    if (currentPage) currentPage.classList.add('hidden'); // Oculta la página actual
    if (nextPage) nextPage.classList.remove('hidden');    // Muestra la siguiente página
};
    // Quiz Questions for Challenge 1
    const questions = [
        {
            question: "What policy did Great Britain adopt in 1889?",
            answers: ["Two Power Standard", "Naval Expansion Act", "Empire Building"],
            correct: "Two Power Standard"
        },
        {
            question: "Who was the German Admiral in 1897?",
            answers: ["Alfred von Tirpitz", "Otto von Bismarck", "Wilhelm II"],
            correct: "Alfred von Tirpitz"
        },
        {
            question: "Which alliance included Germany, Austria, and Italy?",
            answers: ["Triple Alliance", "Triple Entente", "Dual Alliance"],
            correct: "Triple Alliance"
        },
        {
            question: "What sparked the beginning of World War I?",
            answers: ["Franz Ferdinand's assassination", "Naval race", "Alsace-Lorraine conflict"],
            correct: "Franz Ferdinand's assassination"
        },
        {
            question: "What naval policy required Britain to have a navy as powerful as the next two combined?",
            answers: ["Two Power Standard", "Naval Arms Strategy", "Maritime Supremacy Plan"],
            correct: "Two Power Standard"
        },
        {
            question: "What did Admiral von Tirpitz advocate for in 1897?",
            answers: ["Building battleships", "Expanding colonies", "Strengthening alliances"],
            correct: "Building battleships"
        },
        {
            question: "Which countries formed the Triple Entente by 1907?",
            answers: ["France, Britain, and Russia", "Germany, Austria, and Italy", "Britain, France, and Germany"],
            correct: "France, Britain, and Russia"
        },
        {
            question: "Why was the Franco-Prussian War significant to French nationalism?",
            answers: ["It led to the loss of Alsace-Lorraine", "It resulted in the creation of the Triple Entente", "It ended French imperialism"],
            correct: "It led to the loss of Alsace-Lorraine"
        },
        {
            question: "What colonial crisis involved Germany challenging French control?",
            answers: ["The Moroccan Crisis", "The Berlin Conference", "The Balkans Dispute"],
            correct: "The Moroccan Crisis"
        },
        {
            question: "What was the name of the Serbian nationalist group involved in the assassination of Franz Ferdinand?",
            answers: ["The Black Hand", "The Red Guard", "The Serbian Front"],
            correct: "The Black Hand"
        },
        {
            question: "Why did alliances before World War I make conflicts more dangerous?",
            answers: ["They increased the likelihood of a global war", "They focused on industrial growth", "They reduced colonial disputes"],
            correct: "They increased the likelihood of a global war"
        },
        {
            question: "What was Germany's main motivation for wanting colonies?",
            answers: ["A 'place in the sun'", "Cultural exchange", "Avoiding alliances"],
            correct: "A 'place in the sun'"
        },
        {
            question: "Which country was most concerned with protecting its colonial empire?",
            answers: ["Great Britain", "Germany", "France"],
            correct: "Great Britain"
        },
        {
            question: "What ideology encouraged Balkan independence from Austria-Hungary?",
            answers: ["Nationalism", "Colonialism", "Industrialism"],
            correct: "Nationalism"
        },
        {
            question: "What was the German Empire's key victory in the Franco-Prussian War?",
            answers: ["Annexing Alsace-Lorraine", "Creating the Black Hand", "Winning the Berlin Conference"],
            correct: "Annexing Alsace-Lorraine"
        }
    ];

    let currentQuestionIndex = 0;

    // Function to shuffle answers randomly
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Load quiz question
    const loadQuiz = () => {
        const questionElement = document.getElementById('question-text');
        const answersElement = document.getElementById('answers');
        questionElement.textContent = questions[currentQuestionIndex].question;
        answersElement.innerHTML = '';

        // Shuffle answers before displaying
        const shuffledAnswers = shuffleArray([...questions[currentQuestionIndex].answers]);
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-option');
            button.onclick = () => selectAnswer(answer);
            answersElement.appendChild(button);
        });
    };

    // Handle answer selection
    const selectAnswer = (answer) => {
        if (answer === questions[currentQuestionIndex].correct) {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuiz();
            } else {
                alert("Jacques successfully reaches his officer!");
                setActivePage('transition-page');
            }
        } else {
            alert("Incorrect! Try again.");
        }
    };

    // Functions for Reto 2 Challenges
    window.checkAnswer = (formName, currentPageId, nextPageId, digit) => {
        const form = document.getElementsByName(formName);
        const selected = Array.from(form).find(input => input.checked);
        if (selected && selected.value === 'correct') {
            alert(`Correct! Your code digit is: ${digit}`);
            setActivePage(nextPageId);
        } else {
            alert('Incorrect! Try again.');
        }
    };

    // Function to verify the 6-digit code
    window.checkCode = (correctCode, currentPageId, nextPageId) => {
        const inputs = Array.from(document.querySelectorAll('#reto-2-code input'));
        const userCode = inputs.map(input => input.value).join('');
        if (userCode === correctCode) {
            alert('Correct code! Moving on...');
            setActivePage(nextPageId);
        } else {
            alert('Incorrect code! Try again.');
        }
    };

    // Load the first quiz question
    loadQuiz();
});
  // Variables for Reto 2
let reto2Questions = [
    {
        question: "How were the Triple Alliance countries known in 1915?",
        correctAnswer: "centralpowers",
    },
    {
        question: "How were the Triple Entente countries known in 1915?",
        correctAnswer: ["allies", "theallies"],
    },
    {
        question: "Which European power left the Triple Alliance before the war started?",
        correctAnswer: "italy",
    },
    {
        question: "Which two eastern powers joined the Central Powers during the war?",
        correctAnswer: "bulgariaandottomanempire",
        options: [
            "Bulgaria and Ottoman Empire",
            "Romania and Portugal",
            "Serbia and Greece",
        ],
    },
];
let currentReto2Index = 0;

// Function to start Reto 2
const startReto2 = () => {
    const gifContainer = document.getElementById("gif-container");
    const questionsContainer = document.getElementById("questions-container");

    setTimeout(() => {
        gifContainer.classList.add("hidden");
        questionsContainer.classList.remove("hidden");
        loadReto2Question();
    }, 120000); // 2 minutes
};

// Function to load Reto 2 questions
const loadReto2Question = () => {
    const questionText = document.getElementById("question-text");
    const answerInput = document.getElementById("answer-input");
    const currentQuestion = reto2Questions[currentReto2Index];

    questionText.textContent = currentQuestion.question;
    answerInput.value = "";

    // Show options for multiple-choice questions
    if (currentQuestion.options) {
        const optionsHtml = currentQuestion.options
            .map(
                (option) =>
                    `<label><input type="radio" name="reto2-option" value="${option}"> ${option}</label><br>`
            )
            .join("");
        questionText.innerHTML += `<div>${optionsHtml}</div>`;
    }
};

// Function to handle answer submission
const submitAnswer = () => {
    const currentQuestion = reto2Questions[currentReto2Index];
    let userAnswer;

    if (currentQuestion.options) {
        const selectedOption = document.querySelector(
            'input[name="reto2-option"]:checked'
        );
        if (selectedOption) {
            userAnswer = selectedOption.value.toLowerCase().replace(/\s+/g, "");
        }
    } else {
        const answerInput = document.getElementById("answer-input");
        userAnswer = answerInput.value.toLowerCase().replace(/\s+/g, "");
    }

    if (currentQuestion.correctAnswer.includes(userAnswer)) {
        currentReto2Index++;
        if (currentReto2Index < reto2Questions.length) {
            loadReto2Question();
        } else {
            alert("You have completed Challenge 2!");
            nextPage("reto-2", "reto-3"); // Move to Challenge 3
        }
    } else {
        alert("Incorrect! Try again.");
    }
};

// Initialize Reto 2
document.getElementById("reto-2").addEventListener("load", startReto2);
  document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;

    const questions = [
        {
            question: "How was the Triple Alliance known by 1915?",
            answer: "central powers",
            type: "text"
        },
        {
            question: "How was the Triple Entente known by 1915?",
            answer: ["allies", "the allies"],
            type: "text"
        },
        {
            question: "Which European power left the Triple Alliance before the war began?",
            answer: "italy",
            type: "text"
        },
        {
            question: "Which two eastern powers joined the Central Powers during the war?",
            answer: "bulgaria and ottoman empire",
            type: "multiple",
            options: [
                "Bulgaria and Ottoman Empire",
                "Serbia and Romania",
                "Greece and Albania"
            ]
        },
        // Add more questions here if needed
    ];

    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const errorMessage = document.getElementById('error-message');
    const nextButton = document.getElementById('next-button');

    const loadQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        answersContainer.innerHTML = '';
        errorMessage.classList.add('hidden');
        nextButton.classList.add('hidden');

        if (currentQuestion.type === "text") {
            const input = document.createElement('input');
            input.type = "text";
            input.id = "user-answer";
            answersContainer.appendChild(input);

            const submit = document.createElement('button');
            submit.textContent = "Submit";
            submit.classList.add('button');
            submit.onclick = checkTextAnswer;
            answersContainer.appendChild(submit);
        } else if (currentQuestion.type === "multiple") {
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('answer-option');
                button.onclick = () => checkMultipleChoice(option);
                answersContainer.appendChild(button);
            });
        }
    };

    const checkTextAnswer = () => {
        const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (
            (Array.isArray(correctAnswer) && correctAnswer.includes(userAnswer)) ||
            userAnswer === correctAnswer
        ) {
            nextButton.classList.remove('hidden');
        } else {
            errorMessage.classList.remove('hidden');
        }
    };

    const checkMultipleChoice = (selected) => {
        if (selected === questions[currentQuestionIndex].answer) {
            nextButton.classList.remove('hidden');
        } else {
            errorMessage.classList.remove('hidden');
        }
    };

    window.loadNextQuestion = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            nextPage('reto-3-questions', 'reto-3-transition');
        }
    };

    // Load the first question
    loadQuestion();
});

