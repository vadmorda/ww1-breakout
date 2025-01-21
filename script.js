document.addEventListener('DOMContentLoaded', () => {
    const selectedCountries = []; // Array para almacenar selecciones
   
   
   // Navigate to the next page
    window.nextPage = (currentPageId, nextPageId) => {
        document.getElementById(currentPageId).classList.add('hidden');
        document.getElementById(nextPageId).classList.remove('hidden');
    };  
   
   
   // Navegar entre páginas
    window.nextPage = (currentPageId, nextPageId) => {
        document.getElementById(currentPageId).classList.add('hidden');
        document.getElementById(nextPageId).classList.remove('hidden');
    };

  
  
    // Function to check Multiple Choice Questions
    window.checkMCQ = (formId, correctAnswer, currentPageId, nextPageId) => {
        const form = document.getElementById(formId);
        const selectedOption = form.querySelector('input[type="radio"]:checked');
        if (selectedOption && selectedOption.value === correctAnswer) {
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect! Try again.');
        }
    };

    // Function to check text input answers
    window.checkAnswer = (inputId, correctAnswers, currentPageId, nextPageId) => {
        const input = document.getElementById(inputId);
        if (input && correctAnswers.includes(input.value.trim().toLowerCase())) {
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect! Try again.');
        }
    };

    // Function to check multiple correct answers (checkboxes)
    window.checkMultipleAnswers = (formId, correctAnswers, currentPageId, nextPageId) => {
        const form = document.getElementById(formId);
        const selectedOptions = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(
            (input) => input.value
        );
        if (JSON.stringify(selectedOptions.sort()) === JSON.stringify(correctAnswers.sort())) {
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect! Try again.');
        }
    };

    // Function to check drag-and-drop order (Timeline)
    window.checkTimelineOrder = (listId, correctOrder, currentPageId, nextPageId) => {
        const list = document.getElementById(listId);
        const items = Array.from(list.children).map((item) => item.id); // Asegúrate de que los elementos tengan IDs únicos
        if (JSON.stringify(items) === JSON.stringify(correctOrder)) {
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect order! Try again.');
        }
    };

    // Drag-and-drop functionality for Timeline Puzzle
    let draggedElement = null;

    window.drag = (event) => {
        draggedElement = event.target;
        event.dataTransfer.setData('text/plain', event.target.id);
    };

    window.allowDrop = (event) => {
        event.preventDefault();
    };

    window.drop = (event) => {
        event.preventDefault();
        const target = event.target.closest('li'); // Asegúrate de que sea un elemento de lista

        if (target && draggedElement) {
            const parentList = target.parentElement;
            const draggedIndex = Array.from(parentList.children).indexOf(draggedElement);
            const targetIndex = Array.from(parentList.children).indexOf(target);

            if (draggedIndex < targetIndex) {
                parentList.insertBefore(draggedElement, target.nextSibling);
            } else {
                parentList.insertBefore(draggedElement, target);
            }
        }
        draggedElement = null; // Resetea la variable
    };
});


 // Función para manejar clics en las áreas del mapa
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', (event) => {
            const answer = event.target.dataset.answer;
            const feedback = document.getElementById('map-feedback');
            if (!selectedCountries.includes(answer)) {
                selectedCountries.push(answer);
                feedback.textContent = `Selected: ${event.target.alt}`;
            } else {
                feedback.textContent = `Already selected: ${event.target.alt}`;
            }
        });
    });

    // Validar respuestas del mapa
    window.submitMapAnswers = (currentPageId, nextPageId) => {
        const correctAnswers = ['triple-alliance', 'triple-entente']; // Respuestas correctas
        const isCorrect = correctAnswers.every(answer => selectedCountries.includes(answer));

        if (isCorrect) {
            alert('Correct! Moving to the next challenge.');
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect! Please review your selections.');
        }
});
