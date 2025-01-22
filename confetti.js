// Configuración general para confeti
const confettiCount = 500;
const confettiDefaults = {
    origin: { y: 0.9 },
    startVelocity: 30,
    spread: 360,
    ticks: 100,
    zIndex: 9999, // Aseguramos que el confeti se muestre por encima de todo
};

// Función para disparar confeti con una proporción de partículas
function fireConfetti(particleRatio, options = {}) {
    confetti({
        ...confettiDefaults,
        ...options,
        particleCount: Math.floor(confettiCount * particleRatio),
    });
}

// Lanzar confeti inicial al cargar la página
function launchInitialConfetti() {
    fireConfetti(0.25, { spread: 26, startVelocity: 55 });
    fireConfetti(0.2, { spread: 60 });
    fireConfetti(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fireConfetti(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fireConfetti(0.1, { spread: 120, startVelocity: 45 });
}

// Animación prolongada de confeti
function startLongConfetti() {
    const duration = 7000; // 7 segundos
    const animationEnd = Date.now() + duration;

    // Generar número aleatorio en un rango
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            ...confettiDefaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
            ...confettiDefaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
    }, 250);
}

// Inicializar confeti al cargar la página
window.onload = () => {
    launchInitialConfetti();
    startLongConfetti();
};

// Evento para activar confeti al presionar el botón
document.getElementById('confetti-button').addEventListener('click', () => {
    launchInitialConfetti();
});
