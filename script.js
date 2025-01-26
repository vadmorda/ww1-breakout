document.addEventListener("DOMContentLoaded", () => {
  // Función para cambiar entre páginas
  const setActivePage = (pageId) => {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.remove("active")); // Ocultar todas las páginas
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add("active"); // Mostrar la página seleccionada
  };

  // Asignar el evento al botón de inicio
  const startGameBtn = document.getElementById("start-game-btn");
  if (startGameBtn) {
    startGameBtn.addEventListener("click", () => {
      setActivePage("challenge-1");
      loadReto1Question(); // Iniciar las preguntas del reto 1
    });
  }

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
    {
        question: "Which country declared war on Serbia after the assassination of Archduke Franz Ferdinand?",
        answers: ["Austria-Hungary", "Germany", "Russia"],
        correct: "Austria-Hungary",
    },
    {
        question: "What was the primary reason for the naval race between Great Britain and Germany?",
        answers: ["To secure trade routes", "To demonstrate military dominance", "To prepare for war"],
        correct: "To demonstrate military dominance",
    },
    {
        question: "What was the purpose of the Schlieffen Plan?",
        answers: ["To avoid a two-front war", "To strengthen alliances", "To expand naval power"],
        correct: "To avoid a two-front war",
    },
    {
        question: "What role did alliances play in the escalation of World War I?",
        answers: ["They increased tensions and spread the conflict", "They prevented conflicts from occurring", "They neutralized key threats"],
        correct: "They increased tensions and spread the conflict",
    },
    {
        question: "Which event led to Great Britain entering World War I?",
        answers: ["The invasion of Belgium", "The assassination of Franz Ferdinand", "Germany's naval expansion"],
        correct: "The invasion of Belgium",
    },
    {
        question: "What term describes the belief in building and maintaining a strong military?",
        answers: ["Militarism", "Imperialism", "Nationalism"],
        correct: "Militarism",
    },
    {
        question: "What is the name of the alliance formed by France, Russia, and Britain?",
        answers: ["Triple Entente", "Triple Alliance", "Dual Alliance"],
        correct: "Triple Entente",
    },
    {
        question: "What was the immediate consequence of Franz Ferdinand's assassination?",
        answers: ["Austria-Hungary issued an ultimatum to Serbia", "Russia declared war on Austria-Hungary", "Germany invaded France"],
        correct: "Austria-Hungary issued an ultimatum to Serbia",
    },
    {
        question: "Why did Germany seek colonies before World War I?",
        answers: ["To gain a 'place in the sun'", "To avoid alliances", "To strengthen the Triple Entente"],
        correct: "To gain a 'place in the sun'",
    },
    {
        question: "Which colonial crisis involved Germany challenging French control?",
        answers: ["The Moroccan Crisis", "The Balkans Dispute", "The Berlin Conference"],
        correct: "The Moroccan Crisis",
    },
    {
        question: "What was the Serbian nationalist group involved in the assassination of Franz Ferdinand?",
        answers: ["The Black Hand", "The Red Guard", "The Serbian Front"],
        correct: "The Black Hand",
    },
  ];

  let currentReto1Index = 0;

  // Función para cargar preguntas del reto 1
  const loadReto1Question = () => {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("answers");

    if (!questionElement || !answersElement) {
      console.error("No se encontraron los elementos HTML necesarios para el reto 1.");
      return;
    }

    // Cargar pregunta actual
    questionElement.textContent = reto1Questions[currentReto1Index].question;
    answersElement.innerHTML = ""; // Limpiar respuestas anteriores

    // Crear botones para las respuestas
    reto1Questions[currentReto1Index].answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer-option");
      button.onclick = () => checkReto1Answer(answer);
      answersElement.appendChild(button);
    });
  };

  // Validar respuesta seleccionada
  const checkReto1Answer = (answer) => {
    if (answer === reto1Questions[currentReto1Index].correct) {
      currentReto1Index++;
      if (currentReto1Index < reto1Questions.length) {
        loadReto1Question(); // Cargar la siguiente pregunta
      } else {
        alert("You have completed Challenge 1!");
        // Aquí puedes definir la transición a la siguiente página
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };
});
