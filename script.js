const slabiky = ["ma", "Ma", "me", "me", "Le", "má", "mé", "lá", "Lé", "Lá", "ma", "me", "la", "le", "ma", "mé", "Má", "Lá", "Lé", "LE", "LA", "Sa", "sá", "sé", "SA", "sa", "se", "Sá", "Sé", "sa", "ma", "MÁ", "SE", "se", "le", "lé", "MA", "na", "La", "Sá", "La", "Sá", "SA", "SA", "ME", "LE", "Ála", "máma", "ELA", "MÍLA", "Emil", "Ola", "eso", "Ema", "Eva", "Véna", "sele", "máme", "sama", "Álo", "Emo", "Elo"];
let currentIndex = 0;

document.getElementById("readButton").addEventListener("click", readCurrentSlabika);
document.getElementById("nextButton").addEventListener("click", showNextSlabika);

function readCurrentSlabika() {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(slabiky[currentIndex]);
    utterance.lang = 'cs-CZ';
	utterance.rate = 0.4; // Rychlost mluvení (1 je normální rychlost)
    utterance.pitch = 1.9; // Výška hlasu (1 je normální výška)
    synth.speak(utterance);
}

function showNextSlabika() {
    currentIndex = Math.floor(Math.random() * slabiky.length);
    document.getElementById("slabika").textContent = slabiky[currentIndex];
}
