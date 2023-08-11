**Nimi:** Selaa äänestyksiä

**Käyttäjät:** Käyttäjä

**Laukaisija:** Käyttäjä kirjautuu sisään.

**Esiehto:** Sivuston on oltava toimiva ja saavutettavissa.

**Jälkiehto:** Sivu vaihtunut ja käyttäjälle näytetään äänestykset.

**Käyttötapauksen kulku:** Käyttäjä kirjautuu sisään, jonka jälkeen järjestelmä näyttää käyttäjälle listan sillä hetkellä käynnissä olevista äänestyksistä.

**Poikkeuksellinen toiminta:** Jos ei ole käynnissä olevia äänestyksiä, systeemi näyttää viestin siitä.

----

**Nimi:** Valitsee äänestyksen

**Käyttäjät:** Käyttäjä

**Laukaisija:** Käyttäjä valitsee käynnissä olevan äänestyksen.

**Esiehto:** Käyttäjä pitää olla kirjautunut sisään, ja pitää olla käynnissä olevia äänestyksiä. 

**Jälkiehto:** Käyttäjälle näytetään valittu äänestys.

**Käyttötapauksen kulku:** Käyttäjän kuuluu olla kirjautunut sisään. Käyttäjä valitsee käynnissä olevan äänestyksen, jonka jälkeen järjestelmä näyttää äänestyksen tiedot.

**Poikkeuksellinen toiminta:** Jos käyttäjä ei ole kirjautunut sisään, järjestelmä ei näytä äänestystä vaan ilmoituksen siitä että käyttäjä ei ole kirjautunut sisään. Jos äänestys loppuu näyttää järjestelmä 
ilmoituksen siitä.

----

**Nimi:** Katsoo äänestystilanteen

**Käyttäjät:** Käyttäjä

**Laukaisija:** Käyttäjä valitsee käynnissä olevan äänestyksen.

**Esiehto:** Käyttäjä pitää olla kirjautunut sisään, ja pitää olla käynnissä olevia äänestyksiä.

**Jälkiehto:** Käyttäjälle näytetään äänestyksen tilanne.

**Käyttötapauksen kulku:** Käyttäjän kuuluu olla kirjautunut sisään. Käyttäjä valitsee käynnissä olevan äänestyksen, jonka jälkeen järjestelmä näyttää äänestyksen tilanteen.

**Poikkeuksellinen toiminta:** Jos käyttäjä ei ole kirjautunut sisään, järjestelmä ei näytä äänestyksen tilaa vaan ilmoituksen siitä että käyttäjä ei ole kirjautunut sisään. Jos äänestys loppuu näyttää järjestelmä 
ilmoituksen siitä.

----

**Nimi:** Äänestää

**Käyttäjät:** Käyttäjä

**Laukaisija:** Käyttäjä valitsee äänestys valikosta haluamansa vaihto ehdon.

**Esiehto:** Käyttäjä pitää olla kirjautunut sisään, ja pitää olla käynnissä olevia äänestyksiä.

**Jälkiehto:** Järjestelmä kirjaa käyttäjän valinnan muistiin.

**Käyttötapauksen kulku:** Käyttäjän kuuluu olla kirjautunut sisään. Käyttäjä valitsee käynnissä olevan äänestyksen valikosta haluamansa vaihtoehdon, jonka jälkeen järjestelmä laittaa sen muistiin ja näyttää sen äänestystilanteessa.

**Poikkeuksellinen toiminta:** Jos käyttäjä ei ole kirjautunut sisään, järjestelmä ei anna käyttäjän äänestää vaan antaa ilmoituksen siitä että käyttäjä ei ole kirjautunut sisään. Jos äänestys loppuu näyttää järjestelmä ilmoituksen siitä. Käyttäjät voivat äänestää ainoastaan kerran jokaisessa äänestyksessä.

----

**Nimi:** Kirjautuminen

**Käyttäjät:** Käyttäjä ja ylläpitäjä

**Laukaisija:** Käyttäjä avaa kirjautumis sivun.

**Esiehto:** Käyttäjällä on oikea käyttäjänimi ja salasana, ja järjestelmä toimiva ja saavutettavissa. 

**Jälkiehto:** Käyttäjä pystyy käyttämään järjestelmää heidän pääsytason mukaan.

**Käyttötapauksen kulku:** Käyttäjä avaa kirjautumis sivun ja antaa käyttäjätunnuksen ja salasanansa. Järjestelmä varmistaa ovatko käyttäjätunnus ja salasana oikeat. Jos käyttäjätunnus ja salasana ovat oikeat järjestelmä antaa käyttäjälle
pääsyn järjestelmään heidän pääsytason mukaan.

**Poikkeuksellinen toiminta:** Jos käyttäjä antaa väärän käyttäjätunnuksen tai salasanan, järjestelmä näyttää ilmoituksen siitä.

----

**Nimi:** Rekisteröinti

**Käyttäjät:** Käyttäjä ja ylläpitäjä

**Laukaisija:** Käyttäjä avaa rekisteröitymis sivun.

**Esiehto:** Järjestelmä on toimiva ja saavutettavissa. Käyttäjän pitää antaa oikean muotoisen käyttjätunnuksen ja salasanan järjestelmälle.

**Jälkiehto:** Käyttäjän käyttäjätunnus ja salasana ovat järjestelmän muistissa.

**Käyttötapauksen kulku:** Käyttäjä avaa rekisteröitymis sivun, ja antaa oikean muotoisen käyttjätunnuksen ja salasanan järjestelmälle, jonka jälkeen järjestelmä tallentaa ne muistiin.

**Poikkeuksellinen toiminta:** Jos käyttäjän antama käyttäjätunnus tai salasana eivät ole oikean muotoisia, järjestelmä ilmoittaa siitä.

----

**Nimi:** Tekee uusia äänestyksiä

**Käyttäjät:** Ylläpitäjä

**Laukaisija:** Käyttäjä avaa sivun, joka on tarkoitettu äänestyksien tekemiseen.

**Esiehto:** Järjestelmä on toimiva ja saavutettavissa ja käyttäjä on kirjautunut sisään.

**Jälkiehto:** Käyttäjä on tehnyt uuden äänestyksen, joka näkyy kaikille käyttäjille.

**Käyttötapauksen kulku:** Käyttäjä avaa äänestyksien tekemiselle tarkoitetun sivun, kirjoittaa äänestykselle otsikon ja kaiken muun tiedon, jonka jälkeen järjestelmä tallentaa sen muistiin ja näyttää sen kaikille käyttäjille äänestysvalikossa.

**Poikkeuksellinen toiminta:** Jos käyttäjä ei ole kirjautunut sisään, järjestelmä ei anna käyttäjän tehdä uutta äänestysä vaan antaa ilmoituksen siitä että käyttäjä ei ole kirjautunut sisään. Jos äänestyksesä ei ole täytetty kaikkea tarpeellista, järjestelmä ilmoittaa siitä.

----

**Nimi:** Poistaa äänestyksiä

**Käyttäjät:** Ylläpitäjä

**Laukaisija:** Käyttäjä avaa äänestysvalikon, jossa järjestelmä näyttää napin jokaisen äänestyksen kohdalla josta käyttäjä voi poistaa kyseisen äänestyksen.

**Esiehto:** Järjestelmä on toimiva ja saavutettavissa ja käyttäjä on kirjautunut sisään.

**Jälkiehto:** Painettuaan poisto-nappia ja varmistaakseen äänestyksen poistamisen, järjestelmä poistaa äänestyksen valikosta.

**Käyttötapauksen kulku:** Käyttäjän kuuluu olla kirjautunut sisään ja järjestelmän pitää olla toimiva ja tavoitettavissa. Käyttäjä avaa äänestysvalikon ja painaa haluamansa äänestyksen poisto-napista, jonka jälkeen järjestelmä poistaa äänestyksen valikosta.

**Poikkeuksellinen toiminta:** Jos järjestelmä ei ole tavoitettavissa, antaa asiakasohjelma siitä ilmoituksen.