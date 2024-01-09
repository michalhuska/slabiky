const slabikyMap = {
    "la": "§la",
    "LA": "LA",
    "La": "La",
    "lá": "§lá",
    "Lá": "Lá",
    "Le": "Le",
    "le": "§le",
    "LE": "LE",
    "Lé": "Lé",
    "lé": "§lé",
    "li": "§li",
    "Lí": "Lí",
    "lo": "§lo",
    "ló": "§ló",
    "lu": "§lu",
    "Lu": "Lu",
    "Lů": "Lů",
    "lů": "§lů",
    "ma": "§ma",
    "Ma": "Ma",
    "MA": "MA",
    "má": "§má",
    "Má": "Má",
    "MÁ": "MÁ",
    "me": "§me",
    "ME": "ME",
    "mé": "§mé",
    "mi": "§mi",
    "mí": "§mí",
    "Mí": "Mí",
    "Mo": "Mo",
    "mo": "§mo",
    "MO": "MO",
    "Mó": "Mó",
    "mó": "§mó",
    "mu": "§mu",
    "mů": "§mů",
    "Mů": "Mů",
    "na": "§na",
    "Na": "Na",
    "NA": "NA",
    "Ná": "Ná",
    "Ná": "Ná",
    "NÁ": "NÁ",
    "ne": "§ne",
    "NE": "NE",
    "Né": "Né",
    "ni": "§ni",
    "ní": "§ní",
    "Ní": "Ní",
    "No": "No",
    "no": "§no",
    "NO": "NO",
    "Nó": "Nó",
    "nó": "§nó",
    "nu": "§nu",
    "nů": "§nů",
    "Nů": "Nů",
    "pa": "§pa",
    "PA": "P§A",
    "Pá": "P§á",
    "pá": "§pá",
    "Pe": "P§e",
    "pe": "§pe",
    "Pé": "P§é",
    "pé": "§pé",
    "pi": "§pi",
    "Pi": "P§i",
    "pí": "§pí",
    "Pí": "P§í",
    "PO": "P§O",
    "po": "§po",
    "Pó": "P§ó",
    "pó": "§pó",
    "Pu": "P§u",
    "pu": "§pu",
    "pů": "§pů",
    "Pů": "P§ů",
    "Sa": "S§a",
    "SA": "S§A",
    "sa": "§s§a",
    "sá": "§s§á",
    "Sá": "S§á",
    "se": "§s§e",
    "SE": "S§E",
    "sé": "§s§é",
    "Sé": "S§é",
    "So": "S§o",
    "so": "§s§o",
    "SO": "S§O",
    "Só": "S§ó",
    "só": "§s§ó",
    "su": "§s§u",
    "Su": "S§u",
    "sů": "§s§ů",
    "Sů": "S§ů",
    "sama": "§s§ama",
    "sele": "§s§ele",
    "Véna": "V§éna",
    "Ála": "Ála",
    "Álo!": "Álo!",
    "Álo": "Álo",
    "ELA": "ELA",
    "Ela": "Ela",
    "Elo!": "Elo!",
    "Elo": "Elo",
    "Ema": "Ema",
    "Emil": "Emil",
    "Emo!": "Emo!",
    "Emo": "Emo",
    "eso": "es§o",
    "Eva": "Eva",
    "máma": "§máma",
    "máme": "§máme",
    "MÍLA": "MÍ§LA",
    "Ola": "O§la",
    "Olo!": "O§lo!",
    "mísa": "§mís§a",
    "mele": "§mele",
    "pusa": "pus§a",
    "mimi": "§mimi",
    "osel": "§os§el",
    "les": "§les",
    "pes": "§pes",
    "salám": "§s§alám",
    "láme": "§láme",
    "lípa": "§lípa",
    "pila": "§pila",
    "maso": "§mas§o"
};

let currentIndex = 0;

document.getElementById("readButton").addEventListener("click", readCurrentSlabika);
document.getElementById("nextButton").addEventListener("click", showNextSlabika);

function readCurrentSlabika() {
    let synth = window.speechSynthesis;
    let currentKey = Object.keys(slabikyMap)[currentIndex]; // Get the key corresponding to the current index
    console.log(currentKey);
    let utterance = new SpeechSynthesisUtterance(currentKey.toLowerCase());
    utterance.lang = 'cs-CZ';
    utterance.rate = 0.4; // Rychlost mluvení (1 je normální rychlost)
    utterance.pitch = 1.9; // Výška hlasu (1 je normální výška)
    synth.speak(utterance);
}

function showNextSlabika() {
    currentIndex = Math.floor(Math.random() * Object.keys(slabikyMap).length); // Random index based on the number of keys
	//currentIndex = currentIndex + 1;
    let currentValue = Object.values(slabikyMap)[currentIndex]; // Get the value corresponding to the current index
    document.getElementById("slabika").textContent = currentValue;
}