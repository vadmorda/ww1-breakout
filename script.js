// Navegación entre páginas
function nextPage(current, next) {
    const currentPage = document.getElementById(current);
    const nextPage = document.getElementById(next);

    // Añadir animación de salida
    currentPage.style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        currentPage.classList.add('hidden');
        nextPage.classList.remove('hidden');

        // Añadir animación de entrada
        nextPage.style.animation = 'fadeIn 1s forwards';
    }, 1000);
}

// Validar respuestas
function checkAnswer(inputId, correctAnswer, currentPage, nextPageId) {
    const answer = document.getElementById(inputId).value.toLowerCase().trim();
    const feedback = document.createElement('div');

    // Eliminar feedback previo
    const existingFeedback = document.querySelector('.feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    if (answer === correctAnswer) {
        feedback.innerText = '¡Correcto!';
        feedback.style.color = 'green';
        feedback.classList.add('feedback');
        document.body.appendChild(feedback);

        setTimeout(() => {
            nextPage(currentPage, nextPageId);
        }, 1500);
    } else {
        feedback.innerText = 'Respuesta incorrecta. Intenta de nuevo.';
        feedback.style.color = 'red';
        feedback.classList.add('feedback');
        document.body.appendChild(feedback);
    }
}

// Validar preguntas con múltiples respuestas
function checkMultipleAnswers(formId, correctCount, currentPage, nextPageId) {
    const selected = document.querySelectorAll(`#${formId} input:checked`);
    const feedback = document.createElement('div');

    // Eliminar feedback previo
    const existingFeedback = document.querySelector('.feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    if (
        selected.length === correctCount &&
        Array.from(selected).every(el => el.value === 'correct')
    ) {
        feedback.innerText = '¡Correcto!';
        feedback.style.color = 'green';
        feedback.classList.add('feedback');
        document.body.appendChild(feedback);

        setTimeout(() => {
            nextPage(currentPage, nextPageId);
        }, 1500);
    } else {
        feedback.innerText = 'Respuestas incorrectas. Intenta de nuevo.';
        feedback.style.color = 'red';
        feedback.classList.add('feedback');
        document.body.appendChild(feedback);
    }
}

// Animaciones de entrada y salida
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.feedback {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    font-size: 1.2em;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    color: white;
    z-index: 1000;
    animation: fadeIn 0.5s ease-in-out, fadeOut 2s ease-in-out 1.5s forwards;
}
`;
document.head.appendChild(style);

// Efecto interactivo en botones
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
