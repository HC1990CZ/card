// Evento para aplicar el efecto parallax en el video de fondo
window.addEventListener("scroll", () => {
    const video = document.getElementById("bg-video");
    if (video) {
        // Calcula la posición de desplazamiento y ajusta la transformación del video
        const scrollPosition = window.scrollY;
        video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});
