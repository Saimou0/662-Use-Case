let ilmoitus = document.getElementById("ilmoitus")

function rekisteroidy() {
    let kayttaja = document.getElementById("kayttaja").value;
    let salasana = document.getElementById("salasana").value;
    
    // Tarkistetaan onko tiedot tyhjät
    if(kayttaja != "" || salasana != "") {
        // Tarkistetaan ovatko tiedot vähintään 6 merkkiä pitkiä
        if(kayttaja.length >= 6 && salasana.length >= 6) {
            ilmoitus.style.color = "green";
            ilmoitus.innerHTML = "Rekisteröinti valmis";
            
            // Ohjataan käyttäjä kirjautumis sivulle
            setTimeout(function() {
                window.location.href = "index.html";
            }, 1000);

        } else {
            ilmoitus.style.color = "red";
            ilmoitus.innerHTML = "Käyttäjätunnuksen ja salasanan pitää olla vähintään 6 merkkiä pitkä";
        }
    }
    
    if(kayttaja  == "" || salasana == "") {
        ilmoitus.style.color = "red";
        ilmoitus.innerHTML = "käyttäjätunnus tai salasana tyhjä";
    }
    
}

// Kirjautuminen
const valmisKayttaja = "123456"
const valmisSalasana = "123456"

const valmisYllapitaja = "654321"
const valmisYllapitajaSalasana = "654321"

function kirjaudu() {
    let kayttajaKirjautuminen = document.getElementById("kayttajaKirjautuminen").value;
    let salasanaKirjautuminen = document.getElementById("salasanaKirjautuminen").value;

    // Tarkistetaan ovat tiedot tyhjät
    if(kayttajaKirjautuminen != "" || salasanaKirjautuminen != "") {

        // Katsotaan kuka kirjautuu sisään käyttäjä vai ylläpitäjä
        if(kayttajaKirjautuminen == valmisKayttaja && salasanaKirjautuminen == valmisSalasana) {
            
            // Ohjataan oikealle etusivulle
            window.location.href = "etusivu.html"

            
        } else if(kayttajaKirjautuminen == valmisYllapitaja && salasanaKirjautuminen == valmisYllapitajaSalasana) {

            window.location.href = "yllapitajaEtusivu.html"

        } else {

            // ilmoitetaan jos on väärät tiedot
            ilmoitus.style.color = "red";
            ilmoitus.innerHTML = "Väärä käyttäjätunnus tai salasana";
            
        }


    }


    if(kayttaja  == "" || salasana == "") {
        ilmoitus.style.color = "red";
        ilmoitus.innerHTML = "käyttäjätunnus tai salasana tyhjä";
        
    }
}