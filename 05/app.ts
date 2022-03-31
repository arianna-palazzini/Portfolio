// Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare
// con contratto a ricarica.
interface Smartphone {
    // Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza e'
    // definita come number carica, e rappresenta il quantitativo di euro
    // disponibile per le chiamate. La seconda variabile d'istanza e' definita come
    // number numeroChiamate, e rappresenta il numero di chiamate effettuate con
    // il cellulare.
    carica: number;
    numeroChiamate: number;

    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class FirstUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }

    // Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
    // con i seguenti metodi: un metodo definito come public void ricarica(double unaRicarica), che ricarica il
    // telefonino. Un metodo definito come public void chiamata(double minutiDurata), che
    // effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }
    // Tale metodo dovra' aggiornare la carica disponibile ed incrementare la variabile
    // contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
    // di 0.20 euro per ogni minuto di chiamata)
    public chiamata(durata: number): void {
        this.carica -= durata * 0.00333333;  //DIVISO IN SECONDI 

    }
    // un metodo public number numero404(),
    // che restituisce il valore della carica disponibile.
    public numero404(): number {
        return this.carica;
    }
    // Un metodo public number
    // getNumeroChiamate() che restituisce il valore della variabile d'istanza
    // numeroChiamate.
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    // Infine, un metodo public void azzeraChiamate(), che azzera la
    // variabile contenente il numero di chiamate effettuate dal telefonino.
    // Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.
    public azzeraChiamate() {
        return this.numeroChiamate = 0; 
    }
}

class SecondUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica -= Math.round((minutiDurata * 0.0033333) * 100) / 100;

    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

class ThirdUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.00333333;

    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
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
(<HTMLElement>document.getElementById('dataOggi')).innerHTML = String(dataOggi.getDate()) + ' / ' + String(mesi[dataOggi.getMonth()]) + ' / ' + String(dataOggi.getFullYear());

(<HTMLParagraphElement>document.getElementById("creditoResiduo")).innerHTML = "Per il credito seleziona un utente";
(<HTMLParagraphElement>document.getElementById("chiamateEffettuate")).innerHTML = "Per le chiamate seleziona un utente";

function mostraInfo() {
    let contatto = (<HTMLSelectElement>document.getElementById("contatto")).value
    if (contatto == "ciccio") {
        (<HTMLParagraphElement>document.getElementById("creditoResiduo")).innerHTML = "Credito residuo: " + String(ciccio.carica);
        (<HTMLParagraphElement>document.getElementById("chiamateEffettuate")).innerHTML = "Chiamate effettuate: " + String(ciccio.numeroChiamate);

    } else if (contatto == "ciccio2") {
        (<HTMLParagraphElement>document.getElementById("creditoResiduo")).innerHTML = "Credito residuo: " + String(ciccio2.carica);
        (<HTMLParagraphElement>document.getElementById("chiamateEffettuate")).innerHTML = "Chiamate effettuate: " + String(ciccio2.numeroChiamate);

    } else if (contatto == "ciccio3") {
        (<HTMLParagraphElement>document.getElementById("creditoResiduo")).innerHTML = "Credito residuo: " + String(ciccio3.carica);
        (<HTMLParagraphElement>document.getElementById("chiamateEffettuate")).innerHTML = "Chiamate effettuate: " + String(ciccio3.numeroChiamate);
    }
}

function graficaRicarica() {
    let valore = (<HTMLSelectElement>document.getElementById("contattoRicarica")).value;
    let campoRicarica = (<HTMLElement>document.getElementById('ricaricato'));
    let valoreInputRicarica = (<HTMLInputElement>document.getElementById('ricarica')).value;

    if (valore == 'ciccio') {
        campoRicarica.innerHTML = String('');
        ciccio.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio.carica);
    } else if (valore == 'ciccio2') {
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
    let contatto = (<HTMLSelectElement>document.getElementById("contatto")).value;

    (<HTMLElement>document.getElementById("timer")).hidden = false;
    if (contatto == "ciccio") {
        ciccio.numeroChiamate++;
    } else if (contatto == "ciccio2") {
        ciccio2.numeroChiamate++;
    } else if (contatto == "ciccio3") {
        ciccio3.numeroChiamate++;
    }
    let s = 0, m = 0, h = 0;

    let interval = setInterval(function () {
        let clock = (<HTMLElement>document.getElementById('timer'));
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

    (<HTMLButtonElement>document.getElementById("chiudi")).addEventListener("click", () => {
        if (contatto == "ciccio") {
            ciccio.chiamata(s);
        } else if (contatto == "ciccio2") {
            ciccio2.chiamata(s);
        } else if (contatto == "ciccio3") {
            ciccio3.chiamata(s);
        }
        mostraInfo();
        (<HTMLElement>document.getElementById("timer")).hidden = true;
        clearInterval(interval);
        return;
    });  
}

function graficaAzzera() {
    let contatto = (<HTMLButtonElement>document.getElementById("contatto")).value;

    if (contatto == "ciccio") {
        ciccio.azzeraChiamate();
    } else if (contatto == "ciccio2") {
        ciccio2.azzeraChiamate();
    } else if (contatto == "ciccio3") {
        ciccio3.azzeraChiamate();
    }
    mostraInfo();
}