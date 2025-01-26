document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");

  // Función para cambiar la página activa
  const setActivePage = (pageId) => {
    pages.forEach((page) => page.classList.remove("active"));
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add("active");
  };

  // Función para iniciar el juego
  window.startGame = () => {
    setActivePage("challenge-1");
    loadReto1Question();
  };

  // Preguntas del reto 1
  const reto1Questions = [
    { question: "What policy did Great Britain adopt in 1889?", answers: ["Two Power Standard", "Naval Expansion Act", "Empire Building"], correct: "Two Power Standard" },
    { question: "Who was the German Admiral in 1897?", answers: ["Alfred von Tirpitz", "Otto von Bismarck", "Wilhelm II"], correct: "Alfred von Tirpitz" },
    { question: "Which alliance included Germany, Austria, and Italy?", answers: ["Triple Alliance", "Triple Entente", "Dual Alliance"], correct: "Triple Alliance" },
    { question: "What sparked the beginning of World War I?", answers: ["Franz Ferdinand's assassination", "Naval race", "Alsace-Lorraine conflict"], correct: "Franz Ferdinand's assassination" },
    { question: "What was the naval race?", answers: ["Competition for naval supremacy", "A boat competition", "Naval treaties"], correct: "Competition for naval supremacy" },
    { question: "Which country formed the Entente Cordiale with Britain?", answers: ["France", "Germany", "Russia"], correct: "France" },
    { question: "Which empire sought control over the Balkans?", answers: ["Austro-Hungarian", "Ottoman", "British"], correct: "Austro-Hungarian" },
    { question: "What was the Schlieffen Plan?", answers: ["Germany's strategy for a two-front war", "A treaty with Austria", "A naval strategy"], correct: "Germany's strategy for a two-front war" },
    { question: "What country did Germany invade to reach France?", answers: ["Belgium", "Switzerland", "Netherlands"], correct: "Belgium" },
    { question: "Which treaty ended World War I?", answers: ["Treaty of Versailles", "Treaty of Ghent", "Treaty of Paris"], correct: "Treaty of Versailles" },
    { question: "What was the primary cause of the naval arms race?", answers: ["Dreadnought battleships", "Economic competition", "Trade disputes"], correct: "Dreadnought battleships" },
    { question: "What year did World War I begin?", answers: ["1914", "1915", "1916"], correct: "1914" },
    { question: "What country switched sides during World War I?", answers: ["Italy", "Russia", "Japan"], correct: "Italy" },
    { question: "What was the main reason for trench warfare?", answers: ["Machine guns and artillery", "Lack of supplies", "Naval blockades"], correct: "Machine guns and artillery" },
    { question: "What was the purpose of alliances before WWI?", answers: ["To deter conflict", "To promote colonization", "To strengthen trade"], correct: "To deter conflict" }
  ];

  let currentReto1Index = 0;

  // Función para cargar preguntas del reto 1
  const loadReto1Question = () => {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("answers");

    // Verificar elementos
    if (!questionElement || !answersElement) return;

    const question = reto1Questions[currentReto1Index];
    questionElement.textContent = question.question;
    answersElement.innerHTML = ""; // Limpiar respuestas anteriores

    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer-option");
      button.onclick = () => checkReto1Answer(answer);
      answersElement.appendChild(button);
    });
  };

  // Validar respuesta seleccionada
  const checkReto1Answer = (answer) => {
    const correct = reto1Questions[currentReto1Index].correct;
    if (answer === correct) {
      currentReto1Index++;
      if (currentReto1Index < reto1Questions.length) {
        loadReto1Question();
      } else {
        alert("You have completed Challenge 1!");
        setActivePage("transition-page"); // Cambiar a la página de transición
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };

  // Iniciar la carga de preguntas del reto 1
  document.getElementById("challenge-1").addEventListener("load", loadReto1Question);
});
