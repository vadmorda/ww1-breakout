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
  let validCodes = [
    "12345",
    "54321",
    "67890",
    "09876",
    "11223",
    "33445",
    "55667",
    "77889",
    "99000"
  ];
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
      setActivePage("challenge-3");
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
      setActivePage("challenge-3");
    } else {
      errorElement.classList.remove("hidden");
    }
  });

  // Preguntas del Reto 1
  const reto1Questions = [
    {
      question:
        "What policy did Great Britain adopt in 1889 to maintain naval superiority?",
      answers: [
        "Two Power Standard",
        "Naval Arms Act",
        "Imperial Defense Strategy"
      ],
      correct: "Two Power Standard"
    },
    {
      question:
        "Which German admiral advocated for a stronger navy to rival Britain?",
      answers: ["Alfred von Tirpitz", "Otto von Bismarck", "Wilhelm II"],
      correct: "Alfred von Tirpitz"
    },
    {
      question: "What was Kaiser Wilhelm II's approach to imperialism called?",
      answers: ["Weltpolitik", "Lebensraum", "Pax Germania"],
      correct: "Weltpolitik"
    },
    {
      question:
        "Which war conference in 1912 showed Germany's preparation for war?",
      answers: [
        "German War Conference",
        "Congress of Vienna",
        "Berlin Conference"
      ],
      correct: "German War Conference"
    },
    {
      question:
        "What was the alliance between Germany, Austria-Hungary, and Italy called?",
      answers: ["Triple Alliance", "Triple Entente", "Central Powers"],
      correct: "Triple Alliance"
    },
    {
      question:
        "By what year had France, Britain, and Russia formed the Triple Entente?",
      answers: ["1907", "1897", "1912"],
      correct: "1907"
    },
    {
      question:
        "What colonial rivalry between Germany and France almost led to war?",
      answers: [
        "Moroccan Crises",
        "Alsace-Lorraine Conflict",
        "Berlin Conference"
      ],
      correct: "Moroccan Crises"
    },
    {
      question:
        "Which territories did Germany annex after the Franco-Prussian War?",
      answers: [
        "Alsace and Lorraine",
        "Saarland and Rhineland",
        "Bohemia and Moravia"
      ],
      correct: "Alsace and Lorraine"
    },
    {
      question:
        "What nationalist organization was Gavrilo Princip a member of?",
      answers: ["The Black Hand", "The Iron Guard", "The Serbian League"],
      correct: "The Black Hand"
    },
    {
      question:
        "What term describes France's desire for revenge after losing Alsace-Lorraine?",
      answers: ["Revanchism", "Imperialism", "Nationalism"],
      correct: "Revanchism"
    },
    {
      question:
        "Which empire was the most ethnically diverse in Europe before WWI?",
      answers: ["Austro-Hungarian Empire", "German Empire", "Russian Empire"],
      correct: "Austro-Hungarian Empire"
    },
    {
      question:
        "What movement in Serbia aimed to unite the Balkans and gain independence?",
      answers: ["Balkan Nationalism", "Panslavism", "Unification Movement"],
      correct: "Balkan Nationalism"
    },
    {
      question:
        "What belief fueled Britain's desire to maintain the strongest navy?",
      answers: ["Nationalism", "Imperialism", "Isolationism"],
      correct: "Nationalism"
    },
    {
      question:
        "What historian compared the pre-WWI period to modern globalization?",
      answers: ["Margaret McMillan", "Barbara Tuchman", "John Keegan"],
      correct: "Margaret McMillan"
    },
    {
      question:
        "Which German chancellor emphasized the need to avoid war in 1898?",
      answers: ["Otto von Bismarck", "Alfred von Tirpitz", "Kaiser Wilhelm II"],
      correct: "Otto von Bismarck"
    }
  ];

  let currentReto1Index = 0;

  const loadReto1Question = () => {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("answers");
    if (!questionElement || !answersElement) return;

    const question = reto1Questions[currentReto1Index];
    questionElement.textContent = question.question;

    const shuffledAnswers = [...question.answers].sort(
      () => Math.random() - 0.5
    );
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
    {
      question: "How were the Triple Alliance countries known in 1915?",
      answers: ["Central Powers", "Triple Entente", "Allied Forces"],
      correct: "Central Powers"
    },
    {
      question: "How were the Triple Entente countries known in 1915?",
      answers: ["Central Powers", "The Allies", "Eastern Bloc"],
      correct: "The Allies"
    },
    {
      question:
        "Which European power left the Triple Alliance before the war started?",
      answers: ["Italy", "Austria-Hungary", "Germany"],
      correct: "Italy"
    },
    {
      question:
        "Which two eastern powers joined the Central Powers during the war?",
      answers: [
        "Bulgaria and Ottoman Empire",
        "Romania and Portugal",
        "Serbia and Greece"
      ],
      correct: "Bulgaria and Ottoman Empire"
    }
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

    const shuffledAnswers = reto2Questions[currentReto2Index].answers.sort(
      () => Math.random() - 0.5
    );

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

    document
      .querySelectorAll("#answers-container-2 .button")
      .forEach((btn) => btn.classList.remove("selected"));
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
    loadReto3Question(); 
  };

  document
    .getElementById("start-challenge-2")
    .addEventListener("click", startChallenge2);
  document
    .getElementById("next-button-2")
    .addEventListener("click", loadNextQuestion2);
});
document.addEventListener("DOMContentLoaded", () => {
  const reto3Questions = [
      {
    question: "¿Qué alianzas principales dividían a Europa antes de la Primera Guerra Mundial?",
    answers: ["La Triple Entente y la Triple Alianza", "La Liga de Naciones y el Eje", "La Alianza Franco-Rusa y el Tratado de Versalles"],
    correct: "La Triple Entente y la Triple Alianza"
  },
 {
    question: "What were the main alliances dividing Europe before World War I?",
    answers: [
      "The Triple Entente and the Triple Alliance",
      "The League of Nations and the Axis",
      "The Franco-Russian Alliance and the Treaty of Versailles"
    ],
    correct: "The Triple Entente and the Triple Alliance"
  },
  {
    question: "Which countries were part of the Triple Entente?",
    answers: [
      "France, Germany, and Great Britain",
      "France, Great Britain, and Russia",
      "Great Britain, Russia, and Austria-Hungary"
    ],
    correct: "France, Great Britain, and Russia"
  },
  {
    question: "Who was assassinated on June 28, 1914, in Sarajevo?",
    answers: ["Nicholas II", "Archduke Franz Ferdinand", "Gavrilo Princip"],
    correct: "Archduke Franz Ferdinand"
  },
  {
    question: "Which country was accused of supporting the assassination of Archduke Franz Ferdinand?",
    answers: ["Serbia", "Russia", "France"],
    correct: "Serbia"
  },
  {
    question: "Which empire declared war on Serbia after it rejected the ultimatum?",
    answers: ["Germany", "Austria-Hungary", "Turkey"],
    correct: "Austria-Hungary"
  },
  {
    question: "Why did Nicholas II of Russia order the mobilization of the Russian army?",
    answers: [
      "To defend Serbia",
      "To invade Germany",
      "To respond to the naval blockade"
    ],
    correct: "To defend Serbia"
  },
  {
    question: "What was Germany's military plan for a two-front war called?",
    answers: ["Schlieffen Plan", "Plan XVII", "Operation Barbarossa"],
    correct: "Schlieffen Plan"
  },
  {
    question: "Why did Germany invade Belgium in 1914?",
    answers: [
      "To capture resources",
      "To bypass and quickly defeat France",
      "To prevent a Russian attack"
    ],
    correct: "To bypass and quickly defeat France"
  },
  {
    question: "Which country declared war on Germany after the invasion of Belgium?",
    answers: ["United States", "Italy", "Great Britain"],
    correct: "Great Britain"
  },
  {
    question: "Which battle marked the halting of the German advance near Paris?",
    answers: ["Battle of the Marne", "Battle of Verdun", "Battle of Ypres"],
    correct: "Battle of the Marne"
  },
  {
    question: "What strategy did both sides adopt after the Battle of the Marne?",
    answers: [
      "The 'Race to the Sea'",
      "The invasion of Italy",
      "Naval blockades"
    ],
    correct: "The 'Race to the Sea'"
  },
  {
    question: "What type of warfare began with trenches dug along the front?",
    answers: ["Mobile warfare", "War of attrition", "Trench warfare"],
    correct: "Trench warfare"
  },
  {
    question: "What revolutionary weapon did Germany introduce in 1914?",
    answers: ["Torpedo-launching submarines", "Combat aircraft", "Poison gas"],
    correct: "Torpedo-launching submarines"
  },
  {
    question: "Which power maintained the naval blockade on Germany?",
    answers: ["Russia", "Great Britain", "France"],
    correct: "Great Britain"
  },
  {
    question: "What naval battle did the British win at the start of the war?",
    answers: ["Battle of Coronel", "Heligoland Bight", "Jutland"],
    correct: "Heligoland Bight"
  },
  {
    question: "What event marked Turkey's entry into the war?",
    answers: [
      "Bombing of Odessa and Sevastopol",
      "Invasion of Persia",
      "Union with Bulgaria"
    ],
    correct: "Bombing of Odessa and Sevastopol"
  },
  {
    question: "What mistake did Russian forces make on the Eastern Front?",
    answers: [
      "Use of uncoded wireless messages",
      "Direct attack on Berlin",
      "Failing to mobilize sufficient troops"
    ],
    correct: "Use of uncoded wireless messages"
  },
  {
    question: "Which battle was a major victory for Germany on the Eastern Front?",
    answers: [
      "Battle of Tannenberg",
      "Battle of the Marne",
      "Battle of Masurian Lakes"
    ],
    correct: "Battle of Tannenberg"
  },
  {
    question: "Which country suffered significant defeats in its invasion of Serbia?",
    answers: ["Germany", "Austria-Hungary", "Turkey"],
    correct: "Austria-Hungary"
  },
  {
    question: "What strategy did Colonel von Lettow-Vorbeck adopt in Africa?",
    answers: ["Guerrilla warfare", "Naval assault", "Massive invasion operations"],
    correct: "Guerrilla warfare"
  },
  {
    question: "Which German colony was captured by Australian and New Zealand forces?",
    answers: ["New Guinea", "Cameroon", "Togo"],
    correct: "New Guinea"
  },
  {
    question: "Which Asian country joined the Allies at the start of the war?",
    answers: ["Japan", "China", "Korea"],
    correct: "Japan"
  },
  {
    question: "Which battle off Chile resulted in the loss of two British cruisers?",
    answers: [
      "Battle of Coronel",
      "Battle of the Falkland Islands",
      "Battle of Jutland"
    ],
    correct: "Battle of Coronel"
  },
  {
    question: "Which city was besieged by the Russians on the Eastern Front?",
    answers: ["Przemyśl", "Warsaw", "Lodz"],
    correct: "Przemyśl"
  },
  {
    question: "Which battle caused a Russian retreat in the Caucasus in 1914?",
    answers: ["Sarikamish", "Odessa", "Sevastopol"],
    correct: "Sarikamish"
  },
  {
    question: "Which country guaranteed Belgian neutrality before the war?",
    answers: ["Great Britain", "France", "Germany"],
    correct: "Great Britain"
  },
  {
    question: "What colonial powers fought in Africa during 1914?",
    answers: [
      "Germany and Great Britain",
      "France and Portugal",
      "Belgium and Japan"
    ],
    correct: "Germany and Great Britain"
  },
  {
    question: "What treaty obligated Italy to join the Triple Alliance in case of a defensive war?",
    answers: [
      "Treaty of the Triple Alliance",
      "Treaty of Paris",
      "Treaty of Brest-Litovsk"
    ],
    correct: "Treaty of the Triple Alliance"
  },
  {
    question: "What country bombed Belgrade at the start of the war?",
    answers: ["Austria-Hungary", "Germany", "Russia"],
    correct: "Austria-Hungary"
  },
  {
    question: "What event marked a brief ceasefire on the Western Front during Christmas 1914?",
    answers: [
      "Football matches in No Man's Land",
      "Peace conference",
      "Complete cessation of hostilities"
    ],
    correct: "Football matches in No Man's Land"
  },
  {
    question: "What was the main goal of the Schlieffen Plan?",
    answers: [
      "Quickly defeat Russia before moving to France",
      "Avoid a two-front war by defeating France first",
      "Attack Belgium and seize resources"
    ],
    correct: "Avoid a two-front war by defeating France first"
  },
  {
    question: "What was the German plan designed to quickly attack France and then Russia called?",
    answers: ["Schlieffen Plan", "Barbarossa Plan", "Plan XVII"],
    correct: "Schlieffen Plan"
  },
  {
    question: "What military strategy did France implement at the start of the war to attack Germany?",
    answers: ["Schlieffen Plan", "Plan XVII", "Operation Marne"],
    correct: "Plan XVII"
  }

  ];

  let currentReto3Index = 0;
   console.log("Loading question index:", currentReto3Index);

  const loadReto3Question = () => {
  const questionText = document.getElementById("question-3-text");
  const answersContainer = document.getElementById("answers-3-container");
  const errorMessage = document.getElementById("error-3-message");
  
    if (!questionText || !answersContainer || !errorMessage) {
    console.error("HTML elements missing. Check IDs in your HTML.");
    return;
  }
  // Verifica si hay más preguntas
if (currentReto3Index >= reto3Questions.length) {
    console.log("All questions answered. Proceeding to final page.");
    alert("You have completed Challenge 3!");
    loadFinalPage();
    return;
  }

  // Carga la pregunta actual
  const currentQuestion = reto3Questions[currentReto3Index];
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = ""; // Limpia las respuestas previas
  errorMessage.classList.add("hidden"); // Oculta mensajes de error

  // Genera botones para las respuestas
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-option");
    button.onclick = () => checkReto3Answer(answer);
    answersContainer.appendChild(button);
  });
};
  console.log("Question loaded:", currentQuestion.question);
};
  
  
const checkReto3Answer = (selectedAnswer) => {
  const currentQuestion = reto3Questions[currentReto3Index];
  const errorMessage = document.getElementById("error-3-message");

  if (selectedAnswer === currentQuestion.correct) {
    currentReto3Index++;
    loadReto3Question(); // Carga la siguiente pregunta
  } else {
    errorMessage.classList.remove("hidden"); // Muestra mensaje de error
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
      alert("Code accepted. Proceeding to Challenge 3...");
      setActivePage("challenge-3");
      loadReto3Question();
    } else {
      errorElement.classList.remove("hidden");
    }
  });
