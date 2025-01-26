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
  
  // Variables para códigos de acceso
  let validCodes = ["12345", "54321", "67890", "09876", "11223", "33445", "55667", "77889", "99000"];
  let generatedCode = "";

  // Generar un código único
  const generateCode = () => {
    generatedCode = Math.floor(10000 + Math.random() * 90000).toString(); // Código de 5 dígitos
    validCodes.push(generatedCode);
    document.getElementById("generated-code").textContent = generatedCode;
  };

  // Validar código de acceso
  const validateCode = (inputCode) => validCodes.includes(inputCode);

  // Manejo del botón de validación en la página inicial
  document.getElementById("code-verify").addEventListener("click", () => {
    const codeInput = document.getElementById("code-input").value.trim();
    const errorElement = document.getElementById("code-error");
    if (validateCode(codeInput)) {
      errorElement.classList.add("hidden");
      setActivePage("challenge-3");
    } else {
      errorElement.classList.remove("hidden");
    }
  });

  // Manejo del botón de validación en la transición al Reto 3
  document.getElementById("verify-code").addEventListener("click", () => {
    const codeInput = document.getElementById("access-code").value.trim();
    const errorElement = document.getElementById("code-error-message");
    if (validateCode(codeInput)) {
      errorElement.classList.add("hidden");
      setActivePage("challenge-3");
    } else {
      errorElement.classList.remove("hidden");
    }
  });

  // Botón para iniciar el juego
  document.getElementById("start-game").onclick = () => {
    setActivePage("challenge-1");
    loadReto1Question();
  };

  // Reto 1: Preguntas
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
        setActivePage("transition-page");
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };

  // Botón para avanzar al Reto 2
  document.getElementById("to-challenge-2").onclick = () => {
    setActivePage("challenge-2");
    loadReto2Question();
  };

  // Reto 2: Preguntas
  const reto2Questions = [
     { question: "How were the Triple Alliance countries known in 1915?", answers: ["Central Powers", "Triple Entente", "Allied Forces"], correct: "Central Powers" },
    { question: "How were the Triple Entente countries known in 1915?", answers: ["Central Powers", "The Allies", "Eastern Bloc"], correct: "The Allies" },
    { question: "Which European power left the Triple Alliance before the war started?", answers: ["Italy", "Austria-Hungary", "Germany"], correct: "Italy" },
    { question: "Which two eastern powers joined the Central Powers during the war?", answers: ["Bulgaria and Ottoman Empire", "Romania and Portugal", "Serbia and Greece"], correct: "Bulgaria and Ottoman Empire" },
  ];

  let currentReto2Index = 0;

  const loadReto2Question = () => {
    const questionText = document.getElementById("question-text-2");
    const answersContainer = document.getElementById("answers-container-2");
    questionText.textContent = reto2Questions[currentReto2Index].question;
    answersContainer.innerHTML = "";

    reto2Questions[currentReto2Index].answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => checkReto2Answer(answer);
      answersContainer.appendChild(button);
    });
  };

  const checkReto2Answer = (selectedAnswer) => {
    if (selectedAnswer === reto2Questions[currentReto2Index].correct) {
      currentReto2Index++;
      if (currentReto2Index < reto2Questions.length) {
        loadReto2Question();
      } else {
        generateCode();
        setActivePage("transition-to-challenge-3");
      }
    } else {
      alert("Incorrect! Try again.");
    }
  };

  // Reto 3: Manejo de preguntas
  const reto3Questions = [
    { question: "Who was assassinated on June 28, 1914, sparking World War I?", type: "word", correct: "Archduke Franz Ferdinand" },
    { question: "What country was blamed for the assassination?", type: "word", correct: "Serbia" },
    { question: "What was Germany's military strategy called?", answers: ["Schlieffen Plan", "Blitzkrieg", "Anaconda Plan"], correct: "Schlieffen Plan" },
    { question: "Which two blocs were Europe divided into?", answers: ["Triple Alliance and Triple Entente", "Axis and Allies", "Northern Bloc and Southern Bloc"], correct: "Triple Alliance and Triple Entente" },
{ question: "Which country issued an ultimatum to Serbia after the assassination?", type: "word", correct: "Austria-Hungary" },
{ question: "On what date did Austria-Hungary declare war on Serbia?", type: "word", correct: "July 28, 1914" },
{ question: "Which country mobilized its troops to defend Serbia?", type: "word", correct: "Russia" },
{ question: "What was the first country Germany declared war on?", answers: ["Russia", "France", "Serbia"], correct: "Russia" },
{ question: "Which neutral country did Germany invade, prompting Britain to declare war?", type: "word", correct: "Belgium" },
{ question: "What major battle marked the beginning of trench warfare?", type: "word", correct: "Battle of the Marne" },
{ question: "What was the alliance between Germany, Austria-Hungary, and Italy called?", type: "word", correct: "Triple Alliance" },
{ question: "What alliance consisted of France, Britain, and Russia?", type: "word", correct: "Triple Entente" },
{ question: "Which empire joined the Central Powers in November 1914?", answers: ["Ottoman Empire", "Japan", "Italy"], correct: "Ottoman Empire" },
{ question: "Which empire suffered defeats against Russia and Serbia?", type: "word", correct: "Austria-Hungary" },
{ question: "What plan aimed to quickly defeat France by invading through Belgium?", type: "word", correct: "Schlieffen Plan" },
{ question: "What major battle delayed Germany's advance towards Paris in 1914?", type: "word", correct: "Battle of the Frontiers" },
{ question: "Which countries fought over colonial possessions in Africa during the war?", answers: ["Allies and Central Powers", "Germany and Britain", "France and Italy"], correct: "Allies and Central Powers" },
{ question: "What was the main cause of food shortages in Germany during the war?", type: "word", correct: "Naval blockade" },
{ question: "What event disrupted the fragile balance among Europe's great powers?", answers: ["Assassination of Franz Ferdinand", "Treaty of Versailles", "Germany's invasion of Belgium"], correct: "Assassination of Franz Ferdinand" },
{ question: "What term describes the state of prolonged conflict in trenches?", type: "word", correct: "Trench warfare" }

  let currentReto3Index = 0;

  const loadReto3Question = () => {
    const questionElement = document.getElementById("question-text-3");
    const answersElement = document.getElementById("answers-3");
    const currentQuestion = reto3Questions[currentReto3Index];

    questionElement.textContent = currentQuestion.question;

    if (currentQuestion.type === "word") {
      answersElement.innerHTML = `<input type="text" id="word-answer" />`;
      document.getElementById("word-answer").onchange = (e) =>
        checkReto3Answer(e.target.value);
    } else {
      answersElement.innerHTML = "";
      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkReto3Answer(answer);
        answersElement.appendChild(button);
      });
    }
  };

  const checkReto3Answer = (selectedAnswer) => {
    const currentQuestion = reto3Questions[currentReto3Index];
    if (selectedAnswer.toLowerCase() === currentQuestion.correct.toLowerCase()) {
      currentReto3Index++;
      if (currentReto3Index < reto3Questions.length) {
        loadReto3Question();
      } else {
        alert("Congratulations! You have completed the Breakout!");
      }
    } else {
      alert("Incorrect. Try again!");
    }
  };
});
