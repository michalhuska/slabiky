const slabiky = ["la", "LA", "La", "lá", "Lá", "Le", "le", "LE", "Lé", "lé", "li", "Lí", "lo", "ló", "lu", "Lu", "Lů", "lů", "ma", "Ma", "MA", "má", "Má", "MÁ", "me", "ME", "mé", "mi", "mí", "Mí", "Mo", "mo", "MO", "Mó", "mó", "mu", "mů", "Mů", "na", "Na", "NA", "Ná", "Ná", "NÁ", "ne", "NE", "Né", "ni", "ní", "Ní", "No", "no", "NO", "Nó", "nó", "nu", "nů", "Nů", "pa", "PA", "Pá", "pá", "Pe", "pe", "Pé", "pé", "pi", "Pi", "pí", "Pí", "PO", "po", "Pó", "pó", "Pu", "pu", "pů", "Pů", "Sa", "SA", "sa", "sá", "Sá", "se", "SE", "sé", "Sé", "So", "so", "SO", "Só", "só", "su", "Su", "sů", "Sů", "sama", "sele", "Véna", "Ála", "Álo!", "Álo", "ELA", "Ela", "Elo!", "Elo", "Ema", "Emil", "Emo!", "Emo", "eso", "Eva", "máma", "máme", "MÍLA", "Ola", "Olo!", "mísa", "mele", "pusa", "mimi", "osel", "les", "pes", "salám", "láme", "lípa", "pila", "maso"];
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
