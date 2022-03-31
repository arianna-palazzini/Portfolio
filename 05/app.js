"use strict";
class FirstUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    // Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
    // con i seguenti metodi: un metodo definito come public void ricarica(double unaRicarica), che ricarica il
    // telefonino. Un metodo definito come public void chiamata(double minutiDurata), che
    // effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    // Tale metodo dovra' aggiornare la carica disponibile ed incrementare la variabile
    // contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
    // di 0.20 euro per ogni minuto di chiamata)
    chiamata(durata) {
        this.carica -= durata * 0.00333333; //DIVISO IN SECONDI 
    }
    // un metodo public number numero404(),
    // che restituisce il valore della carica disponibile.
    numero404() {
        return this.carica;
    }
    // Un metodo public number
    // getNumeroChiamate() che restituisce il valore della variabile d'istanza
    // numeroChiamate.
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    // Infine, un metodo public void azzeraChiamate(), che azzera la
    // variabile contenente il numero di chiamate effettuate dal telefonino.
    // Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.
    azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}
class SecondUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica -= Math.round((minutiDurata * 0.0033333) * 100) / 100;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}
class ThirdUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica -= minutiDurata * 0.00333333;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}
let ciccio = new FirstUser();
let ciccio2 = new SecondUser();
let ciccio3 = new ThirdUser();
const mesi = [
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre'
];
let dataOggi = new Date();
document.getElementById('dataOggi').innerHTML = String(dataOggi.getDate()) + ' / ' + String(mesi[dataOggi.getMonth()]) + ' / ' + String(dataOggi.getFullYear());
document.getElementById("creditoResiduo").innerHTML = "Per il credito seleziona un utente";
document.getElementById("chiamateEffettuate").innerHTML = "Per le chiamate seleziona un utente";
function mostraInfo() {
    let contatto = document.getElementById("contatto").value;
    if (contatto == "ciccio") {
        document.getElementById("creditoResiduo").innerHTML = "Credito residuo: " + String(ciccio.carica);
        document.getElementById("chiamateEffettuate").innerHTML = "Chiamate effettuate: " + String(ciccio.numeroChiamate);
    }
    else if (contatto == "ciccio2") {
        document.getElementById("creditoResiduo").innerHTML = "Credito residuo: " + String(ciccio2.carica);
        document.getElementById("chiamateEffettuate").innerHTML = "Chiamate effettuate: " + String(ciccio2.numeroChiamate);
    }
    else if (contatto == "ciccio3") {
        document.getElementById("creditoResiduo").innerHTML = "Credito residuo: " + String(ciccio3.carica);
        document.getElementById("chiamateEffettuate").innerHTML = "Chiamate effettuate: " + String(ciccio3.numeroChiamate);
    }
}
function graficaRicarica() {
    let valore = document.getElementById("contattoRicarica").value;
    let campoRicarica = document.getElementById('ricaricato');
    let valoreInputRicarica = document.getElementById('ricarica').value;
    if (valore == 'ciccio') {
        campoRicarica.innerHTML = String('');
        ciccio.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio.carica);
    }
    else if (valore == 'ciccio2') {
        ciccio2.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio2.carica);
    }
    else if (valore == 'ciccio3') {
        ciccio3.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio3.carica);
    }
    return;
}
function graficaChiamata() {
    let contatto = document.getElementById("contatto").value;
    document.getElementById("timer").hidden = false;
    if (contatto == "ciccio") {
        ciccio.numeroChiamate++;
    }
    else if (contatto == "ciccio2") {
        ciccio2.numeroChiamate++;
    }
    else if (contatto == "ciccio3") {
        ciccio3.numeroChiamate++;
    }
    let s = 0, m = 0, h = 0;
    let interval = setInterval(function () {
        let clock = document.getElementById('timer');
        clock.innerHTML = h + " h " + m + " m " + s + " s";
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
    }, 1000);
    document.getElementById("chiudi").addEventListener("click", () => {
        if (contatto == "ciccio") {
            ciccio.chiamata(s);
        }
        else if (contatto == "ciccio2") {
            ciccio2.chiamata(s);
        }
        else if (contatto == "ciccio3") {
            ciccio3.chiamata(s);
        }
        mostraInfo();
        document.getElementById("timer").hidden = true;
        clearInterval(interval);
        return;
    });
}
function graficaAzzera() {
    let contatto = document.getElementById("contatto").value;
    if (contatto == "ciccio") {
        ciccio.azzeraChiamate();
    }
    else if (contatto == "ciccio2") {
        ciccio2.azzeraChiamate();
    }
    else if (contatto == "ciccio3") {
        ciccio3.azzeraChiamate();
    }
    mostraInfo();
}
