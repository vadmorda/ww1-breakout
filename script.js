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

    const loadQuiz = () => {
        const questionElement = document.getElementById('question-text');
        const answersElement = document.getElementById('answers');
        questionElement.textContent = questions[currentQuestionIndex].question;
        answersElement.innerHTML = '';

        questions[currentQuestionIndex].answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-option');
            button.onclick = () => selectAnswer(answer);
            answersElement.appendChild(button);
        });
    };

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
