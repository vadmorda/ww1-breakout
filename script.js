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

  // Botón de inicio del juego
  document.getElementById("start-game").onclick = () => {
    setActivePage("challenge-1");
    loadReto1Question();
  };

  // Lista de códigos válidos
  let validCodes = ["12345", "54321", "67890", "09876", "11223", "33445", "55667", "77889", "99000"];
  let generatedCode = "";

  // Generar un código único para el usuario
  const generateCode = () => {
    generatedCode = Math.floor(10000 + Math.random() * 90000).toString(); // Código de 5 dígitos
    validCodes.push(generatedCode);
    document.getElementById("generated-code").textContent = generatedCode; // Mostrar en la página
  };

  // Validar códigos
  const validateCode = (inputCode) => validCodes.includes(inputCode);

  // Manejo del botón de validación de código en la página inicial
  document.getElementById("code-verify").addEventListener("click", () => {
    const codeInput = document.getElementById("code-input").value.trim();
    const errorElement = document.getElementById("code-error");
    if (validateCode(codeInput)) {
      errorElement.classList.add("hidden");
      alert("Code accepted. Proceeding to Challenge 3...");
      setActivePage("reto-3-intro");
    } else {
      errorElement.classList.remove("hidden");
    }
  });

  // Manejo del botón de validación de código en la transición al Reto 3
  document.getElementById("verify-code").addEventListener("click", () => {
    const codeInput = document.getElementById("access-code").value.trim();
    const errorElement = document.getElementById("code-error-message");
    if (validateCode(codeInput)) {
      errorElement.classList.add("hidden");
      alert("Code accepted. Proceeding to Challenge 3...");
      setActivePage("reto-3-intro");
    } else {
      errorElement.classList.remove("hidden");
    }
  });

  // Preguntas del Reto 1
  const reto1Questions = [
    { question: "What policy did Great Britain adopt in 1889 to maintain naval superiority?", answers: ["Two Power Standard", "Naval Arms Act", "Imperial Defense Strategy"], correct: "Two Power Standard" },
    { question: "Which German admiral advocated for a stronger navy to rival Britain?", answers: ["Alfred von Tirpitz", "Otto von Bismarck", "Wilhelm II"], correct: "Alfred von Tirpitz" },
    { question: "What was Kaiser Wilhelm II's approach to imperialism called?", answers: ["Weltpolitik", "Lebensraum", "Pax Germania"], correct: "Weltpolitik" },
    { question: "Which war conference in 1912 showed Germany's preparation for war?", answers: ["German War Conference", "Congress of Vienna", "Berlin Conference"], correct: "German War Conference" },
    { question: "What was the alliance between Germany, Austria-Hungary, and Italy called?", answers: ["Triple Alliance", "Triple Entente", "Central Powers"], correct: "Triple Alliance" },
    { question: "By what year had France, Britain, and Russia formed the Triple Entente?", answers: ["1907", "1897", "1912"], correct: "1907" },
    { question: "What colonial rivalry between Germany and France almost led to war?", answers: ["Moroccan Crises", "Alsace-Lorraine Conflict", "Berlin Conference"], correct: "Moroccan Crises" },
    { question: "Which territories did Germany annex after the Franco-Prussian War?", answers: ["Alsace and Lorraine", "Saarland and Rhineland", "Bohemia and Moravia"], correct: "Alsace and Lorraine" },
    { question: "What nationalist organization was Gavrilo Princip a member of?", answers: ["The Black Hand", "The Iron Guard", "The Serbian League"], correct: "The Black Hand" },
    { question: "What term describes France's desire for revenge after losing Alsace-Lorraine?", answers: ["Revanchism", "Imperialism", "Nationalism"], correct: "Revanchism" },
    { question: "Which empire was the most ethnically diverse in Europe before WWI?", answers: ["Austro-Hungarian Empire", "German Empire", "Russian Empire"], correct: "Austro-Hungarian Empire" },
    { question: "What movement in Serbia aimed to unite the Balkans and gain independence?", answers: ["Balkan Nationalism", "Panslavism", "Unification Movement"], correct: "Balkan Nationalism" },
    { question: "What belief fueled Britain's desire to maintain the strongest navy?", answers: ["Nationalism", "Imperialism", "Isolationism"], correct: "Nationalism" },
    { question: "What historian compared the pre-WWI period to modern globalization?", answers: ["Margaret McMillan", "Barbara Tuchman", "John Keegan"], correct: "Margaret McMillan" },
    { question: "Which German chancellor emphasized the need to avoid war in 1898?", answers: ["Otto von Bismarck", "Alfred von Tirpitz", "Kaiser Wilhelm II"], correct: "Otto von Bismarck" },
  ];

  let currentReto1Index = 0;

  const loadReto1Question = () => {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("answers");
    if (!questionElement || !answersElement) return;

    const question = reto1Questions[currentReto1Index];
    questionElement.textContent = question.question;

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

  document.getElementById("to-challenge-2").onclick = () => {
    setActivePage("challenge-2");
  };

  // Reto 2
  const reto2Questions = [
    { question: "How were the Triple Alliance countries known in 1915?", answers: ["Central Powers", "Triple Entente", "Allied Forces"], correct: "Central Powers" },
    { question: "How were the Triple Entente countries known in 1915?", answers: ["Central Powers", "The Allies", "Eastern Bloc"], correct: "The Allies" },
    { question: "Which European power left the Triple Alliance before the war started?", answers: ["Italy", "Austria-Hungary", "Germany"], correct: "Italy" },
    { question: "Which two eastern powers joined the Central Powers during the war?", answers: ["Bulgaria and Ottoman Empire", "Romania and Portugal", "Serbia and Greece"], correct: "Bulgaria and Ottoman Empire" },
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
      nextButton.classList.add("hidden");
    }
  };

  const loadNextQuestion2 = () => {
    currentReto2Index++;
    if (currentReto2Index < reto2Questions.length) {
      loadReto2Question();
    } else {
      alert("You have completed Challenge 2!");
      generateCode();
      setActivePage("transition-to-challenge-3");
    }
  };

  document.getElementById("start-challenge-2").addEventListener("click", startChallenge2);
  document.getElementById("next-button-2").addEventListener("click", loadNextQuestion2);
});
document.addEventListener("DOMContentLoaded", () => {
  const reto3Questions = [
    { question: "What countries made up the Triple Entente?", answers: ["France, Britain, Russia", "Germany, Austria-Hungary, Italy", "France, Russia, Italy"], correct: "France, Britain, Russia" },
    { question: "What event triggered World War I?", answers: ["Assassination of Archduke Franz Ferdinand", "Invasion of Belgium", "Battle of the Marne"], correct: "Assassination of Archduke Franz Ferdinand" },
    // (Añadir el resto de las 33 preguntas aquí siguiendo el formato)
  ];

  let currentReto3Index = 0;

  const loadReto3Question = () => {
    const questionText = document.getElementById("question-3-text");
    const answersContainer = document.getElementById("answers-3-container");
    const errorMessage = document.getElementById("error-3-message");

    questionText.textContent = reto3Questions[currentReto3Index].question;
    answersContainer.innerHTML = "";
    errorMessage.classList.add("hidden");

    reto3Questions[currentReto3Index].answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => checkReto3Answer(answer);
      answersContainer.appendChild(button);
    });
  };

  const checkReto3Answer = (selectedAnswer) => {
    const currentQuestion = reto3Questions[currentReto3Index];
    const errorMessage = document.getElementById("error-3-message");

    if (selectedAnswer === currentQuestion.correct) {
      currentReto3Index++;
      if (currentReto3Index < reto3Questions.length) {
        loadReto3Question();
      } else {
        alert("You have completed Challenge 3!");
        loadFinalPage();
      }
    } else {
      errorMessage.classList.remove("hidden");
    }
  };

  const loadFinalPage = async () => {
    setActivePage("final-page");

    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/1-RRMrn93y7YkyIDNQWF3VsbqwisvKTDf0xKwoI0KorQ/export?format=csv"
    );
    const text = await response.text();
    const codes = text.split("\n");
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    document.getElementById("final-code").textContent = randomCode.trim();
  };

  // Navegación desde el Reto 2 al Reto 3
  document.getElementById("verify-code").addEventListener("click", () => {
    const codeInput = document.getElementById("access-code").value.trim();
    const errorElement = document.getElementById("code-error-message");
    if (validateCode(codeInput)) {
      errorElement.classList.add("hidden");
      setActivePage("challenge-3");
      loadReto3Question();
    } else {
      errorElement.classList.remove("hidden");
    }
  });
});
