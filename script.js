document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");

  // Función para cambiar la página activa
  const setActivePage = (pageId) => {
    pages.forEach((page) => page.classList.remove("active"));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  };

  // Función para iniciar el juego desde la página inicial
  window.startGame = () => {
    setActivePage("challenge-1");
    loadReto1Question();
  };

  // Manejo del botón de transición entre retos
  document.getElementById("to-challenge-2").onclick = () => {
    setActivePage("challenge-2");
  };

  // Preguntas del reto 1
  const reto1Questions = [
    {
      question: "What policy did Great Britain adopt in 1889 to maintain naval superiority?",
      answers: ["Two Power Standard", "Naval Arms Act", "Imperial Defense Strategy"],
      correct: "Two Power Standard",
    },
    {
      question: "Which German admiral advocated for a stronger navy to rival Britain?",
      answers: ["Alfred von Tirpitz", "Otto von Bismarck", "Wilhelm II"],
      correct: "Alfred von Tirpitz",
    },
    {
      question: "What was Kaiser Wilhelm II's approach to imperialism called?",
      answers: ["Weltpolitik", "Lebensraum", "Pax Germania"],
      correct: "Weltpolitik",
    },
    {
      question: "Which war conference in 1912 showed Germany's preparation for war?",
      answers: ["German War Conference", "Congress of Vienna", "Berlin Conference"],
      correct: "German War Conference",
    },
    {
      question: "What was the alliance between Germany, Austria-Hungary, and Italy called?",
      answers: ["Triple Alliance", "Triple Entente", "Central Powers"],
      correct: "Triple Alliance",
    },
    {
      question: "By what year had France, Britain, and Russia formed the Triple Entente?",
      answers: ["1907", "1897", "1912"],
      correct: "1907",
    },
    {
      question: "What colonial rivalry between Germany and France almost led to war?",
      answers: ["Moroccan Crises", "Alsace-Lorraine Conflict", "Berlin Conference"],
      correct: "Moroccan Crises",
    },
    {
      question: "Which territories did Germany annex after the Franco-Prussian War?",
      answers: ["Alsace and Lorraine", "Saarland and Rhineland", "Bohemia and Moravia"],
      correct: "Alsace and Lorraine",
    },
    {
      question: "What nationalist organization was Gavrilo Princip a member of?",
      answers: ["The Black Hand", "The Iron Guard", "The Serbian League"],
      correct: "The Black Hand",
    },
    {
      question: "What term describes France's desire for revenge after losing Alsace-Lorraine?",
      answers: ["Revanchism", "Imperialism", "Nationalism"],
      correct: "Revanchism",
    },
  ];

  let currentReto1Index = 0;

  // Función para cargar preguntas del reto 1
  const loadReto1Question = () => {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("answers");

    if (!questionElement || !answersElement) return;

    const question = reto1Questions[currentReto1Index];
    questionElement.textContent = question.question;

    // Mezclar respuestas
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
    answersElement.innerHTML = "";

    shuffledAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer-option");
      button.onclick = () => checkReto1Answer(answer, question.correct);
      answersElement.appendChild(button);
    });
  };

  // Validar respuesta seleccionada
  const checkReto1Answer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      currentReto1Index++;
      if (currentReto1Index < reto1Questions.length) {
        loadReto1Question();
      } else {
        alert("You have completed Challenge 1!");
        setActivePage("transition-page");
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };

  document.getElementById("challenge-1").addEventListener("load", loadReto1Question);

  // Preguntas del reto 2
  const reto2Questions = [
    {
      question: "How were the Triple Alliance countries known in 1915?",
      answers: ["Central Powers", "Triple Entente", "Allied Forces"],
      correct: "Central Powers",
    },
    {
      question: "How were the Triple Entente countries known in 1915?",
      answers: ["Central Powers", "The Allies", "Eastern Bloc"],
      correct: "The Allies",
    },
    {
      question: "Which European power left the Triple Alliance before the war started?",
      answers: ["Italy", "Austria-Hungary", "Germany"],
      correct: "Italy",
    },
    {
      question: "Which two eastern powers joined the Central Powers during the war?",
      answers: ["Bulgaria and Ottoman Empire", "Romania and Portugal", "Serbia and Greece"],
      correct: "Bulgaria and Ottoman Empire",
    },
  ];

  let currentReto2Index = 0;

  const startChallenge2 = () => {
    const mapContainer = document.getElementById("map-container");
    const questionsContainer = document.getElementById("questions-container-2");

    mapContainer.classList.add("hidden");
    questionsContainer.classList.remove("hidden");
    loadReto2Question();
  };

  const loadReto2Question = () => {
    const questionText = document.getElementById("question-text-2");
    const answersContainer = document.getElementById("answers-container-2");
    const nextButton = document.getElementById("next-button-2");
    const errorMessage = document.getElementById("error-message-2");

    questionText.textContent = reto2Questions[currentReto2Index].question;
    answersContainer.innerHTML = "";
    errorMessage.classList.add("hidden");
    nextButton.classList.add("hidden");

    const shuffledAnswers = reto2Questions[currentReto2Index].answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("button");
      button.onclick = () => checkReto2Answer(answer, button);
      answersContainer.appendChild(button);
    });
  };

  const checkReto2Answer = (selectedAnswer, button) => {
    const currentQuestion = reto2Questions[currentReto2Index];
    const nextButton = document.getElementById("next-button-2");
    const errorMessage = document.getElementById("error-message-2");

    document.querySelectorAll("#answers-container-2 .button").forEach((btn) =>
      btn.classList.remove("selected")
    );
    button.classList.add("selected");

    if (selectedAnswer === currentQuestion.correct) {
      nextButton.classList.remove("hidden");
      errorMessage.classList.add("hidden");
    } else {
      errorMessage.classList.remove("hidden");
    }
  };

  const loadNextQuestion2 = () => {
    currentReto2Index++;
    if (currentReto2Index < reto2Questions.length) {
      loadReto2Question();
    } else {
      alert("You have completed Challenge 2!");
      setActivePage("reto-3-intro");
    }
  };

  document.getElementById("start-challenge-2").addEventListener("click", startChallenge2);
});

