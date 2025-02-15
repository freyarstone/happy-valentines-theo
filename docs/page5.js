// Confetti effect for page 5
if (document.body.classList.contains('page5')) {
    window.onload = function () {
        const confettiContainer = document.querySelector('.confetti-container');

        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            confetti.style.left = Math.random() * 100 + 'vw';  // Full screen width coverage
            confetti.style.width = Math.random() * 8 + 3 + 'px';  // Random confetti width
            confetti.style.height = Math.random() * 15 + 6 + 'px';  // Random confetti height
            confetti.style.animationDuration = Math.random() * 2 + 6 + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';  // Spread start times

            confettiContainer.appendChild(confetti);
        }

        // Generate confetti
        for (let i = 0; i < 1500; i++) {
            setTimeout(createConfetti, i * 5);
        }
    };
}
