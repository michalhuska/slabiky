const slabiky = ["me", "mo", "ma", "sé", "sa", "sá", "lo", "la", "lá", "se", "só", "sa", "má", "mé", "mó", "lé", "ló", "le", "pa", "Pá", "pá", "Pe", "pe", "PO", "po", "Pó", "pó", "Pé", "pé", "PA"];
let currentIndex = 0;

document.getElementById("readButton").addEventListener("click", readCurrentSlabika);
document.getElementById("nextButton").addEventListener("click", showNextSlabika);

function readCurrentSlabika() {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(slabiky[currentIndex].toLowerCase());
    utterance.lang = 'cs-CZ';
	utterance.rate = 0.4; // Rychlost mluvení (1 je normální rychlost)
    utterance.pitch = 1.9; // Výška hlasu (1 je normální výška)
    synth.speak(utterance);
}

function showNextSlabika() {
    currentIndex = Math.floor(Math.random() * slabiky.length);
    document.getElementById("slabika").textContent = slabiky[currentIndex];
}
