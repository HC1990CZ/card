// Mensajes a mostrar en los toasts
const messages = [
    "Hola, soy Daria 👶",
    "Quiero contarte que...🤭​",
    "Mi cumpleaños va a ser muy pronto 🎂",
"Voy a cumplir mi 1er año 🤭",
    "Y quiero invitarte a mi fiesta 🥳",
    "Espero que puedas acompañarnos 😚",
        "❤️❤️❤️",
];

// Elementos del DOM
const container = document.getElementById("toast-container");
const sound = document.getElementById("notification-sound");
const notificationButton = document.getElementById("notification-button");

// Configuración
const toastDisplayTime = 6000; // Tiempo que dura visible cada toast
const toastInterval = 1800; // Tiempo entre la aparición de cada toast
let delay = 0;

// Función para mostrar los mensajes en toasts
function showMessages() {
    // Ocultar botón para evitar múltiples ejecuciones
    notificationButton.style.display = "none";

    messages.forEach((message, index) => {
        setTimeout(() => {
            createToast(message);
        }, delay);

        // Incrementar el delay para cada mensaje
        delay += toastInterval;
    });
}

// Crear y mostrar un toast
function createToast(message) {
    // Crear elemento de toast
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;

    // Añadir al contenedor
    container.prepend(toast);

    // Reproducir sonido
    playSound();

    // Mostrar el toast con animación
    setTimeout(() => toast.classList.add("show"), 100);

    // Remover el toast después del tiempo configurado
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500); // Tiempo adicional para animación de salida
    }, toastDisplayTime);
}

// Reproducir el sonido de notificación
function playSound() {
    sound.currentTime = 0; // Reinicia el sonido
    sound.play();
}

// Evento para iniciar los toasts al hacer clic en el botón
notificationButton.addEventListener("click", showMessages);
