// Aktiivisen linkin korostus navigoinnissa.
const nykyinenSivu = window.location.href;
const navLinkit = document.querySelectorAll("nav a");

navLinkit.forEach(linkki => {
    if(linkki.href === nykyinenSivu) {
        linkki.classList.add("active");
    }
});


// Äänestyskortin logiikka
const aanestysPalkki = document.getElementById("aanestysPalkki");
const aanestysNappi = document.getElementById("aanestysNappi");
const kyllaKyltti = document.getElementById("aanestysKylttiKylla");
const eiKyltti = document.getElementById("aanestysKylttiEi");
let kyllaAanet = 20;
let eiAanet = 10;

// Lasketaan kyllä äänien prosentti määrä kaikista äänistä ja päivitetään äänestys palkki.
function paivitaAnnet() {
    let aanetYhteensa = kyllaAanet + eiAanet;
    let kyllaProsentti = (kyllaAanet / aanetYhteensa) * 100;
    
    kyllaKyltti.innerHTML = "Kyllä " + kyllaAanet;
    eiKyltti.innerHTML = "Ei " + eiAanet; 
    
    aanestysPalkki.style.width = `${kyllaProsentti}%`;

}

// Päivitetään palkki
paivitaAnnet()

aanestysNappi.addEventListener('click', () => {
    // Päätellään minkä äänen käyttäjä valitsi ja lisätään se ääniin, jonka jälkeen päivitetään palkki.
    const valittuAani = document.querySelector('input[name="aanesta"]:checked');
    if (valittuAani) {
        const kyllaVaiEi = valittuAani.value;

        if (kyllaVaiEi === "kylla") {
            kyllaAanet++;
        } else if (kyllaVaiEi === "ei") {
            eiAanet++;
        }

        paivitaAnnet();

        aanestysNappi.disabled = true;
    }
});


// Ylläpitäjän etusivu

function uusiAanestys() {
    document.getElementById("aanestyksenLisays").style.display = "none";

    document.getElementById("toinenAanestys").style.display = "block";
}

function poistaAanestys() {
    const virhe = document.createElement("p");
    virhe.innerHTML = "Virhe, ei voida poistaa ;)";
    document.getElementById("virhe").appendChild(virhe);


}

function poistaAanestys2() {
    document.getElementById("toinenAanestys").style.display = "none";

    document.getElementById("aanestyksenLisays").style.display = "block";
}