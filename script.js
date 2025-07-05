const phrases = [
    "O espírito humano deve prevalecer sobre a tecnologia.<br><br> - Albert Einstein",
    "O verdadeiro problema não é se as máquinas pensam, mas se os humanos o fazem.<br><br> - B. F. Skinner",
    "Aqueles que controlam o passado controlam o futuro.<br><br> - Maquiavel",
    "O prazer no trabalho põe perfeição no trabalho.<br><br> - Aristóteles",
    "Escolhe um trabalho que você ame e você nunca terá que trabalhar um dia na sua vida.<br><br> - Confúcio",
    "O que não me mata, me fortalece.<br><br> - Friedrich Nietzsche"
];

let timeoutId;

document.getElementById('msgButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    
    const phraseRandom = phrases[Math.floor(Math.random() * phrases.length)];
    messageDiv.innerHTML = phraseRandom;

    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
        messageDiv.innerHTML = '';
    }, 8000);
});
