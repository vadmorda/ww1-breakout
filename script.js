document.addEventListener("DOMContentLoaded", () => {
   // Función para establecer la página activa
   const setActivePage = (pageId) => {
       const pages = document.querySelectorAll(".page");
       pages.forEach((page) => page.classList.add("hidden"));
       const targetPage = document.getElementById(pageId);
       if (targetPage) targetPage.classList.remove("hidden");
   };

   // Función para iniciar el juego
   window.startGame = () => {
       setActivePage("challenge-1"); // Cambiar a la página del reto 1
       loadReto1Question(); // Iniciar las preguntas del reto 1
   };

   // Inicializar: Mostrar solo la página intro al cargar
   setActivePage("page-intro");
});
  // Navegación entre páginas
  window.nextPage = (currentPageId, nextPageId) => {
    const currentPage = document.getElementById(currentPageId);
    const nextPage = document.getElementById(nextPageId);

    if (currentPage) currentPage.classList.add("hidden");
    if (nextPage) nextPage.classList.remove("hidden");
  };

  // ------------------------ Reto 1 ------------------------

  const reto1Questions = [
    {
      question: "What policy did Great Britain adopt in 1889?",
      answers: ["Two Power Standard", "Naval Expansion Act", "Empire Building"],
      correct: "Two Power Standard",
    },
    {
      question: "Who was the German Admiral in 1897?",
      answers: ["Alfred von Tirpitz", "Otto von Bismarck", "Wilhelm II"],
      correct: "Alfred von Tirpitz",
    },
    {
      question: "Which alliance included Germany, Austria, and Italy?",
      answers: ["Triple Alliance", "Triple Entente", "Dual Alliance"],
      correct: "Triple Alliance",
    },
    {
      question: "What sparked the beginning of World War I?",
      answers: ["Franz Ferdinand's assassination", "Naval race", "Alsace-Lorraine conflict"],
      correct: "Franz Ferdinand's assassination",
    },
  ];

  let currentReto1Index = 0;

  // Función para cargar las preguntas del reto 1
  const loadReto1Question = () => {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("answers");

    // Verifica que existan los elementos HTML
    if (!questionElement || !answersElement) {
      console.error("No se encontraron los elementos para mostrar las preguntas del reto 1.");
      return;
    }

    // Mostrar la pregunta actual
    questionElement.textContent = reto1Questions[currentReto1Index].question;
    answersElement.innerHTML = ""; // Limpiar respuestas anteriores

    // Crear botones para cada respuesta
    reto1Questions[currentReto1Index].answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer-option");
      button.onclick = () => checkReto1Answer(answer); // Validar respuesta
      answersElement.appendChild(button);
    });
  };

  // Función para validar la respuesta seleccionada en Reto 1
  const checkReto1Answer = (answer) => {
    if (answer === reto1Questions[currentReto1Index].correct) {
      currentReto1Index++;
      if (currentReto1Index < reto1Questions.length) {
        loadReto1Question(); // Cargar la siguiente pregunta
      } else {
        alert("You have completed Challenge 1!");
        nextPage("challenge-1", "transition-page"); // Ir a la página de transición
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };

  // ------------------------ Reto 2 ------------------------
document.addEventListener("DOMContentLoaded", () => {
  const startReto2 = () => {
    const gifContainer = document.getElementById("gif-container");
    const questionsContainer = document.getElementById("questions-container");

    // Asegurar que el contenedor del mapa se muestra inicialmente
    gifContainer.classList.remove("hidden");
    questionsContainer.classList.add("hidden");

    // Temporizador de dos minutos para observar el mapa
    setTimeout(() => {
      gifContainer.classList.add("hidden"); // Ocultar el mapa
      questionsContainer.classList.remove("hidden"); // Mostrar las preguntas
      loadReto2Question(); // Cargar la primera pregunta del reto 2
    }, 120000); // 120000 milisegundos = 2 minutos
  };

  // Definir preguntas del reto 2
  const reto2Questions = [
    {
      question: "How were the Triple Alliance countries known in 1915?",
      correctAnswer: "centralpowers",
      type: "text",
    },
    {
      question: "How were the Triple Entente countries known in 1915?",
      correctAnswer: ["allies", "theallies"],
      type: "text",
    },
    {
      question: "Which European power left the Triple Alliance before the war started?",
      correctAnswer: "italy",
      type: "text",
    },
    {
      question: "Which two eastern powers joined the Central Powers during the war?",
      correctAnswer: "bulgariaandottomanempire",
      type: "multiple",
      options: ["Bulgaria and Ottoman Empire", "Romania and Portugal", "Serbia and Greece"],
    },
  ];

  let currentReto2Index = 0;

  // Cargar pregunta actual del reto 2
  const loadReto2Question = () => {
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const errorMessage = document.getElementById("error-message");
    const nextButton = document.getElementById("next-button");

    if (!questionText || !answersContainer) {
      console.error("Faltan elementos HTML para mostrar las preguntas del reto 2.");
      return;
    }

    const currentQuestion = reto2Questions[currentReto2Index];

    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = ""; // Limpiar respuestas anteriores
    errorMessage.classList.add("hidden");
    nextButton.classList.add("hidden");

    if (currentQuestion.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.id = "user-answer";
      answersContainer.appendChild(input);

      const submit = document.createElement("button");
      submit.textContent = "Submit";
      submit.classList.add("button");
      submit.onclick = checkReto2TextAnswer;
      answersContainer.appendChild(submit);
    } else if (currentQuestion.type === "multiple") {
      currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-option");
        button.onclick = () => checkReto2MultipleChoice(option);
        answersContainer.appendChild(button);
      });
    }
  };

  // Validar respuestas de texto
  const checkReto2TextAnswer = () => {
    const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase().replace(/\s+/g, "");
    const correctAnswer = reto2Questions[currentReto2Index].correctAnswer;

    if (
      (Array.isArray(correctAnswer) && correctAnswer.includes(userAnswer)) ||
      userAnswer === correctAnswer
    ) {
      document.getElementById("next-button").classList.remove("hidden");
    } else {
      document.getElementById("error-message").classList.remove("hidden");
    }
  };

  // Validar respuestas de opción múltiple
  const checkReto2MultipleChoice = (selected) => {
    const correctAnswer = reto2Questions[currentReto2Index].correctAnswer;

    if (selected.toLowerCase().replace(/\s+/g, "") === correctAnswer) {
      document.getElementById("next-button").classList.remove("hidden");
    } else {
      document.getElementById("error-message").classList.remove("hidden");
    }
  };

  // Navegar entre preguntas del reto 2
  window.loadNextQuestion = () => {
    currentReto2Index++;
    if (currentReto2Index < reto2Questions.length) {
      loadReto2Question();
    } else {
      alert("You have completed Challenge 2!");
      nextPage("reto-2", "reto-3-intro");
    }
  };

  // Iniciar el reto 2 al cargar la página correspondiente
  document.getElementById("reto-2").addEventListener("load", startReto2);
});


  // ------------------------ Reto 3 ------------------------

  const reto3Questions = [
    { question: "Who was assassinated to spark World War I?", answer: "archduke franz ferdinand" },
    { question: "Which nations formed the Triple Entente?", answer: ["france", "russia", "britain"] },
    { question: "Which plan was Germany's strategy for a two-front war?", answer: "schlieffen plan" },
  ];

  let currentReto3Index = 0;

  const loadReto3Question = () => {
    const questionText = document.getElementById("question-text");
    const answerInput = document.getElementById("answer-input");
    const errorMessage = document.getElementById("error-message");
    questionText.textContent = reto3Questions[currentReto3Index].question;
    answerInput.value = "";
    errorMessage.classList.add("hidden");
  };

  const checkReto3Answer = () => {
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    const correctAnswer = reto3Questions[currentReto3Index].answer;

    if (Array.isArray(correctAnswer) ? correctAnswer.includes(userAnswer) : userAnswer === correctAnswer) {
      currentReto3Index++;
      if (currentReto3Index < reto3Questions.length) {
        loadReto3Question();
      } else {
        alert("You have completed Challenge 3!");
        nextPage("reto-3-questions", "reto-3-transition");
      }
    } else {
      document.getElementById("error-message").classList.remove("hidden");
    }
  };
});
