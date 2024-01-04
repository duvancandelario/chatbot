document.addEventListener("DOMContentLoaded", function() {
    displayMessage("bot", "¡Hola! Soy un bot. ¿En qué puedo ayudarte?");
    displayMessage  
});

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value;

    if (userMessage.trim() !== "") {
        displayMessage("user", userMessage);
        respondToUser(userMessage.toLowerCase()); // Convertir el mensaje del usuario a minúsculas para facilitar la comparación.
        userInput.value = ""; // Limpiar el campo de entrada después de enviar el mensaje.
    }
}

function respondToUser(message) {
    if (message.includes("hola")) {
        
        displayMessage("bot", "¡Hola! ¿Cómo estás?");
    } else {
        // Respuesta genérica para otros mensajes.
        displayMessage("bot", "Lo siento, no tengo una respuesta específica para eso.");
    }
}

function displayMessage(sender, text) {
    var chatDisplay = document.getElementById("chat-display");
    var messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.innerHTML = text;
    chatDisplay.appendChild(messageDiv);

    // Ajustar el desplazamiento para mostrar el último mensaje.
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
