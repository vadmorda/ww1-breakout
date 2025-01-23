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

    // Navigation helper
    window.nextPage = (currentPageId, nextPageId) => {
        setActivePage(nextPageId);
    };

    // Check answers in challenges
    window.checkAnswer = (formName, currentPageId, nextPageId, digit) => {
        const form = document.getElementsByName(formName);
        const selected = Array.from(form).find(input => input.checked);
        if (selected && selected.value === 'correct') {
            alert(`Correct! Your code digit is: ${digit}`);
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect! Try again.');
        }
    };

    // Check the 6-digit code
    window.checkCode = (correctCode, currentPageId, nextPageId) => {
        const inputs = Array.from(document.querySelectorAll('#reto-2-code input'));
        const userCode = inputs.map(input => input.value).join('');
        if (userCode === correctCode) {
            alert('Correct code! Moving on...');
            nextPage(currentPageId, nextPageId);
        } else {
            alert('Incorrect code! Try again.');
        }
    };

    // Initialize the game on page load
    setActivePage('page-intro');
});
