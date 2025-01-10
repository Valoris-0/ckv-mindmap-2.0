// App.js - Voeg dynamische functionaliteit toe aan je pagina

// Controleer op welke pagina je bent
const currentPage = document.body.className;

// Hoofdpagina functionaliteiten
if (currentPage === 'main-page') {
    // Dynamische welkomsboodschap
    const today = new Date();
    const hours = today.getHours();
    let greeting = 'Hello!';

    if (hours < 12) {
        greeting = 'Goedemorgen!';
    } else if (hours < 18) {
        greeting = 'Goedemiddag!';
    } else {
        greeting = 'Goedenavond!';
    }

    // Maak een paragraaf met de welkomsboodschap
    const welcomeMessage = document.createElement('p');
    welcomeMessage.innerText = `${greeting} Welkom Bij Anthon's Mindmap.`;
    welcomeMessage.style.position = 'absolute';
    welcomeMessage.style.top = '20px';
    welcomeMessage.style.right = '20px';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.fontSize = '18px';
    welcomeMessage.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(welcomeMessage);

    // Voeg een hover-effect toe aan de link
    const link = document.querySelector('a');
    link.addEventListener('mouseenter', () => {
        link.innerText = 'Klik om te Verkennen';
    });
    link.addEventListener('mouseleave', () => {
        link.innerText = 'Naar Mindmap';
    });
}

// Mindmap-pagina functionaliteiten
if (currentPage === 'mindmap-page') {
    // Voeg een lichte animatie toe aan de knoppen
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        button.style.transition = 'transform 0.3s ease';
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.2)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Automatisch focus op de eerste knop
    if (buttons.length > 0) {
        buttons[0].focus();
    }
}
