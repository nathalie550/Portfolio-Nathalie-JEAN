/**********************************FLECHE RETOUR PRECEDENT******************/
// script.js
function goBack() {
    window.history.back();
}


/********************FICHIER METIERS AVEC DETAILS  POPUP********************************/

function openDetail(id) {
    document.getElementById(id).style.display = "block";
}

function closeDetail(id) {
    document.getElementById(id).style.display = "none";
}



/***********************************PAGE ME CONTACTER*************************************/

// Variables de référence
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const messagesContainer = document.getElementById('messages');

// Table de réponses prédéfinies du bot
const botResponses = {
    "bonjour": "Bonjour ! Je suis le bot de votre portfolio. Je suis là pour te donner mes informations de contact",
    "hello": "Je suis le bot de votre portfolio. Je suis là pour te donner mes informations de contact",
    "ton email": "Mon email est : jeannathalie@gmail.com.",
    "ton mail": "Mon email est : jeannathalie@gmail.com.",
    "mail": "Mon email est : jeannathalie@gmail.com.",
    "ton adresse": "Je réside à 69700 GIVORS, France.",
    "adresse": "Je réside à 69700 GIVORS, France.",
    "ta date de naissance": "Je suis née le 12/07/1970.",
    "ta date": "Je suis née le 12/07/1970.",
    "naissance": "Je suis née le 12/07/1970.",
    "as-tu le permis ?": "J'ai le permis de conduire de catégorie B.",
    "ton permis ?": "oui j'ai le permis de catégorie B.",
    "permis ?": "J'ai le permis de conduire de catégorie B.",
    "permis": "J'ai le permis de conduire de catégorie B.",
    "merci": "Avec plaisir ! 😊 Si vous avez d'autres questions, n'hésitez pas à me demander.",
    "bye": "À bientôt ! Si vous avez d'autres questions, je reste disponible.",
    "aide": "Je peux vous fournir mes coordonnées professionnelles, telles que mon email, mon adresse, ma date de naissance, ou mes informations sur le permis de conduire. Que souhaitez-vous savoir ?"
};

// Fonction pour envoyer un message
function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();

    if (userMessage) {
        // Ajouter le message de l'utilisateur
        addMessage(userMessage, 'user-message');

        // Répondre automatiquement
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage(botResponse, 'bot-message');
        }, 1000);
    }

    // Effacer l'input
    userInput.value = '';
    userInput.focus();
}

// Fonction pour obtenir la réponse du bot
function getBotResponse(userMessage) {
    // Vérifier si le message correspond à une question prédéfinie
    const response = botResponses[userMessage];

    // Si la question n'est pas dans les réponses prédéfinies, répondre par une réponse générique
    if (response) {
        return response;
    } else {
        return "Désolé, je n'ai pas compris. Peux-tu reformuler ?";
    }
}

// Fonction pour ajouter un message à la zone de conversation
function addMessage(message, messageClass) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);

    if (messageClass === 'bot-message') {
        // Ajouter l'avatar du bot
        const botAvatar = document.createElement('div');
        botAvatar.classList.add('bot-avatar');
        const botImage = document.createElement('img');
        botImage.src = 'chatbot.png';  // Remplace avec le chemin de ton image
        botImage.alt = 'ChatBot';
        botAvatar.appendChild(botImage);

        messageElement.appendChild(botAvatar);
    }

    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);

    // Faire défiler l'écran vers le bas pour voir le dernier message
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Ajouter un événement de clic sur le bouton d'envoi
sendBtn.addEventListener('click', sendMessage);

// Ajouter un événement pour l'entrer (taper "Entrée" pour envoyer)
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Fonction pour démarrer la conversation avec un message du bot
function startConversation() {
    const welcomeMessage = "Bonjour ! Je suis là pour te donner mes informations de contact. Voici ce que tu peux savoir :\n\n" +
        "- Mon email\n" +
        "- Mon adresse\n" +
        "- Ma date de naissance\n" +
        "- Mon permis de conduire\n\n" +
        "Que souhaites-tu savoir ?";
    addMessage(welcomeMessage, 'bot-message');
}

// Démarrer la conversation dès que la page est chargée
window.onload = startConversation;






